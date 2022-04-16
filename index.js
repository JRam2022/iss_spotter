//const { fetchMyIP } = require('./iss');
//const { fetchCoordsByIP } = require('./iss');
//const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

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

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    
    datetime.setUTCSeconds(pass.risetime);
    
    const duration = pass.duration;
    
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, FOTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(FOTimes);
});