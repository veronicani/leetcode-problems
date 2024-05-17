/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let tGas = 0; //if the total cost is > than total gas, 
    let tCost = 0 //we can't complete the circuit

    let tank = 0;
    let start = 0; 
    //let i be a mark for each station
    for (let i = 0; i < gas.length; i++) { 
        tGas += gas[i]; //calc the total gas and total cost as we loop
        tCost += cost[i]; 
        
        tank += gas[i] - cost[i]; //the tank will accumulate this val
        if (tank < 0) { //if the tank ever falls below 0
            tank = 0;   
            start = i + 1; //our starting point needs to be the next station
        }
    }
    return tGas >= tCost ? start : -1;
};

