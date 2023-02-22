import React, { useState, useEffect } from "react";

function Plant({ plant }) {
  return (
    <div>
      <h2>{plant.id}</h2>
      <p>{plant.name}</p>
      <p>{plant.family}</p>
      <p>{plant.genus}</p>
      <p>{plant.species}</p>
      <p>{plant.commonName}</p>
      <p>{plant.location}</p>
      <p>{plant.climate}</p>
      <p>{plant.soilType}</p>
      <p>{plant.waterRequirements}</p>
      <p>{plant.lightRequirements}</p>
      <p>{plant.propagationMethod}</p>
      <p>{plant.uses}</p>
      <p>{plant.description}</p>
      <p>http://localhost:3000/{plant.imagePath}</p>
    </div>
  );
}

function Demo() {

  const [image, setImage] = useState(null);
  const [plants, setPlants] = useState([{}]);

  useEffect(() => {
    async function fetchPlants() {
      const response = await fetch('http://localhost:3000/plants');
      const data = await response.json();
      setPlants(data);
    }
    fetchPlants();
  }, []);

  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log(event.target.elements);
    formData.append("image", image);
    formData.append("name", event.target.elements.name.value);
    formData.append("family", event.target.elements.family.value);
    formData.append("genus", event.target.elements.genus.value);
    formData.append("species", event.target.elements.species.value);
    formData.append("commonName", event.target.elements.commonName.value);
    formData.append("location", event.target.elements.location.value);
    formData.append("climate", event.target.elements.climate.value);
    formData.append("soilType", event.target.elements.soilType.value);
    formData.append("waterRequirements", event.target.elements.waterRequirements.value);
    formData.append("lightRequirements", event.target.elements.lightRequirements.value);
    formData.append("propagationMethod", event.target.elements.propagationMethod.value);
    formData.append("uses", event.target.elements.uses.value);
    formData.append("description", event.target.elements.description.value);

    fetch("http://localhost:3000/plant", {
      method: "POST",
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <input type="text" id="name" value="Haworthiopsis fasciata" />
        <input type="text" id="family" value="Asphodelaceae" />
        <input type="text" id="genus" value="Haworthiopsis" />
        <input type="text" id="species" value="Haworthia fasciata" />
        <input type="text" id="commonName" value="Fasciated Haworthia" />
        <input type="text" id="location" value="Indoor, outdoor (in mild climates" />
        <input type="text" id="climate" value="Desert" />
        <input type="text" id="soilType" value="Well-draining"/>
        <input type="text" id="waterRequirements" value="Infrequent watering, every 2-3 weeks"/>
        <input type="text" id="lightRequirements" value="Bright to direct"/>
        <input type="text" id="propagationMethod" value="Offsets and rhizomes"/>
        <input type="text" id="uses" value="Ornamental"/>
        <input type="text" id="description" value="Haworthia fasciata, also known as the Fasciated Haworthia, is a small succulent plant known for its unique, banded leaves and rosette shape. It is native to the desert regions of South Africa and is well-suited for growing as a houseplant due to its low water and low maintenance"/>
        <button type="submit">Submit</button>
      </form>
      <div>
        {plants.map(item => (
          <Plant key={item.id} plant={item} />
        ))}
      </div>
    </>
  );
}

export default Demo;

