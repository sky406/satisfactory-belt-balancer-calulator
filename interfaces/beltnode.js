"use strict";
exports.__esModule = true;
exports.split = exports.join = void 0;
// it is reccomended to maintain a cetain an ammount more than 1 but less than 4
// remember that the join function always returns the input node
function join(inputnode, mergenode) {
    mergenode.inputs.push(inputnode);
    inputnode.outputs.push(rectify(mergenode));
    return inputnode;
}
exports.join = join;
// splits the node outputs equally
function split(node, ammount) {
    for (var i = 0; i < ammount; i++) {
        node.outputs.push({
            inputs: [node],
            throughput: node.throughput / ammount,
            outputs: []
        });
    }
    return node;
}
exports.split = split;
// the rectify function shouldn't work on a node without inputs so it should only ever be called on the join function 
function rectify(node) {
    var expected_throughput = 0;
    for (var i = 0; i < node.inputs.length; i++) {
        expected_throughput += node.inputs[i].throughput / node.inputs[i].outputs.length;
    }
    if (node.throughput != expected_throughput) {
        node.throughput = expected_throughput;
        for (var i = 0; i < node.outputs.length; i++) {
            node.outputs[i] = rectify(node.outputs[i]);
        }
        return node;
    }
    else {
        return node;
    }
}
