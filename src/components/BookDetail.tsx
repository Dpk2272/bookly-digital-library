import React, { useState } from 'react';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Truck, Download, Headphones, FileText, Play, Pause, Volume2 } from 'lucide-react';
import { Book, Review } from '../types';
import { reviews } from '../data/mockData';

interface BookDetailProps {
  book: Book;
  onBack: () => void;
  onAddToCart: (book: Book) => void;
}

const BookDetail: React.FC<BookDetailProps> = ({ book, onBack, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'downloads'>('description');
  const [isPlaying, setIsPlaying] = useState(false);

  const bookReviews = reviews.filter(review => review.id === book.id).slice(0, 3);

  const downloadOptions = [
    {
      type: 'PDF',
      icon: Download,
      size: '2.4 MB',
      quality: 'High Quality',
      color: 'from-blue-500 to-blue-600',
      description: 'Complete book in PDF format with original formatting'
    },
    {
      type: 'Audio',
      icon: Headphones,
      size: '45.2 MB',
      quality: 'Premium Audio',
      color: 'from-indigo-500 to-indigo-600',
      description: 'Professional narration with clear audio quality'
    },
    {
      type: 'Summary',
      icon: FileText,
      size: '156 KB',
      quality: 'Key Insights',
      color: 'from-cyan-500 to-cyan-600',
      description: 'Comprehensive summary with main points and takeaways'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Library</span>
        </button>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative group">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full max-w-md h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Book Info */}
            <div className="space-y-8">
              <div>
                <span className="inline-block text-sm text-blue-600 font-bold bg-blue-50 px-4 py-2 rounded-full mb-4 border border-blue-200">
                  {book.category}
                </span>
                <h1 className="text-4xl font-bold text-slate-800 mb-3 leading-tight">{book.title}</h1>
                <p className="text-2xl text-blue-600 font-semibold">by {book.author}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < Math.floor(book.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-slate-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-600 font-medium text-lg">
                  {book.rating} ({book.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-slate-800">${book.price}</span>
                {book.originalPrice && (
                  <>
                    <span className="text-2xl text-slate-500 line-through">
                      ${book.originalPrice}
                    </span>
                    <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                      Save ${(book.originalPrice - book.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-3">
                {book.inStock ? (
                  <>
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 font-semibold text-lg">In Stock - Ready to Ship</span>
                  </>
                ) : (
                  <>
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span className="text-red-700 font-semibold text-lg">Currently Out of Stock</span>
                  </>
                )}
              </div>

              {/* Download Options Preview */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Available Formats</h3>
                <div className="grid grid-cols-3 gap-3">
                  {downloadOptions.map((option, index) => (
                    <div key={index} className="text-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${option.color} rounded-xl mb-2`}>
                        <option.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-slate-700">{option.type}</div>
                      <div className="text-xs text-slate-500">{option.size}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    All formats FREE
                  </span>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <label className="text-lg font-semibold text-slate-700">Quantity:</label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border-2 border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-blue-50"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => onAddToCart(book)}
                    disabled={!book.inStock}
                    className={`flex-1 flex items-center justify-center space-x-3 py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      book.inStock
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transform hover:-translate-y-1'
                        : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="h-6 w-6" />
                    <span>Add to Cart</span>
                  </button>
                  
                  <button className="p-4 border-2 border-blue-200 rounded-2xl hover:bg-blue-50 transition-colors group">
                    <Heart className="h-6 w-6 text-blue-600 group-hover:text-red-500 group-hover:scale-110 transition-all" />
                  </button>
                  
                  <button className="p-4 border-2 border-blue-200 rounded-2xl hover:bg-blue-50 transition-colors group">
                    <Share2 className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="flex items-center space-x-3 text-blue-700 bg-blue-50 p-4 rounded-2xl border border-blue-200">
                <Truck className="h-5 w-5" />
                <span className="font-medium">Free shipping on orders over $25 • Fast delivery worldwide</span>
              </div>
            </div>
          </div>

          {/* Enhanced Tabs */}
          <div className="border-t border-blue-100">
            <div className="flex space-x-12 px-8 lg:px-12">
              {[
                { id: 'description', label: 'Description', icon: FileText },
                { id: 'reviews', label: `Reviews (${book.reviews})`, icon: Star },
                { id: 'downloads', label: 'Downloads', icon: Download }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 py-6 font-semibold border-b-3 transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-slate-600 hover:text-blue-600'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="p-8 lg:p-12">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p className="text-slate-700 leading-relaxed text-lg">{book.description}</p>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                      <h4 className="font-bold text-slate-800 mb-3">Book Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Category:</span>
                          <span className="font-medium">{book.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Rating:</span>
                          <span className="font-medium">{book.rating}/5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Reviews:</span>
                          <span className="font-medium">{book.reviews}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-200">
                      <h4 className="font-bold text-slate-800 mb-3">Available Formats</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">PDF Download:</span>
                          <span className="font-medium text-green-600">Free</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Audio Book:</span>
                          <span className="font-medium text-green-600">Free</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Summary:</span>
                          <span className="font-medium text-green-600">Free</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-8">
                  {bookReviews.map((review) => (
                    <div key={review.id} className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {review.userName.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-800">{review.userName}</div>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-slate-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-slate-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-700 leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'downloads' && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Free Download Options</h3>
                    <p className="text-slate-600">Choose your preferred format and start reading immediately</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {downloadOptions.map((option, index) => (
                      <div key={index} className="bg-white border-2 border-blue-100 rounded-2xl p-6 hover:border-blue-300 transition-colors group">
                        <div className="text-center mb-4">
                          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                            <option.icon className="h-8 w-8 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-slate-800 mb-1">{option.type}</h4>
                          <p className="text-blue-600 font-semibold">{option.quality}</p>
                          <p className="text-slate-500 text-sm">{option.size}</p>
                        </div>
                        
                        <p className="text-slate-600 text-sm mb-6 text-center">{option.description}</p>
                        
                        <button className={`w-full bg-gradient-to-r ${option.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                          Download {option.type}
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 text-center">
                    <h4 className="text-lg font-bold text-green-800 mb-2">100% Free Downloads</h4>
                    <p className="text-green-700">No registration required • Instant access • High quality formats</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;