import React from 'react';
import { Book, TrendingUp, Users, Award, Download, Headphones, FileText, Star } from 'lucide-react';
import { Book as BookType } from '../types';
import BookCard from './BookCard';

interface HomePageProps {
  featuredBooks: BookType[];
  onBookClick: (book: BookType) => void;
  onAddToCart: (book: BookType) => void;
  onViewCatalog: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
  featuredBooks,
  onBookClick,
  onAddToCart,
  onViewCatalog
}) => {
  const stats = [
    { icon: Book, label: 'Books Available', value: '50,000+', color: 'from-blue-500 to-blue-600' },
    { icon: Users, label: 'Active Readers', value: '100,000+', color: 'from-indigo-500 to-indigo-600' },
    { icon: Download, label: 'Downloads', value: '500,000+', color: 'from-cyan-500 to-cyan-600' },
    { icon: Award, label: 'Premium Content', value: '10,000+', color: 'from-blue-600 to-blue-700' }
  ];

  const features = [
    {
      icon: Download,
      title: 'Free PDF Downloads',
      description: 'Access thousands of books in PDF format completely free',
      color: 'bg-blue-500'
    },
    {
      icon: Headphones,
      title: 'Audio Books',
      description: 'Listen to your favorite books with high-quality audio',
      color: 'bg-indigo-500'
    },
    {
      icon: FileText,
      title: 'Detailed Summaries',
      description: 'Get comprehensive summaries and key insights',
      color: 'bg-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Your Next
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Literary Adventure
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Explore our vast digital library with free PDF downloads, audiobooks, and detailed summaries. 
              Your journey into knowledge starts here.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button 
              onClick={onViewCatalog}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center space-x-2">
                <Book className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Explore Library</span>
              </span>
            </button>
            <button className="group border-2 border-blue-300 text-blue-100 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-100 hover:text-blue-900 transition-all duration-300">
              <span className="flex items-center justify-center space-x-2">
                <Download className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Free Downloads</span>
              </span>
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.color} rounded-xl mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Trusted by Millions</h2>
            <p className="text-xl text-slate-600">Join our growing community of book lovers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Featured Collection</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Handpicked selections from our curators, featuring bestsellers, classics, 
              and hidden gems with free downloads and audio versions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onBookClick={onBookClick}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={onViewCatalog}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Explore Full Library
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-blue-100 text-lg">
              Get notified about new releases, exclusive content, and reading recommendations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl border border-blue-300 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
            />
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg">
              Subscribe
            </button>
          </div>
          
          <p className="text-blue-200 text-sm mt-4">
            Join 50,000+ readers who trust us with their literary journey
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;