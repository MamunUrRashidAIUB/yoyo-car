// Example: Using the data in a component

import { featuredCars, services, getAvailableCars } from '../lib/data';

export default function ExampleComponent() {
  // Get all featured cars
  const cars = featuredCars;
  
  // Get only available cars
  const availableCars = getAvailableCars();
  
  // Get services
  const serviceList = services;

  return (
    <div>
      <h2>Featured Cars</h2>
      {cars.map(car => (
        <div key={car.id}>
          <h3>{car.name}</h3>
          <p>Price: ${car.price} {car.priceUnit}</p>
          <p>Rating: {car.rating}/5</p>
        </div>
      ))}
      
      <h2>Our Services</h2>
      {serviceList.map(service => (
        <div key={service.id}>
          <h3>{service.icon} {service.title}</h3>
          <p>{service.description}</p>
          <p>{service.price}</p>
        </div>
      ))}
    </div>
  );
}