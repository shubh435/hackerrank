/* 
There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

Example



There are  instances of ',  of '' and  of ''. For each query, add an element to the return array, .

*/

function matchingStrings(strings: string[], queries: string[]): number[] {
        let result:number[]=[]
        for ( let query of queries){
                let count = 0;
                for(let string of strings){
                        if(string===query){
                                count++
                        }
                }
                result.push(count)
        }
        return result
}