import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/restaurants')
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error('Error fetching restaurants:', err));
  }, []);

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold">Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={`/restaurant/${restaurant.id}`}
            className="border p-4 rounded shadow hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold">{restaurant.name}</h2>
            <p>{restaurant.cuisine}</p>
            <p>{restaurant.priceRange}</p>
            <p>{restaurant.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;