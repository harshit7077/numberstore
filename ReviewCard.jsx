import React from 'react'
import { Star, ThumbsUp, CheckCircle } from 'lucide-react'

const ReviewCard = ({ review }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? 'text-accent fill-accent'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-bold text-gray-800">{review.userName}</h4>
            {review.verified && (
              <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                <CheckCircle className="w-3 h-3 text-green-600" />
                <span className="text-xs text-green-600 font-semibold">Verified Purchase</span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {renderStars(review.rating)}
            </div>
            <span className="text-sm text-gray-500">{formatDate(review.date)}</span>
          </div>
        </div>
      </div>

      {/* Comment */}
      <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>

      {/* Footer */}
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
          <ThumbsUp className="w-4 h-4" />
          <span>Helpful ({review.helpful})</span>
        </button>
      </div>
    </div>
  )
}

export default ReviewCard
