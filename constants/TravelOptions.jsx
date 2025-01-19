export const TravelOptions = [
    {
        id: 1,
        name: 'Just Me',
        desc : 'A solo traveler on a journey of exploration.',
        icon : '✈️',
        people: '1'
    },
    {
        id: 2,
        name: 'Couple',
        desc : 'Two travelers venturing together, sharing experiences and creating memories.',
        icon : '🥂',
        people: '2'
    },
    {
        id: 3,
        name: 'Family',
        desc : 'A group of loved ones discovering new destinations together.',
        icon : '🏡',
        people: '3-5'
    },
    {
        id: 4,
        name: 'Friends',
        desc : 'A lively group of thrill-seekers enjoying adventures and bonding.',
        icon : '🔥',
        people: 'More than 5'
    }
]


export const BudgetOptions = [
    {
        id: 1,
        name: 'Cheap',
        desc: 'Minimize expenses with cost-effective choices.',
        icon: '💵',
    },
    {
        id: 2,
        name: 'Moderate',
        desc: 'Balance comfort and affordability.',
        icon: '💰',
    },
    {
        id: 3,
        name: 'Luxury',
        desc: 'Indulge in premium experiences without worrying about cost.',
        icon: '💎',
    },
]

export const FI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} Budget with real flight details, flight price with booking url, Hotels options list with HotelName, Hotel address, Price, Hotel image url, geo coordinates, rating, descriptions and places to visit nearby with placeName, Place Details, Place Image url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON'

export const AI_PROMPT = 'Generate Travel Plan from Departure : {departure} to Destination : {destination}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} Budget with real flight details of departure and return flights, flight price with booking url, Hotels options list with HotelName, Hotel address, Price, Hotel image url, geo coordinates, rating, descriptions and places to visit nearby with placeName, Place Details, Place Image url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON\n'
