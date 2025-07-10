import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, Search, Filter } from 'lucide-react';
import { Book } from '../types';

interface AdminDashboardProps {
  books: Book[];
  onBookUpdate: (books: Book[]) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ books, onBookUpdate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'books' | 'orders'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const stats = [
    { label: 'Total Books', value: books.length, color: 'bg-blue-500' },
    { label: 'In Stock', value: books.filter(b => b.inStock).length, color: 'bg-green-500' },
    { label: 'Out of Stock', value: books.filter(b => !b.inStock).length, color: 'bg-red-500' },
    { label: 'Featured', value: books.filter(b => b.featured).length, color: 'bg-amber-500' }
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleBookStock = (bookId: string) => {
    const updatedBooks = books.map(book =>
      book.id === bookId ? { ...book, inStock: !book.inStock } : book
    );
    onBookUpdate(updatedBooks);
  };

  const toggleFeatured = (bookId: string) => {
    const updatedBooks = books.map(book =>
      book.id === bookId ? { ...book, featured: !book.featured } : book
    );
    onBookUpdate(updatedBooks);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Admin Dashboard</h1>
          <p className="text-slate-600">Manage your bookstore inventory and orders</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-slate-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'books', label: 'Books' },
                { id: 'orders', label: 'Orders' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-amber-500 text-amber-600'
                      : 'border-transparent text-slate-600 hover:text-amber-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 ${stat.color} rounded-full mr-3`}></div>
                        <div>
                          <p className="text-sm text-slate-600">{stat.label}</p>
                          <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { action: 'Book added', item: 'The Midnight Library', time: '2 hours ago' },
                      { action: 'Stock updated', item: 'Atomic Habits', time: '4 hours ago' },
                      { action: 'Order completed', item: 'Order #1234', time: '6 hours ago' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0">
                        <div>
                          <p className="font-medium text-slate-800">{activity.action}</p>
                          <p className="text-sm text-slate-600">{activity.item}</p>
                        </div>
                        <span className="text-sm text-slate-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'books' && (
              <div>
                {/* Books Management Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search books..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                    />
                  </div>
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center space-x-2 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors"
                  >
                    <Plus className="h-5 w-5" />
                    <span>Add Book</span>
                  </button>
                </div>

                {/* Books Table */}
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Book
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Stock
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Featured
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200">
                        {filteredBooks.map((book) => (
                          <tr key={book.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <img
                                  src={book.image}
                                  alt={book.title}
                                  className="w-10 h-12 object-cover rounded mr-4"
                                />
                                <div>
                                  <div className="text-sm font-medium text-slate-900">{book.title}</div>
                                  <div className="text-sm text-slate-500">{book.author}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex px-2 py-1 text-xs font-semibold bg-slate-100 text-slate-800 rounded-full">
                                {book.category}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                              ${book.price}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() => toggleBookStock(book.id)}
                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                  book.inStock
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                              >
                                {book.inStock ? 'In Stock' : 'Out of Stock'}
                              </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() => toggleFeatured(book.id)}
                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                  book.featured
                                    ? 'bg-amber-100 text-amber-800'
                                    : 'bg-slate-100 text-slate-800'
                                }`}
                              >
                                {book.featured ? 'Featured' : 'Regular'}
                              </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex space-x-2">
                                <button className="text-blue-600 hover:text-blue-900">
                                  <Eye className="h-4 w-4" />
                                </button>
                                <button className="text-amber-600 hover:text-amber-900">
                                  <Edit2 className="h-4 w-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Order Management</h3>
                <div className="bg-white border border-slate-200 rounded-lg p-8 text-center">
                  <p className="text-slate-600">Order management functionality coming soon...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;