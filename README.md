# Clone this project

# Install Dependencies
`npm install`

# Seed The Database
`npx ts-node seed.ts`

# Example Post Request

    curl -X POST \
    http://localhost:3000/plant \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Pothos",
        "family": "Araceae",
        "genus": "Epipremnum",
        "species": "Epipremnum aureum",
        "commonName": "Golden Pothos",
        "location": "Indoor, low light",
        "climate": "Tropical, subtropical",
        "soilType": "Well-draining, humus-rich soil",
        "waterRequirements": "Regular watering, once a week",
        "lightRequirements": "Indoor, low light",
        "propagationMethod": "Stem cuttings",
        "uses": "Ornamental",
        "description": "Pothos, also known as Golden Pothos, is a tropical plant known for its long, trailing vines and heart-shaped leaves. It is often grown as a houseplant due to its tolerance for low light conditions."
    }'