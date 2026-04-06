import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fallbackImage from "../assets/img/rigo-baby.jpg";

export const Single = () => {
  const { type, uid } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
        const data = await response.json();
        setDetails(data.result.properties);
      } catch (error) {
        console.log(error);
      }
    };

    getDetails();
  }, [type, uid]);

  if (!details) {
    return <div className="container mt-5 text-white">Loading...</div>;
  }

  let imageType = type;
  if (type === "people") imageType = "characters";

  return (
    <div className="container mt-5 text-white">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://starwars-visualguide.com/assets/img/${imageType}/${uid}.jpg`}
            alt={details.name}
            className="img-fluid rounded"
            style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
            onError={(e) => {
              e.target.src = fallbackImage;
            }}
          />
        </div>

        <div className="col-md-6">
          <h1>{details.name}</h1>
          <p>Información detallada del personaje, planeta o vehículo.</p>
        </div>
      </div>

      <hr className="border-danger" />

      <div className="row text-danger">
        {Object.entries(details).map(([key, value]) => (
          <div className="col-md-4 mb-3" key={key}>
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
    </div>
  );
};