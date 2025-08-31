import React from 'react'

const PromoCard = ({title, subtitle, buttonText, image}) => {
  return (
   <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-lg text-white">
      {/* Text Content */}
      <div className="max-w-md space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-sm md:text-base opacity-90">{subtitle}</p>
        <button className="bg-white text-blue-600 px-5 py-2 rounded-xl font-semibold hover:bg-gray-100 transition">
          {buttonText}
        </button>
      </div>

      {/* Image */}
      <div className="mt-6 md:mt-0 md:ml-8">
        <img
          src={image}
          alt="Car"
          className="w-64 md:w-80 drop-shadow-lg"
        />
      </div>
    </div>
  )
}

export default PromoCard