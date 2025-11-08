import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary-dark text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Phone className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold">Numbers Store</h3>
            </div>
            <p className="text-sm text-gray-300">
              Your trusted source for premium phone numbers. 
              Find number today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-accent transition-colors">
                  My Orders
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-accent transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-accent transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 9041614069</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>sushmitsingh7077@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Chandiagrh, India</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Premium Numbers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
