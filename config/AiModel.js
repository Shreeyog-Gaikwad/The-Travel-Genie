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
            {text: "Generate Travel Plan for Location: Pune, Maharashtra, India, for 3 Days and 2 Night for Friends with a Luxury Budget with real flight details, flight price with booking url, Hotels options list with HotelName, Hotel address, Price, Hotel image url, geo coordinates, rating, descriptions and places to visit nearby with placeName, Place Details, Place Image url, Geo Coordinates, ticket Pricing, Time travel each of the location for 3 days and 2 night with each day plan with best time to visit in JSON\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, here's a detailed luxury travel plan for a 3-day, 2-night trip to Pune, Maharashtra, India, designed for a group of friends with a high-end budget. The plan includes real flight details (as of today, but prices can fluctuate), luxury hotel options, high-end dining experiences, and curated activities.\n\n**Important Notes:**\n\n*   **Flight Prices:** The flight prices are estimates and can vary significantly based on your departure city, time of booking, and airline. Check the booking URL for the most current pricing.\n*   **Hotel Prices:** Hotel prices are averages for luxury accommodations and can fluctuate based on the season and specific room types.\n*   **Booking:** It's advisable to book flights and hotels well in advance, especially during peak travel times.\n*   **Transportation:**  The plan assumes private car hires for all local transportation for a comfortable and efficient experience.\n*   **Customization:** This is a template; feel free to adjust it based on your group's interests and preferences.\n*   **Dining:** The dining suggestions are of the finer establishments. Feel free to replace these with other restaurants based on preferences.\n\n```json\n{\n  \"tripTitle\": \"Pune Luxury Escape for Friends\",\n  \"duration\": \"3 Days, 2 Nights\",\n  \"location\": \"Pune, Maharashtra, India\",\n  \"budget\": \"Luxury\",\n  \"travelers\": \"Group of Friends\",\n   \"bestTimeToVisit\": \"October to March (pleasant weather)\",\n  \"flights\": {\n     \"departureExample\": {\n      \"airline\": \"IndiGo\",\n      \"flightNumber\": \"6E-204\",\n       \"departureCity\": \"Delhi (DEL)\",\n      \"arrivalCity\": \"Pune (PNQ)\",\n      \"departureTime\": \"07:00 AM\",\n      \"arrivalTime\": \"09:00 AM\",\n      \"price\": \"₹7,000 - ₹12,000 (approx. per person, round trip)\",\n      \"bookingURL\": \"https://www.goindigo.in\"\n    },\n    \"returnExample\":{\n        \"airline\": \"IndiGo\",\n        \"flightNumber\": \"6E-205\",\n         \"departureCity\": \"Pune (PNQ)\",\n        \"arrivalCity\": \"Delhi (DEL)\",\n        \"departureTime\": \"08:00 PM\",\n        \"arrivalTime\": \"10:00 PM\",\n        \"price\": \"₹7,000 - ₹12,000 (approx. per person, round trip)\",\n        \"bookingURL\": \"https://www.goindigo.in\"\n       }\n  },\n  \"hotels\": [\n    {\n      \"hotelName\": \"The Ritz-Carlton, Pune\",\n      \"hotelAddress\": \"Golf Course Square, Airport Road, Pune 411006, India\",\n      \"price\": \"₹25,000 - ₹50,000 per night\",\n       \"hotelImageURL\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/77/62/3f/the-ritz-carlton-pune.jpg?w=1200&h=-1&s=1\",\n       \"geoCoordinates\": {\n        \"latitude\": 18.5585,\n        \"longitude\": 73.9037\n      },\n      \"rating\": 4.8,\n      \"description\": \"Opulent hotel with world-class dining, a luxurious spa, and stunning city views.\"\n    },\n    {\n      \"hotelName\": \"JW Marriott Hotel Pune\",\n      \"hotelAddress\": \"Senapati Bapat Rd, Laxmi Society, Model Colony, Shivajinagar, Pune, Maharashtra 411016, India\",\n      \"price\": \"₹20,000 - ₹40,000 per night\",\n      \"hotelImageURL\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/3c/98/9b/jw-marriott-hotel-pune.jpg?w=1200&h=-1&s=1\",\n       \"geoCoordinates\": {\n        \"latitude\": 18.5351,\n        \"longitude\": 73.8455\n      },\n      \"rating\": 4.7,\n        \"description\": \"Elegant hotel with excellent restaurants, a large pool, and a sophisticated ambiance.\"\n    },\n    {\n       \"hotelName\":\"Conrad Pune\",\n        \"hotelAddress\": \"7 Mangaldas Rd, Bund Garden, Pune, Maharashtra 411001, India\",\n       \"price\": \"₹18,000 - ₹35,000 per night\",\n        \"hotelImageURL\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/86/f5/d7/conrad-pune.jpg?w=1200&h=-1&s=1\",\n         \"geoCoordinates\": {\n            \"latitude\": 18.5297,\n            \"longitude\": 73.8734\n           },\n        \"rating\": 4.6,\n        \"description\": \"Modern luxury hotel with a rooftop pool, multiple dining options, and a contemporary design.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"Arrival & Historical Exploration\",\n      \"schedule\": [\n          {\n              \"time\": \"9:00 AM\",\n               \"activity\": \"Arrival at Pune Airport and Transfer to Hotel\",\n                \"details\": \"Arrive at Pune Airport (PNQ). Private car transfer to your chosen luxury hotel. Check-in and refresh.\",\n                \"duration\":\"1 hour\"\n            },\n            {\n               \"time\": \"11:00 AM\",\n                \"activity\": \"Breakfast at Hotel\",\n                \"details\": \"Enjoy a leisurely breakfast at your hotel.\",\n                \"duration\":\"1 hour\"\n            },\n        {\n          \"time\": \"12:00 PM\",\n          \"activity\": \"Visit Aga Khan Palace\",\n          \"details\": \"Explore this historical landmark with its connection to India's freedom struggle. Museum and serene gardens.\",\n          \"placeName\":\"Aga Khan Palace\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Aga_Khan_Palace_Pune_1.jpg/1280px-Aga_Khan_Palace_Pune_1.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 18.5422,\n            \"longitude\": 73.9020\n          },\n          \"ticketPricing\": \"₹30 per person\",\n             \"duration\":\"2-3 hours\"\n        },\n        {\n          \"time\": \"3:00 PM\",\n          \"activity\": \"Lunch at Malaka Spice\",\n          \"details\": \"Enjoy an elegant pan-Asian meal at this popular restaurant.\",\n          \"duration\":\"1.5 hour\"\n\n        },\n        {\n          \"time\": \"4:30 PM\",\n          \"activity\": \"Shaniwar Wada\",\n          \"details\": \"Visit the historical fort of the Peshwa rulers, experience the ruins and grandeur\",\n          \"placeName\":\"Shaniwar Wada\",\n           \"placeImageURL\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Shaniwar_wada_pune.jpg/1280px-Shaniwar_wada_pune.jpg\",\n           \"geoCoordinates\": {\n            \"latitude\": 18.5211,\n            \"longitude\": 73.8608\n          },\n           \"ticketPricing\": \"₹25 per person\",\n           \"duration\":\"2 hour\"\n        },\n          {\n              \"time\":\"7:00 PM\",\n              \"activity\":\"Relax & Freshen up at Hotel\",\n              \"details\":\"Freshen up at Hotel and take a rest\",\n              \"duration\":\"2 hour\"\n          },\n         {\n          \"time\": \"9:00 PM\",\n          \"activity\": \"Dinner at Paasha (JW Marriott)\",\n          \"details\": \"Enjoy a luxurious North Indian dining experience with breathtaking city views.\",\n           \"duration\":\"1-2 hours\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"theme\": \"Nature and Relaxation\",\n      \"schedule\": [\n          {\n          \"time\": \"9:00 AM\",\n          \"activity\": \"Breakfast at Hotel\",\n          \"details\": \"Enjoy a delightful breakfast at your hotel.\",\n          \"duration\":\"1 hour\"\n            },\n        {\n          \"time\": \"10:00 AM\",\n          \"activity\": \"Visit Sinhagad Fort\",\n          \"details\": \"Day trip to Sinhagad Fort, enjoy scenic views and hiking.\",\n          \"placeName\":\"Sinhagad Fort\",\n            \"placeImageURL\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sinhagad_Fort_Pune.jpg/1280px-Sinhagad_Fort_Pune.jpg\",\n           \"geoCoordinates\": {\n            \"latitude\": 18.3689,\n            \"longitude\": 73.7527\n          },\n          \"ticketPricing\": \"₹50 per person\",\n          \"duration\":\"4-5 hours\"\n        },\n        {\n          \"time\": \"3:00 PM\",\n          \"activity\": \"Lunch at a Local Dhaba near Sinhagad\",\n          \"details\": \"Enjoy traditional Maharashtrian cuisine at a local restaurant near the fort.\",\n           \"duration\":\"1-2 hours\"\n        },\n        {\n          \"time\": \"5:00 PM\",\n          \"activity\": \"Relax at the Hotel Spa\",\n          \"details\": \"Return to hotel and relax with a spa treatment, pool, or other hotel amenities.\",\n          \"duration\":\"2 hours\"\n        },\n          {\n          \"time\":\"8:00 PM\",\n          \"activity\":\"Shopping at Phoenix Marketcity\",\n          \"details\":\"Explore the high end shopping experience at Phoenix Marketcity, and enjoy dinner\",\n          \"duration\":\"3 hours\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"theme\": \"Culture and Departure\",\n      \"schedule\": [\n           {\n             \"time\": \"9:00 AM\",\n                \"activity\": \"Breakfast at Hotel\",\n               \"details\": \"Enjoy a leisurely breakfast at your hotel.\",\n              \"duration\":\"1 hour\"\n            },\n        {\n           \"time\":\"10:00 AM\",\n           \"activity\":\"Raja Dinkar Kelkar Museum\",\n           \"details\":\"Explore the exquisite collection of Indian artifacts and art.\",\n          \"placeName\":\"Raja Dinkar Kelkar Museum\",\n          \"placeImageURL\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Raja_Dinkar_Kelkar_Museum.jpg/1280px-Raja_Dinkar_Kelkar_Museum.jpg\",\n           \"geoCoordinates\": {\n            \"latitude\": 18.5096,\n            \"longitude\": 73.8574\n          },\n           \"ticketPricing\": \"₹200 per person\",\n             \"duration\":\"2-3 hours\"\n        },\n\n          {\n              \"time\": \"1:00 PM\",\n             \"activity\": \"Lunch at  Alto Vino\",\n            \"details\": \"Enjoy fine Italian dining at this restaurant in JW Marriott Hotel.\",\n             \"duration\":\"1.5 hours\"\n           },\n          {\n            \"time\":\"2:30 PM\",\n            \"activity\":\"Departure from Hotel\",\n            \"details\":\"Checkout from the hotel, transfer to airport and take your return flight\",\n             \"duration\":\"1-2 hours\"\n          }\n      ]\n    }\n  }\n}\n```\n**Additional Tips for Luxury Travelers:**\n\n*   **Private Car Hire:** Arrange for a private car with a driver for the duration of your trip for maximum comfort and convenience.\n*   **Personalized Experiences:** Contact your hotel concierge to arrange personalized experiences like private tours, cooking classes, or shopping experiences.\n*   **Fine Dining:** Pune has a vibrant culinary scene. Explore high-end restaurants for a memorable gastronomic experience.\n*   **Spa and Wellness:** Take advantage of your hotel's spa facilities for relaxation and rejuvenation.\n*   **Shopping:** Pune has several high-end boutiques and malls for luxury shopping.\n\nLet me know if you'd like any modifications or additional details!\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
