import React from 'react'
import { Link } from 'react-router-dom'
import { Package, Calendar } from 'lucide-react'
import { useApp } from '../context/AppContext'

const Orders = () => {
  const { orders, user } = useApp()

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'Confirmed':
        return 'bg-blue-100 text-blue-800'
      case 'Delivered':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <Package className="w-24 h-24 text-gray-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Please login to view your orders
          </h2>
          <Link
            to="/login"
            className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    )
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <Package className="w-24 h-24 text-gray-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            No orders yet
          </h2>
          <p className="text-gray-600 mb-8">
            Start shopping and your orders will appear here!
          </p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Browse Numbers
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Orders</h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-6">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <p className="text-sm text-gray-200">Order ID</p>
                    <p className="text-xl font-bold">#{order.id}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>{new Date(order.date).toLocaleDateString('en-IN')}</span>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Order Items</h3>
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-3">
                      <div>
                        <p className="font-semibold text-gray-800">{item.number}</p>
                        <p className="text-sm text-gray-600">{item.category}</p>
                      </div>
                      <p className="font-bold text-primary">₹{item.price.toLocaleString('en-IN')}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-primary">₹{order.total.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Orders
