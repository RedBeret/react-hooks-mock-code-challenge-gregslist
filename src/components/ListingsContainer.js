import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import NewListingForm from "./NewListingForm"; 

function ListingsContainer({ searchTerm }) {
  const [listings, setListings] = useState([]);
  const [sortAlpha, setSortAlpha] = useState(false);

  useEffect(() => {
    fetchListings();
  }, [sortAlpha]);

  const fetchListings = () => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(data => {
        const sortedData = sortAlpha ? [...data].sort((a, b) => a.location.localeCompare(b.location)) : data;
        setListings(sortedData);
      });
  };

  const handleDelete = (id) => {
    setListings(listings.filter(listing => listing.id !== id));
  };

  const addNewListing = (newListing) => {
    setListings([...listings, newListing]);
  };

  const filteredListings = listings.filter(listing =>
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSort = () => setSortAlpha(!sortAlpha);

  return (
    <main>
      <button onClick={toggleSort}>Sort by Location</button>
      <NewListingForm onAddListing={addNewListing} />
      <ul className="cards">
        {filteredListings.map(listing => (
          <ListingCard key={listing.id} {...listing} onDelete={handleDelete} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
