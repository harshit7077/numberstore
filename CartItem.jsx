import React from 'react'
import { Trash2 } from 'lucide-react'
import { useApp } from '../context/AppContext'

const CartItem = ({ item }) => {
  const { removeFromCart } = useApp()

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between hover:shadow-lg transition-shadow">
      <div className="flex-1">
        <h3 className="text-lg font-bold text-primary">{item.number}</h3>
        <p className="text-sm text-gray-600">{item.category} Number</p>
        <p className="text-xs text-gray-500 mt-1">{item.highlight}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-primary">
          ₹{item.price.toLocaleString('en-IN')}
        </span>
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default CartItem
