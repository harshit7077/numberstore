import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, User, Menu, X, Phone, LogOut } from 'lucide-react'
import { useApp } from '../context/AppContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, cart, logout } = useApp()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-90">
            <Phone className="w-8 h-8 text-accent" />
            <span className="text-xl font-bold">Premium Numbers</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/orders" className="hover:text-accent transition-colors">
              Orders
            </Link>
            <Link to="/cart" className="relative hover:text-accent transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cart.length}
                </span>
              )}
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">Hi, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:text-accent transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 hover:text-accent transition-colors"
              >
                <User className="w-6 h-6" />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/orders"
              className="block hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Orders
            </Link>
            <Link
              to="/cart"
              className="block hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart {cart.length > 0 && `(${cart.length})`}
            </Link>
            {user ? (
              <>
                <div className="text-sm">Hi, {user.name}</div>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsMenuOpen(false)
                  }}
                  className="block hover:text-accent transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
