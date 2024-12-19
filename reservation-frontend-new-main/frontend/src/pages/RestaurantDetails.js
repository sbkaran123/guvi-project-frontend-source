import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/restaurants/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
      .catch((err) => console.error('Error fetching restaurant details:', err));
  }, [id]);

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold">{restaurant.name}</h1>
      <p>{restaurant.cuisine}</p>
      <p>{restaurant.priceRange}</p>
      <p>{restaurant.location}</p>
      <p>{restaurant.hours}</p>
      <h2 className="text-xl font-semibold mt-4">Menu</h2>
      <ul>
        {restaurant.menu.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantDetails;
