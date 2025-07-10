import React, { useState } from 'react';
import { Book, CartItem } from './types';
import { books as initialBooks } from './data/mockData';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BookCatalog from './components/BookCatalog';
import BookDetail from './components/BookDetail';
import ShoppingCart from './components/ShoppingCart';
import AuthModal from './components/AuthModal';
import AdminDashboard from './components/AdminDashboard';

type ViewType = 'home' | 'catalog' | 'book-detail' | 'admin';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [searchQuery, setSearchQuery] = useState('');

  const featuredBooks = books.filter(book => book.featured);
  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleViewChange = (view: string) => {
    setCurrentView(view as ViewType);
    setSelectedBook(null);
  };

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setCurrentView('book-detail');
  };

  const handleAddToCart = (book: Book) => {
    if (!book.inStock) return;

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.book.id === book.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { book, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (bookId: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.book.id === bookId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (bookId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.book.id !== bookId));
  };

  const handleBackFromDetail = () => {
    setCurrentView('catalog');
    setSelectedBook(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView('catalog');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomePage
            featuredBooks={featuredBooks}
            onBookClick={handleBookClick}
            onAddToCart={handleAddToCart}
            onViewCatalog={() => setCurrentView('catalog')}
          />
        );
      case 'catalog':
        return (
          <BookCatalog
            books={books}
            onBookClick={handleBookClick}
            onAddToCart={handleAddToCart}
            searchQuery={searchQuery}
          />
        );
      case 'book-detail':
        return selectedBook ? (
          <BookDetail
            book={selectedBook}
            onBack={handleBackFromDetail}
            onAddToCart={handleAddToCart}
          />
        ) : null;
      case 'admin':
        return (
          <AdminDashboard
            books={books}
            onBookUpdate={setBooks}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        onAuthClick={() => setIsAuthModalOpen(true)}
        currentView={currentView}
        onViewChange={handleViewChange}
        onSearch={handleSearch}
      />
      
      {renderCurrentView()}
      
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}

export default App;