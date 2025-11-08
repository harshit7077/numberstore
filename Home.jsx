import React, { useState, useMemo } from 'react'
import { Sparkles, TrendingUp, Award } from 'lucide-react'
import NumberCard from '../components/NumberCard'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import { numbers, priceRanges } from '../data/numbers'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPriceRange, setSelectedPriceRange] = useState(0)

  // Filter numbers based on search and filters
  const filteredNumbers = useMemo(() => {
    return numbers.filter((number) => {
      // Search filter
      const matchesSearch = number.displayNumber.includes(searchTerm.replace(/\s/g, ''))
      
      // Category filter
      const matchesCategory = selectedCategory === 'All' || number.category === selectedCategory
      
      // Price range filter
      const priceRange = priceRanges[selectedPriceRange]
      const matchesPrice = number.price >= priceRange.min && number.price <= priceRange.max
      
      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [searchTerm, selectedCategory, selectedPriceRange])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-primary-dark to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Buy Premium  Numbers
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Buy your perfect data!
            </p>
          </div>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Selection</h3>
              <p className="text-gray-600">Curated collection of the best numbers</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing on all numbers</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Service</h3>
              <p className="text-gray-600">Secure and reliable transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <FilterBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
          />

          {/* Results Count */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Available Numbers
              <span className="text-primary ml-2">({filteredNumbers.length})</span>
            </h2>
          </div>

          {/* Numbers Grid */}
          {filteredNumbers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredNumbers.map((number) => (
                <NumberCard key={number.id} number={number} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No numbers found matching your criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                  setSelectedPriceRange(0)
                }}
                className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Promotional Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Special Offer!
          </h2>
          <p className="text-xl text-gray-800 mb-6">
            Get 10% off on your first purchase. Use code: FIRST10
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
