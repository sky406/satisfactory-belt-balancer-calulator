"use strict";
exports.__esModule = true;
var beltlimit = 780;
var connectionlimit = 3;
// this should just be a simple balancer, put a number of inputs in and a number of outputs, and it should try it's best to make all the outputs have the same throughput
function balance(inputs, output_number) {
    var total_throughput = 0;
    for (var i = 0; i < inputs.length; i++) {
        total_throughput += inputs[i].throughput;
    }
}
