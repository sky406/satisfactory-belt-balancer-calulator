export interface beltnode
{
    inputs:beltnode[];
    throughput:number;
    outputs:beltnode[];
}
// it is reccomended to maintain a cetain an ammount more than 1 but less than 4
// remember that the join function always returns the input node
export function join(inputnode:beltnode,mergenode:beltnode)
{
    mergenode.inputs.push(inputnode)
    inputnode.outputs.push(rectify(mergenode))
    return inputnode
    
}
// splits the node outputs equally
export function split(node:beltnode,ammount:number)
{
    for(let i = 0;i < ammount;i++)
    {
        node.outputs.push({
            inputs:[node],
            throughput:node.throughput/ammount,
            outputs:[]
        })
    }
    return node
}

// the rectify function shouldn't work on a node without inputs so it should only ever be called on the join function 
function rectify(node:beltnode):beltnode
{
    let expected_throughput = 0
    for(let i = 0;i < node.inputs.length;i++)
    {
        expected_throughput+=node.inputs[i].throughput/node.inputs[i].outputs.length
    }
    if(node.throughput!=expected_throughput)
    {
        node.throughput = expected_throughput
        for(let i = 0;i < node.outputs.length;i++)
        {
            node.outputs[i] = rectify(node.outputs[i])
        }
        return node
    }
    else
    {
    return node
    }
}