import PromoCard from '../components/cards/promocard/promocard'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Promo Card Section */}
        <section className="mb-12">
          <PromoCard 
            title="Premium Car Rental"
            subtitle="Experience luxury and comfort with our premium fleet. Book now and get 20% off your first rental!"
            buttonText="Book Now"
            image="/next.svg" // Replace with your car image
          />
        </section>

        {/* Future sections will go here */}
        {/* You can add more promo cards, services, testimonials, etc. */}
      </div>
    </div>
  )
}
