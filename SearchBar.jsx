import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search by digits (e.g., 9999, 786, 12345)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-6 py-4 pr-12 rounded-full border-2 border-primary focus:border-accent focus:outline-none shadow-md text-lg"
      />
      <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 text-primary w-6 h-6" />
    </div>
  )
}

export default SearchBar
