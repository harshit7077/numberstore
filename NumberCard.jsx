import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Eye, Star } from 'lucide-react'
import { useApp } from '../context/AppContext'

const NumberCard = ({ number }) => {
  const { addToCart } = useApp()

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Premium':
        return 'bg-blue-100 text-blue-800'
      case 'Fancy':
        return 'bg-purple-100 text-purple-800'
      case 'Lucky':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      {/* Card Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light p-4 text-white relative">
        <div className="flex justify-between items-start">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(number.category)}`}>
            {number.category}
          </span>
          {number.featured && (
            <Star className="w-5 h-5 text-accent fill-accent" />
          )}
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-bold tracking-wider">{number.number}</h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-3 h-12 line-clamp-2">
          {number.highlight}
        </p>
        
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-accent fill-accent" />
          ))}
          <span className="text-sm text-gray-600 ml-2">(5.0)</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-primary">
              ₹{number.price.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => addToCart(number)}
            className="flex-1 bg-gradient-to-r from-primary to-primary-dark text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
          <Link
            to={`/number/${number.id}`}
            className="bg-accent text-primary py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NumberCard
