import React from 'react';
import { Book, TrendingUp, Users, Award, Download, Headphones, FileText, Star } from 'lucide-react';
import { Book as BookType } from '../types';
import BookCard from './BookCard';
import SpaceBookAnimation from './SpaceBookAnimation';

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
  const [showAnimation, setShowAnimation] = React.useState(true);

  if (showAnimation) {
    return (
      <SpaceBookAnimation 
        onAnimationComplete={() => setShowAnimation(false)}
        autoPlay={true}
      />
    );
  }

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
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        {/* Space Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Animated Stars */}
        {Array.from({ length: 30 }).map((_, i) => (
          <Star
            key={i}
            className="absolute text-white/20 animate-pulse"
            size={Math.random() * 4 + 2}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
            fill="currentColor"
          />
        ))}
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent animate-gradient">
                Cosmic Library
              </span>
              <span className="block text-4xl md:text-5xl mt-4 text-blue-200">
                Explore the Universe of Books
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Journey through our cosmic digital library with free PDF downloads, audiobooks, and detailed summaries. 
              Your interstellar adventure into knowledge awaits.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button 
              onClick={onViewCatalog}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cosmic-glow"
            >
              <span className="flex items-center justify-center space-x-2">
                <Book className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Launch Into Library</span>
              </span>
            </button>
            <button className="group border-2 border-purple-300 text-purple-100 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-purple-100 hover:text-purple-900 transition-all duration-300 cosmic-glow-purple">
              <span className="flex items-center justify-center space-x-2">
                <Download className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Free Cosmic Downloads</span>
              </span>
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover-lift cosmic-glow">
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
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Space Elements */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <Star
              key={i}
              className="absolute text-blue-600 animate-pulse"
              size={Math.random() * 6 + 2}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`
              }}
              fill="currentColor"
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
              Trusted Across the Galaxy
            </h2>
            <p className="text-xl text-slate-600">Join our growing cosmic community of knowledge seekers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover-lift">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg cosmic-glow`}>
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
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Cosmic Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/30 to-transparent rounded-full blur-3xl animate-nebula" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/30 to-transparent rounded-full blur-3xl animate-nebula" style={{ animationDelay: '6s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent mb-6 animate-gradient">
              Stellar Collection
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Handpicked cosmic selections from our galactic curators, featuring bestsellers, classics, 
              and hidden gems from across the universe with free downloads and audio versions.
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cosmic-glow"
            >
              Explore Full Cosmic Library
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full animate-particle opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
        
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4 text-glow">Join the Cosmic Network</h2>
            <p className="text-blue-100 text-lg">
              Receive transmissions about new cosmic releases, exclusive content, and stellar reading recommendations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your cosmic coordinates (email)"
              className="flex-1 px-6 py-4 rounded-xl border border-purple-300 bg-white/10 backdrop-blur-sm text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none cosmic-glow"
            />
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-lg cosmic-glow-purple">
              Launch Subscription
            </button>
          </div>
          
          <p className="text-blue-200 text-sm mt-4">
            Join 50,000+ cosmic explorers who trust us with their literary journey across the stars
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;