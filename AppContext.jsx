import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const AppContext = createContext()

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])

  // Load data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    const savedCart = localStorage.getItem('cart')
    const savedOrders = localStorage.getItem('orders')

    if (savedUser) setUser(JSON.parse(savedUser))
    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedOrders) setOrders(JSON.parse(savedOrders))
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders))
  }, [orders])

  // Add to cart
  const addToCart = (number) => {
    const exists = cart.find(item => item.id === number.id)
    if (exists) {
      toast.warning('This number is already in your cart!')
      return
    }
    setCart([...cart, number])
    toast.success('Number added to cart!')
  }

  // Remove from cart
  const removeFromCart = (numberId) => {
    setCart(cart.filter(item => item.id !== numberId))
    toast.info('Number removed from cart')
  }

  // Clear cart
  const clearCart = () => {
    setCart([])
  }

  // Get cart total
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0)
  }

  // Place order
  const placeOrder = (orderDetails) => {
    const newOrder = {
      id: Date.now(),
      date: new Date().toISOString(),
      items: [...cart],
      total: getCartTotal(),
      status: 'Pending',
      ...orderDetails
    }
    setOrders([newOrder, ...orders])
    clearCart()
    toast.success('Order placed successfully!')
    return newOrder
  }

  // Login
  const login = (email, password) => {
    // Mock login - in real app, this would call an API
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: email
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    toast.success('Login successful!')
    return mockUser
  }

  // Signup
  const signup = (userData) => {
    // Mock signup - in real app, this would call an API
    const newUser = {
      id: Date.now(),
      ...userData
    }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
    toast.success('Account created successfully!')
    return newUser
  }

  // Logout
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    toast.info('Logged out successfully')
  }

  const value = {
    user,
    cart,
    orders,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    placeOrder,
    login,
    signup,
    logout
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
