import React from 'react'
import { IoSearch, IoFilter, IoHeart, IoNotifications, IoSettings } from 'react-icons/io5'

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-blue-600">MORENT</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search something here"
              className="block w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button className="text-gray-400 hover:text-gray-600">
                <IoFilter className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {/* Filter Icon */}
          <button className="p-2 text-gray-600 hover:text-gray-800 rounded-lg hover:bg-gray-100">
            <IoFilter className="h-6 w-6" />
          </button>

          {/* Heart/Favorites Icon with notification dot */}
          <button className="relative p-2 text-gray-600 hover:text-gray-800 rounded-lg hover:bg-gray-100">
            <IoHeart className="h-6 w-6" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></div>
          </button>

          {/* Notification Bell Icon with notification dot */}
          <button className="relative p-2 text-gray-600 hover:text-gray-800 rounded-lg hover:bg-gray-100">
            <IoNotifications className="h-6 w-6" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></div>
          </button>

          {/* Settings Icon */}
          <button className="p-2 text-gray-600 hover:text-gray-800 rounded-lg hover:bg-gray-100">
            <IoSettings className="h-6 w-6" />
          </button>

          {/* User Avatar */}
          <button className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
              <img 
                className="h-10 w-10 rounded-full object-cover" 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Profile"
              />
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar