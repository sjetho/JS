let array = process.argv
let newArray = 0

for (let i = 2; i< array.length; i++){
    newArray += Number(array[i])
    
}

console.log(newArray)