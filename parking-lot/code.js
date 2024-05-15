"use strict"
class Vehicle {
  constructor(size, numWheels = 4, license) {
    this.size = size;
    this.numWheels = numWheels;
    this.license = license;
  }
}

class Sedan extends Vehicle {
  
}

class ParkingSpot {
  constructor(size, type) {
    this.type = type;
    this.size = size;
    this.vehicle = null;
  }
}

class ParkingLot {
  constructor([spots]) { //[10 handicap, 10 regular, 10 large, 5 motorcycle]
    this.lot = this.buildLot([spots]);
    this.spotsFilled = 0;
    //[{size:1, vehicle: {Vehicle}}, {size:2, vehicle: null}, ]
  }

  park(vehicle, spotNum) {
    //check if the object is a vehicle, if not -> throw err
    //check if parking lot is full -> console.log('Sorry, this parking lot is full.')
      //return

    //check if this.lot[spotNum -1] -> PKSpot.vehicle !== null -> 
      //iterate from spotNum onwards till next avail spot
        //reassign spotNum to newSpotNum
        //reassign lot[spotNum -1] = vehicle
        //return {spotNum: spotNum};
      //throw Error (lot is full)
  }

  unpark(vehicle) {
    //iterate over the lot
      //find the vehicle with matching license
      //remove the vehicle from pk -> reassign spot to be null;
    //return the vehicle
  }
}
