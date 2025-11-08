import React, { useState } from 'react'
import { Star, TrendingUp } from 'lucide-react'
import ReviewCard from './ReviewCard'
import { getReviewsForNumber, getAverageRating } from '../data/reviews'

const ReviewSection = ({ numberId }) => {
  const [reviews] = useState(getReviewsForNumber(numberId))
  const averageRating = getAverageRating(reviews)

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-6 h-6 ${
          index < Math.floor(rating)
            ? 'text-accent fill-accent'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  const getRatingDistribution = () => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    reviews.forEach(review => {
      distribution[review.rating]++
    })
    return distribution
  }

  const ratingDistribution = getRatingDistribution()

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Customer Reviews</h2>

        {/* Rating Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Overall Rating */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <span className="text-5xl font-bold text-primary">{averageRating}</span>
                <div>
                  <div className="flex space-x-1">
                    {renderStars(averageRating)}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Based on {reviews.length} reviews</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 bg-green-100 px-4 py-2 rounded-full inline-flex">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-green-600 font-semibold">Highly Rated</span>
              </div>
            </div>

            {/* Right: Rating Distribution */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = ratingDistribution[rating]
                const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0
                return (
                  <div key={rating} className="flex items-center space-x-3">
                    <span className="text-sm font-semibold text-gray-700 w-12">
                      {rating} <Star className="w-3 h-3 inline text-accent fill-accent" />
                    </span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-accent h-full rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">{count}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Write Review CTA */}
        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
