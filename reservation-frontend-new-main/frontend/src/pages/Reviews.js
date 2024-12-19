import React, { useEffect, useState } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error('Error fetching reviews:', err));
  }, []);

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold">Reviews</h1>
      <div className="flex flex-col space-y-4 mt-4">
        {reviews.map((review) => (
          <div key={review.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{review.userName}</h2>
            <p>Rating: {review.rating} / 5</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;