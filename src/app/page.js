import PromoCard from '../components/cards/promocard/promocard'


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Promo Cards Section */}
        <section className="mb-12 space-y-8">
          <PromoCard 
            title="Premium Car Rental"
            subtitle="Experience luxury and comfort with our premium fleet. Book now and get 20% off your first rental!"
            buttonText="Book Now"
            image="/next.svg" // Replace with your car image
          />
          
          <PromoCard 
            title="24/7 Customer Support"
            subtitle="Need help? Our dedicated support team is available around the clock to assist you with any questions."
            buttonText="Contact Us"
            image="/globe.svg" // Replace with your support image
          />
        </section>

       

        {/* Future sections will go here */}
        {/* You can add more promo cards, services, testimonials, etc. */}
      </div>
    </div>
  )
}
