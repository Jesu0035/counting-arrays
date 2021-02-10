'use strict'

const anArray = []
let n = 0;

setInterval(count, 1000)

function count () {
    n++;
    anArray.unshift(n)
    
    if(anArray.length>9){
        anArray.pop()
    }
    console.log(anArray)
}