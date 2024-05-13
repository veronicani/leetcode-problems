programming a drone
 - needs to maneuvre aroud amazon warehouse
 - want it to move
 - grab 1 box at a time, load the drone -> 60lbs
 - can go up and down
- drone knows how to recieve a set of directions
- [move right, move left, grabbox, up, down, ]

- Problem: some pathways aren't clear, there are junk, bumping into people
- any number of Drones
- control the Drones, deploy it
  - will provide with instructions to grab the drone
    - box, boxLocation, boxNewLocation

class DroneSystem {
  constructor(numDrones) {
    this.drones = [Drone, Drone];
  }

  assignBox(box, boxLocation, newLocation) {
    loop over this.drones
      if currDrone.busy === false;
      try {
        this.currDrone.runCycle();
        break;
      } catch (err) {

      }
      
  }
    
}

class Drone {
  constructor(capacity) {
    this.capacity = capacity
    this.loaded = false;
    this.busy = false;
  }

  runCycle(box, boxLocation, newLocation) {
    this.move(boxLocation);

    
  }

  move(location) {
    //moves this to the location coords
    //run checkForObstacle as it moves
  }

  checkForObstacle() {
    //check a few feet in front
    if there is an obstacle in the front
    while ob in in the front
      check if l-side is empty
        if so, move left
      check if r-side is empty
        if so, move right
      check back
        move back
  }

  findBox(boxLocation, box) {
    find the beginning point of the shelf
    for loop -> iterate over each row
      for loop -> iterate over each col
        if currbox = box;
        grabBox(currbox); 
    throw Error (no box found);
  }

  grabBox(boxLocation, box) {
    check if the box is the same as input
    if not -> throw Error
    check if box is within this.capacity
    if not -> throw Err
    - drone <-> warehouse API updates boxLocation => null
    this.loaded = true;
  }

}