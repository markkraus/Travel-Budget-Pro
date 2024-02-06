import TravelItinerary from './hotel.js';
import OtherClass from './otherClass.js';

// Example usage:
const userPreferences = new TravelItinerary(['Sightseeing', 'Hiking'], 1000, 5);
userPreferences.generateItinerary();
userPreferences.displayItinerary();

const anotherObject = new OtherClass();
// Use the functionality of the OtherClass
