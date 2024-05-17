/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let gasGain = gas.reduce((a, b) => a + b, 0);
    let gasCost = cost.reduce((a, b) => a + b, 0);
    if (gasCost > gasGain) return -1;

    let tank = 0;
    let start = 0;
    for (let i = 0; i < gas.length; i++) {
        tank += gas[i] - cost[i];
        if (tank < 0) {
            tank = 0;
            start = i + 1;
        }
    }
    return start;
};

