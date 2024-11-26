let clickedValues = ['1', '+', '1']
let filtered = clickedValues.filter((arr)=> {
    return    arr  != '+'
}) 
const sum = filtered.reduce((total, currVal) => total + Number(currVal),0)

console.log(sum)