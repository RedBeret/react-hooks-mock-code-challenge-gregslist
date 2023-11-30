import React, { useState } from "react";

function ListingCard({ id, description, image, location, onDelete }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => setIsFavorited(!isFavorited);

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${id}`, { method: "DELETE" })
      .then(() => onDelete(id))
      .catch(error => console.error("Error deleting listing:", error));
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button className="emoji-button favorite" onClick={toggleFavorite}>
          {isFavorited ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
