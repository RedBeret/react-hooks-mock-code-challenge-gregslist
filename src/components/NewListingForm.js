import React, { useState } from "react";

function NewListingForm({ onAddListing }) {
    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(newListing => {
            onAddListing(newListing);
            setFormData({ description: "", image: "", location: "" }); 
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
            />
            <input
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
            />
            <input
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
            />
            <button type="submit">Add Listing</button>
        </form>
    );
}

export default NewListingForm;
