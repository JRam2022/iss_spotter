const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

//fetchMyIP((error, ip) => {
//  if (error) {
//    console.log("It didn't work!", error);
//    return;
//  }
//
//  console.log('It worked! Returned IP:', ip);
//});

const ip = '66.115.146.16';
fetchCoordsByIP(ip , (error, coordinates) => {
  
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned coordinates:', coordinates);
});