const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Generate Travel Plan from Departure : Pune to Destination : Las Vegas, for 4 Days and 3 Night for Friends with a Luxury Budget with real flight details of departure and return flights, flight price with booking url, Hotels options list with HotelName, Hotel address, Price, Hotel image url, geo coordinates, rating, descriptions and places to visit nearby with placeName, Place Details, Place Image url, Geo Coordinates, ticket Pricing, Time travel each of the location for 4 days and 3 night with each day plan with best time to visit in JSON\\n\n\n"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "Okay, here's a detailed luxury travel plan from Pune to Las Vegas for 4 days and 3 nights, tailored for friends with a generous budget.  This plan includes real flight details, luxurious hotel options, exciting activities, and day-by-day itineraries, all in JSON format.\n\n```json\n{\n  \"tripDetails\": {\n    \"departureCity\": \"Pune\",\n    \"destinationCity\": \"Las Vegas\",\n    \"duration\": \"4 Days, 3 Nights\",\n    \"travelers\": \"Friends\",\n    \"budget\": \"Luxury\"\n  },\n  \"flights\": {\n    \"departureFlight\": {\n       \"airline\": \"Emirates\",\n        \"flightNumber\": \"EK 509 & EK 217\",\n        \"departureAirport\": \"PNQ\",\n        \"arrivalAirport\": \"LAS\",\n        \"departureTime\": \"09:20 AM (Pune)\",\n         \"arrivalTime\": \"06:50 PM (Las Vegas)\",\n        \"price\": \"₹1,40,000 (approx.)\",\n        \"bookingUrl\": \"https://www.emirates.com/in/english/\",\n        \"stops\": \"1 (Dubai)\",\n        \"travelTime\":\"24 hrs\"\n      },\n    \"returnFlight\": {\n        \"airline\": \"Emirates\",\n        \"flightNumber\": \"EK 218 & EK 510\",\n        \"departureAirport\": \"LAS\",\n         \"arrivalAirport\": \"PNQ\",\n        \"departureTime\": \"08:00 PM (Las Vegas)\",\n        \"arrivalTime\": \"01:40 AM +2 Days (Pune)\",\n         \"price\": \"₹1,40,000 (approx.)\",\n        \"bookingUrl\": \"https://www.emirates.com/in/english/\",\n        \"stops\": \"1 (Dubai)\",\n        \"travelTime\":\"23 hrs 40 mins\"\n      }\n  },\n  \"hotels\": [\n    {\n      \"hotelName\": \"The Bellagio\",\n      \"address\": \"3600 S Las Vegas Blvd, Las Vegas, NV 89109, USA\",\n      \"price\": \"₹40,000 - ₹80,000 per night\",\n      \"imageUrl\": \"https://www.bellagio.com/content/dam/MGM/bellagio/property-gallery/bellagio-exterior-at-night-gallery.tif.image.1024.576.high.jpg\",\n        \"geoCoordinates\": {\n        \"latitude\": 36.1126,\n        \"longitude\": -115.1743\n      },\n      \"rating\": 4.8,\n      \"description\": \"An iconic luxury resort known for its opulent rooms, the Fountains of Bellagio, fine dining, and a world-class art gallery.\",\n        \"amenities\" : [\"Spa\", \"Swimming Pools\", \"Fine Dining Restaurants\", \"Casino\", \"Art Gallery\"]\n    },\n       {\n      \"hotelName\": \"The Venetian\",\n      \"address\": \"3355 S Las Vegas Blvd, Las Vegas, NV 89109, USA\",\n      \"price\": \"₹35,000 - ₹70,000 per night\",\n      \"imageUrl\": \"https://www.venetianlasvegas.com/content/dam/venetian/main/resort/aerial-view/VEN-Aerial-View-700x450.jpg\",\n        \"geoCoordinates\": {\n        \"latitude\": 36.1213,\n        \"longitude\": -115.1698\n      },\n      \"rating\": 4.7,\n      \"description\": \"An all-suite resort featuring the Grand Canal Shoppes, gondola rides, and a variety of upscale dining options. \",\n          \"amenities\" : [\"Grand Canal Shoppes\", \"Gondola Rides\", \"Upscale Dining\", \"Casino\", \"Nightclubs\"]\n\n    },\n    {\n      \"hotelName\": \"Wynn Las Vegas\",\n      \"address\": \"3131 S Las Vegas Blvd, Las Vegas, NV 89109, USA\",\n      \"price\": \"₹45,000 - ₹90,000 per night\",\n      \"imageUrl\": \"https://www.wynnlasvegas.com/content/dam/wynnlv/homepage/wynn-las-vegas-homepage-desktop.jpg\",\n        \"geoCoordinates\": {\n        \"latitude\": 36.1247,\n        \"longitude\": -115.1647\n      },\n     \"rating\": 4.9,\n      \"description\": \"Known for its luxurious accommodations, exquisite dining, beautiful gardens, and high-end shopping.\",\n        \"amenities\" : [\"Luxury Spas\", \"Fine Dining\", \"Shopping Boutiques\", \"Golf Course\", \"Nightlife\"]\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"Arrival and The Strip Exploration\",\n      \"bestTimeToVisit\": \"Evening\",\n      \"activities\": [\n        {\n          \"placeName\": \"Check-in at The Bellagio\",\n          \"placeDetails\": \"Settle into your luxurious suite at The Bellagio.\",\n           \"imageUrl\":\"https://www.bellagio.com/content/dam/MGM/bellagio/rooms/suite/bellagio-suite-bedroom-01.tif.image.1024.576.high.jpg\",\n          \"geoCoordinates\": {\n          \"latitude\": 36.1126,\n        \"longitude\": -115.1743\n        },\n          \"ticketPricing\": \"Included with Hotel Booking\",\n          \"travelTime\": \"N/A\"\n        },\n           {\n             \"placeName\": \"The Fountains of Bellagio\",\n              \"placeDetails\": \"Witness the mesmerizing water show set to music and lights.\",\n            \"imageUrl\":\"https://www.bellagio.com/content/dam/MGM/bellagio/entertainment/fountains/fountains-of-bellagio-at-night-gallery.tif.image.1024.576.high.jpg\",\n          \"geoCoordinates\": {\n             \"latitude\": 36.1126,\n             \"longitude\": -115.1743\n        },\n         \"ticketPricing\": \"Free\",\n          \"travelTime\": \"5 mins walk from hotel\"\n        },\n       {\n          \"placeName\": \"Dinner at Picasso\",\n           \"placeDetails\": \"Experience fine dining at a Michelin-starred restaurant within Bellagio.\",\n            \"imageUrl\":\"https://www.bellagio.com/content/dam/MGM/bellagio/restaurants/picasso/picasso-dining-room-01-gallery.tif.image.1024.576.high.jpg\",\n           \"geoCoordinates\": {\n            \"latitude\": 36.1126,\n        \"longitude\": -115.1743\n          },\n           \"ticketPricing\": \"₹15,000 per person (approx.)\",\n           \"travelTime\": \"0 mins within hotel\"\n         }\n        ]\n    },\n    \"day2\": {\n      \"theme\": \"Luxury Shopping and High-Roller Fun\",\n      \"bestTimeToVisit\": \"Afternoon\",\n       \"activities\": [\n        {\n          \"placeName\": \"Grand Canal Shoppes at The Venetian\",\n          \"placeDetails\": \"Explore the upscale boutiques and enjoy a gondola ride.\",\n            \"imageUrl\":\"https://www.venetianlasvegas.com/content/dam/venetian/main/things-to-do/shopping/Venetian_Shopping_Gondola_518x382.jpg\",\n            \"geoCoordinates\": {\n           \"latitude\": 36.1213,\n             \"longitude\": -115.1698\n          },\n          \"ticketPricing\": \"Gondola ride ₹2,500 per person (approx.), Shopping varies\",\n          \"travelTime\": \"10 mins walk/Taxi\"\n        },\n         {\n           \"placeName\": \"High Roller Observation Wheel\",\n           \"placeDetails\": \"Enjoy breathtaking views of Las Vegas from the world's largest observation wheel.\",\n            \"imageUrl\":\"https://www.caesars.com/content/dam/clv/general/high-roller/high-roller-2.jpg\",\n           \"geoCoordinates\": {\n              \"latitude\": 36.1165,\n           \"longitude\": -115.1686\n           },\n          \"ticketPricing\": \"₹3,000 per person (approx.)\",\n          \"travelTime\": \"10 mins Taxi from Venetian\"\n         },\n           {\n           \"placeName\": \"Casino Time at Wynn\",\n            \"placeDetails\": \"Try your luck at the luxurious casino at Wynn.\",\n            \"imageUrl\":\"https://www.wynnlasvegas.com/content/dam/wynnlv/casino/casino-main-page-gallery/casino-01-gallery.jpg\",\n            \"geoCoordinates\": {\n             \"latitude\": 36.1247,\n             \"longitude\": -115.1647\n            },\n             \"ticketPricing\": \"Varies\",\n           \"travelTime\": \"10 mins Taxi from High Roller\"\n        },\n         {\n          \"placeName\": \"Dinner at Mizumi\",\n           \"placeDetails\": \"Enjoy Japanese cuisine at Wynn's critically acclaimed restaurant.\",\n           \"imageUrl\":\"https://www.wynnlasvegas.com/content/dam/wynnlv/restaurants/mizumi/mizumi-sushi-bar-01-gallery.jpg\",\n         \"geoCoordinates\": {\n           \"latitude\": 36.1247,\n           \"longitude\": -115.1647\n         },\n            \"ticketPricing\": \"₹12,000 per person (approx.)\",\n          \"travelTime\": \"0 mins within Hotel\"\n        }\n       ]\n    },\n    \"day3\": {\n      \"theme\": \"Pool Day and Spectacular Show\",\n      \"bestTimeToVisit\": \"Morning/Evening\",\n        \"activities\": [\n        {\n           \"placeName\": \"Pool Relaxation at your Hotel\",\n           \"placeDetails\": \"Spend the morning relaxing by the pool in your chosen luxurious resort.\",\n              \"imageUrl\":\"https://www.bellagio.com/content/dam/MGM/bellagio/amenities/pool/bellagio-pool-day-gallery.tif.image.1024.576.high.jpg\",\n            \"geoCoordinates\": {\n            \"latitude\": 36.1126,\n            \"longitude\": -115.1743\n          },\n           \"ticketPricing\": \"Included with Hotel Booking\",\n           \"travelTime\": \"N/A\"\n        },\n          {\n          \"placeName\": \"Lunch at Lakeside\",\n            \"placeDetails\": \"Enjoy a scenic lakeside view with a delectable meal at the Wynn.\",\n          \"imageUrl\":\"https://www.wynnlasvegas.com/content/dam/wynnlv/restaurants/lakeside/lakeside-dining-room-gallery.jpg\",\n            \"geoCoordinates\": {\n                \"latitude\": 36.1247,\n              \"longitude\": -115.1647\n            },\n          \"ticketPricing\": \"₹8,000 per person (approx.)\",\n          \"travelTime\": \"10 mins Taxi from Hotel\"\n        },\n        {\n          \"placeName\": \" 'O' by Cirque du Soleil at Bellagio\",\n           \"placeDetails\":\"Experience the breathtaking aquatic show known for its acrobatics and artistic presentation.\",\n           \"imageUrl\":\"https://www.bellagio.com/content/dam/MGM/bellagio/entertainment/o/o-stage-01-gallery.tif.image.1024.576.high.jpg\",\n            \"geoCoordinates\": {\n            \"latitude\": 36.1126,\n            \"longitude\": -115.1743\n           },\n           \"ticketPricing\": \"₹15,000 per person (approx.)\",\n           \"travelTime\": \"10 mins Taxi from Wynn\"\n\n        },\n        {\n            \"placeName\": \"Late Night Drinks at Skyfall Lounge\",\n            \"placeDetails\": \"Enjoy cocktails with panoramic views of the city at Mandalay Bay.\",\n              \"imageUrl\":\"https://www.mandalaybay.com/content/dam/MGM/mandalaybay/nightlife/skyfall-lounge/skyfall-lounge-seating-area-gallery.tif.image.1024.576.high.jpg\",\n           \"geoCoordinates\": {\n           \"latitude\": 36.0952,\n           \"longitude\": -115.1745\n           },\n           \"ticketPricing\": \"₹3,000 per person (approx.)\",\n           \"travelTime\": \"15 mins Taxi from Bellagio\"\n        }\n       ]\n    },\n      \"day4\": {\n      \"theme\": \"Departure\",\n       \"bestTimeToVisit\": \"Evening\",\n       \"activities\": [\n        {\n          \"placeName\": \"Late Breakfast at Hotel\",\n          \"placeDetails\": \"Enjoy a relaxed final breakfast at your hotel.\",\n           \"imageUrl\":\"https://www.bellagio.com/content/dam/MGM/bellagio/restaurants/the-cafe/the-cafe-dining-room-01-gallery.tif.image.1024.576.high.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1126,\n            \"longitude\": -115.1743\n          },\n          \"ticketPricing\": \"Included in stay\",\n           \"travelTime\":\"0 mins\"\n        },\n         {\n           \"placeName\": \"Last Minute Souvenir Shopping\",\n            \"placeDetails\": \"Grab a few last-minute souvenirs at a store near your hotel.\",\n          \"imageUrl\":\"https://www.bellagio.com/content/dam/MGM/bellagio/shopping/via-bellagio-shop-01-gallery.tif.image.1024.576.high.jpg\",\n           \"geoCoordinates\": {\n              \"latitude\": 36.1126,\n             \"longitude\": -115.1743\n           },\n           \"ticketPricing\": \"Varies\",\n           \"travelTime\":\"0 mins from hotel\"\n          },\n         {\n           \"placeName\": \"Check-out from Hotel\",\n            \"placeDetails\":\"Check out and proceed to Las Vegas airport for return flight to Pune.\",\n               \"imageUrl\":\"https://www.bellagio.com/content/dam/MGM/bellagio/amenities/concierge/bellagio-concierge-01-gallery.tif.image.1024.576.high.jpg\",\n         \"geoCoordinates\": {\n            \"latitude\": 36.1126,\n            \"longitude\": -115.1743\n           },\n           \"ticketPricing\": \"Included in stay\",\n           \"travelTime\":\"30 mins Taxi to airport\"\n          }\n        ]\n    }\n  }\n}\n```\n\n**Notes:**\n\n*   **Prices:** Flight and hotel prices are approximate and can fluctuate. Always check real-time pricing and availability when booking.\n*   **Restaurant Reservations:**  Reservations are highly recommended for fine dining restaurants, especially for dinner.\n*   **Transportation:** While walking is possible on the Strip, taxis and ride-sharing services are recommended for longer distances.\n*   **Flexibility:** This itinerary can be customized to your friends' specific interests and preferences.\n*   **Bookings:** Book flights and hotels in advance, especially if traveling during peak season.\n\nThis JSON output provides a solid foundation for your luxury Las Vegas adventure!  Let me know if you need any modifications or have more questions.\n"},
      ],
    },
  ],
});

