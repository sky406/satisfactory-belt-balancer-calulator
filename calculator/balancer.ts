import { beltnode } from "../interfaces/beltnode";
import { split } from "../interfaces/beltnode";
import { join } from "../interfaces/beltnode";

const beltlimit:number = 780
const connectionlimit:number = 3

// this should just be a simple balancer, put a number of inputs in and a number of outputs, and it should try it's best to make all the outputs have the same throughput
function balance(inputs:beltnode[],output_number:number)
{
    let total_throughput = 0 
    
    for(let i = 0;i < inputs.length;i++)
    {
        total_throughput+=inputs[i].throughput
    }


}