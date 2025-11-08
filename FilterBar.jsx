import React from 'react'
import { categories, priceRanges } from '../data/numbers'

const FilterBar = ({ selectedCategory, setSelectedCategory, selectedPriceRange, setSelectedPriceRange }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Price Range
          </label>
          <select
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          >
            {priceRanges.map((range, index) => (
              <option key={index} value={index}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
