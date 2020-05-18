let num= [2,4,6,8,10]


var sum= num.reduce(async (accumulator, item ) =>{

    let result= await accumulator

    console.log(result, item, "summm");
    return  result+item
}, 0)

sum.then(value => {
    console.log(value, "summm");
    
}) 

console.log(sum, "summm");
