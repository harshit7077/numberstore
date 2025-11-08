import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ShoppingCart, ArrowLeft, Star, Check } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { numbers } from '../data/numbers'
import NumberCard from '../components/NumberCard'
import ReviewSection from '../components/ReviewSection'

const NumberDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useApp()
  
  const number = numbers.find((n) => n.id === parseInt(id))
  
  if (!number) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Number not found</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          Back to Home
        </button>
      </div>
    )
  }

  // Get related numbers (same category, excluding current)
  const relatedNumbers = numbers
    .filter((n) => n.category === number.category && n.id !== number.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    addToCart(number)
  }

  const handleBuyNow = () => {
    addToCart(number)
    navigate('/checkout')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-primary hover:text-primary-dark mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Numbers</span>
        </button>

        {/* Number Details Card */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Number Display */}
            <div className="bg-gradient-to-br from-primary to-primary-light text-white p-12 flex flex-col justify-center items-center">
              <div className="text-center">
                {number.featured && (
                  <div className="flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-accent fill-accent mr-2" />
                    <span className="text-accent font-semibold">Featured Number</span>
                  </div>
                )}
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                  {number.category} Number
                </span>
                <h1 className="text-5xl font-bold mb-4 tracking-wider">
                  {number.number}
                </h1>
                <p className="text-xl text-gray-200">{number.highlight}</p>
              </div>
            </div>

            {/* Right Side - Details & Actions */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-primary">
                    ₹{number.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Number Details
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  {number.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Instant activation available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Verified and authentic</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Secure transaction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">24/7 customer support</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300"
                >
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-accent text-primary py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Numbers */}
        {relatedNumbers.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Related Numbers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedNumbers.map((relatedNumber) => (
                <NumberCard key={relatedNumber.id} number={relatedNumber} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Review Section */}
      <ReviewSection numberId={number.id} />
    </div>
  )
}

export default NumberDetails
