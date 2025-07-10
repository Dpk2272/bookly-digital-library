import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, Download, Headphones, FileText } from 'lucide-react';
import { Book } from '../types';
import { categories } from '../data/mockData';
import BookCard from './BookCard';

interface BookCatalogProps {
  books: Book[];
  onBookClick: (book: Book) => void;
  onAddToCart: (book: Book) => void;
  searchQuery?: string;
}

const BookCatalog: React.FC<BookCatalogProps> = ({ books, onBookClick, onAddToCart, searchQuery: initialSearchQuery = '' }) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('title');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedBooks = useMemo(() => {
    let filtered = books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           book.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'author':
          return a.author.localeCompare(b.author);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [books, searchQuery, selectedCategory, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    setSearchQuery(initialSearchQuery);
  }, [initialSearchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Digital Library</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our vast collection of books with free downloads, audiobooks, and detailed summaries
          </p>
        </div>

        {/* Enhanced Search and Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-blue-100">
          {/* Main Search */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-blue-400" />
              <input
                type="text"
                placeholder="Search books, authors, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-4 bg-blue-50 border-2 border-blue-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-lg placeholder-blue-400"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold"
              >
                Search
              </button>
            </div>
          </form>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Category Filter */}
            <div className="flex-1">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-blue-50 font-medium"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex-1">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-blue-50 font-medium"
              >
                <option value="title">Sort by Title</option>
                <option value="author">Sort by Author</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex border-2 border-blue-200 rounded-xl overflow-hidden bg-blue-50">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                    : 'text-blue-600 hover:bg-blue-100'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                    : 'text-blue-600 hover:bg-blue-100'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Access Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Download,
              title: 'Free PDF Downloads',
              description: 'Instant access to thousands of books',
              color: 'from-blue-500 to-blue-600',
              count: '50,000+'
            },
            {
              icon: Headphones,
              title: 'Audio Books',
              description: 'Professional narration available',
              color: 'from-indigo-500 to-indigo-600',
              count: '25,000+'
            },
            {
              icon: FileText,
              title: 'Book Summaries',
              description: 'Key insights and takeaways',
              color: 'from-cyan-500 to-cyan-600',
              count: '30,000+'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group">
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600 mb-3">{feature.description}</p>
              <div className="text-2xl font-bold text-blue-600">{feature.count}</div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <p className="text-slate-600 text-lg">
              Showing <span className="font-bold text-blue-600">{filteredAndSortedBooks.length}</span> of <span className="font-bold">{books.length}</span> books
            </p>
            {searchQuery && (
              <p className="text-slate-600">
                Search results for: <span className="font-semibold text-blue-600">"{searchQuery}"</span>
              </p>
            )}
          </div>
        </div>

        {/* Books Grid/List */}
        {filteredAndSortedBooks.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-slate-400 mb-6">
              <Search className="h-24 w-24 mx-auto" />
            </div>
            <h3 className="text-3xl font-bold text-slate-600 mb-4">No books found</h3>
            <p className="text-slate-500 text-lg mb-8">Try adjusting your search criteria or browse our categories</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
            >
              Browse All Books
            </button>
          </div>
        ) : (
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredAndSortedBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onBookClick={onBookClick}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {filteredAndSortedBooks.length > 0 && (
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Load More Books
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCatalog;