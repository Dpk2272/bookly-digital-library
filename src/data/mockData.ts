import { Book, Review } from '../types';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviews: 2543,
    image: 'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fiction',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be different if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?',
    inStock: true,
    featured: true,
    summary: 'A philosophical novel about infinite possibilities and the choices that shape our lives, exploring themes of regret, hope, and the meaning of existence through a magical library between life and death.',
    pdfUrl: 'https://example.com/midnight-library.pdf',
    audioUrl: 'https://example.com/midnight-library-audio.mp3',
    downloadCount: 15420
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 22.95,
    rating: 4.9,
    reviews: 4521,
    image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Self-Help',
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones. Tiny changes, remarkable results. No matter your goals, Atomic Habits offers a proven framework for improving every day.',
    inStock: true,
    featured: true,
    summary: 'A comprehensive guide to building good habits and breaking bad ones through small, incremental changes that compound over time to create remarkable results.',
    pdfUrl: 'https://example.com/atomic-habits.pdf',
    audioUrl: 'https://example.com/atomic-habits-audio.mp3',
    downloadCount: 28750
  },
  {
    id: '3',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    price: 19.99,
    rating: 4.7,
    reviews: 3892,
    image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Romance',
    description: 'Reclusive Hollywood icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself.',
    inStock: true,
    featured: true,
    summary: 'A captivating story of love, ambition, and sacrifice as a reclusive Hollywood legend reveals her secrets to an unknown journalist.',
    pdfUrl: 'https://example.com/seven-husbands.pdf',
    audioUrl: 'https://example.com/seven-husbands-audio.mp3',
    downloadCount: 19340
  },
  {
    id: '4',
    title: 'Educated',
    author: 'Tara Westover',
    price: 26.50,
    originalPrice: 32.00,
    rating: 4.6,
    reviews: 2176,
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biography',
    description: 'A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University. An unforgettable memoir about a young woman who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
    inStock: true,
    summary: 'A powerful memoir about education, family, and the transformative power of learning, following a woman\'s journey from an isolated survivalist family to academic achievement.',
    pdfUrl: 'https://example.com/educated.pdf',
    audioUrl: 'https://example.com/educated-audio.mp3',
    downloadCount: 12680
  },
  {
    id: '5',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: 18.99,
    rating: 4.5,
    reviews: 1843,
    image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Thriller',
    description: 'A woman\'s act of violence against her husband and her refusal to speak about it begins to unravel secrets. The Silent Patient is a shocking psychological thriller of a woman\'s act of violence against her husband―and of the therapist obsessed with uncovering her motive.',
    inStock: false,
    summary: 'A gripping psychological thriller about a woman who refuses to speak after allegedly murdering her husband, and the therapist determined to understand why.',
    pdfUrl: 'https://example.com/silent-patient.pdf',
    audioUrl: 'https://example.com/silent-patient-audio.mp3',
    downloadCount: 8920
  },
  {
    id: '6',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    price: 23.95,
    rating: 4.4,
    reviews: 5632,
    image: 'https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fiction',
    description: 'For years, rumors of the "Marsh Girl" have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl.',
    inStock: true,
    summary: 'A coming-of-age mystery about a young woman living in isolation in the marshes of North Carolina, combining nature writing with a compelling murder mystery.',
    pdfUrl: 'https://example.com/crawdads-sing.pdf',
    audioUrl: 'https://example.com/crawdads-sing-audio.mp3',
    downloadCount: 22150
  },
  {
    id: '7',
    title: 'Think Again',
    author: 'Adam Grant',
    price: 25.99,
    rating: 4.6,
    reviews: 2891,
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Business',
    description: 'The Power of Knowing What You Don\'t Know - Intelligence is usually seen as the ability to think and learn, but in a rapidly changing world, there\'s another set of cognitive skills that might matter more: the ability to rethink and unlearn.',
    inStock: true,
    summary: 'A thought-provoking exploration of the importance of intellectual humility and the ability to change our minds in an ever-evolving world.',
    pdfUrl: 'https://example.com/think-again.pdf',
    audioUrl: 'https://example.com/think-again-audio.mp3',
    downloadCount: 16780
  },
  {
    id: '8',
    title: 'The Thursday Murder Club',
    author: 'Richard Osman',
    price: 21.50,
    rating: 4.3,
    reviews: 1567,
    image: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Mystery',
    description: 'In a peaceful retirement village, four unlikely friends meet weekly to investigate cold cases. But when a local developer is found dead with a mysterious photograph left next to the body, the Thursday Murder Club find themselves in the middle of their first live case.',
    inStock: true,
    summary: 'A charming mystery featuring four retirees who form an amateur detective club, combining humor with clever plotting in a cozy crime setting.',
    pdfUrl: 'https://example.com/thursday-murder-club.pdf',
    audioUrl: 'https://example.com/thursday-murder-club-audio.mp3',
    downloadCount: 9430
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    userId: '1',
    userName: 'Sarah M.',
    rating: 5,
    comment: 'Absolutely captivating! Couldn\'t put it down. The concept of the midnight library is both beautiful and thought-provoking.',
    date: '2025-01-15'
  },
  {
    id: '2',
    userId: '2',
    userName: 'Michael R.',
    rating: 4,
    comment: 'Great read, highly recommended for anyone interested in personal development. The practical advice is easy to implement.',
    date: '2025-01-12'
  },
  {
    id: '3',
    userId: '3',
    userName: 'Emma L.',
    rating: 5,
    comment: 'Life-changing book! The concepts are simple yet powerful. I\'ve already started implementing the strategies.',
    date: '2025-01-10'
  }
];

export const categories = [
  'All Categories',
  'Fiction',
  'Non-Fiction',
  'Self-Help',
  'Romance',
  'Thriller',
  'Mystery',
  'Biography',
  'Business',
  'Science',
  'History'
];