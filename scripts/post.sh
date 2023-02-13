#!/bin/bash
curl -X POST \
http://localhost:3000/plant \
-H 'Content-Type: application/json' \
-d '{
    "name": "Monstera deliciosa",
    "family": "Araceae",
    "genus": "Monstera",
    "species": "Monstera deliciosa",
    "commonName": "Swiss Cheese Plant",
    "location": "Indoor, outdoor",
    "climate": "Tropical, subtropical",
    "soilType": "Well-draining, humus-rich soil",
    "waterRequirements": "Regular watering, once a week",
    "lightRequirements": "Bright, indirect light",
    "propagationMethod": "Stem cuttings",
    "uses": "Ornamental, air purification",
    "description": "Monstera deliciosa, also known as the Swiss Cheese Plant, is a tropical plant known for its large, perforated leaves and distinctive split leaves. It is often grown as a houseplant due to its tolerance for low light conditions and ability to purify the air. It is also a fast grower, making it an excellent choice for those who like to see quick results."
}'


