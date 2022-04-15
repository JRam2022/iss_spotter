const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

//fetchMyIP((error, ip) => {
//  if (error) {
//    console.log("It didn't work!", error);
//    return;
//  }
//
//  console.log('It worked! Returned IP:', ip);
//});

//const ip = '66.115.146.16';
//fetchCoordsByIP(ip , (error, coordinates) => {
//
//  if (error) {
//    console.log("It didn't work!", error);
//    return;
//  }
//
//  console.log('It worked! Returned coordinates:', coordinates);
//});
//const coords = { latitude: '1', longitude: '1' };
//fetchISSFlyOverTimes(coords, (error, FOTtime) => {
//    
//  if (error) {
//    console.log("It didn't work!", error);
//    return;
//  }
//
//  console.log('It worked! Returned fly over times:', FOTtime);
//});