import React from 'react';
import { Star, ShoppingCart, Heart, Download, Headphones, FileText } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onBookClick: (book: Book) => void;
  onAddToCart: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onBookClick, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group border border-blue-100">
      <div className="relative overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
          onClick={() => onBookClick(book)}
        />
        
        {/* Overlay with download options */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="flex space-x-2">
              <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                <Download className="h-4 w-4" />
              </button>
              <button className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg">
                <Headphones className="h-4 w-4" />
              </button>
              <button className="bg-cyan-600 text-white p-2 rounded-lg hover:bg-cyan-700 transition-colors shadow-lg">
                <FileText className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {book.originalPrice && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            SALE
          </div>
        )}
        
        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-50 hover:scale-110">
          <Heart className="h-4 w-4 text-slate-600 hover:text-red-500" />
        </button>
        
        {!book.inStock && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-white font-bold bg-red-600 px-4 py-2 rounded-xl shadow-lg">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            {book.category}
          </span>
        </div>
        
        <h3 
          className="font-bold text-slate-800 mb-2 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors text-lg leading-tight"
          onClick={() => onBookClick(book)}
        >
          {book.title}
        </h3>
        
        <p className="text-slate-600 mb-3 font-medium">by {book.author}</p>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(book.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-slate-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-slate-600 ml-2 font-medium">
            {book.rating} ({book.reviews} reviews)
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-slate-800">
              ${book.price}
            </span>
            {book.originalPrice && (
              <span className="text-sm text-slate-500 line-through">
                ${book.originalPrice}
              </span>
            )}
          </div>
          
          {book.originalPrice && (
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-xs font-bold">
              Save ${(book.originalPrice - book.price).toFixed(2)}
            </span>
          )}
        </div>

        {/* Download Options */}
        <div className="flex items-center justify-between mb-4 p-3 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex space-x-3">
            <div className="flex items-center space-x-1 text-xs text-blue-600">
              <Download className="h-3 w-3" />
              <span>PDF</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-indigo-600">
              <Headphones className="h-3 w-3" />
              <span>Audio</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-cyan-600">
              <FileText className="h-3 w-3" />
              <span>Summary</span>
            </div>
          </div>
          <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
            FREE
          </span>
        </div>
        
        <button
          onClick={() => onAddToCart(book)}
          disabled={!book.inStock}
          className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
            book.inStock
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              : 'bg-slate-300 text-slate-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="h-4 w-4" />
          <span>{book.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;