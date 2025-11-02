import carsData from '../data/cars.json';
import servicesData from '../data/services.json';

// Export car-related data
export const { featuredCars, categories } = carsData;

// Export service-related data  
export const { services, locations } = servicesData;

// Utility functions
export const getCarById = (id) => {
  return featuredCars.find(car => car.id === id);
};

export const getCarsByCategory = (category) => {
  return featuredCars.filter(car => car.category === category);
};

export const getAvailableCars = () => {
  return featuredCars.filter(car => car.available);
};

export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};

// Sample data for testimonials (you can move this to a separate JSON file)
export const testimonials = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    comment: "Excellent service! The car was clean and the booking process was smooth.",
    location: "New York"
  },
  {
    id: 2, 
    name: "Sarah Johnson",
    rating: 4,
    comment: "Great experience overall. Will definitely use again for my next trip.",
    location: "Los Angeles"
  }
];