const num = Number(prompt("digite um numero"))
 
if (num % 2 === 0) {
    if (num % 3 === 0) {
        console.log ("esse numero  é divisivel por 2 ou por 3 " ) }
    else if (!(num %3===0)){
        console.log ("esse numero  é divisivel por 2 ou por 3 " )}
} else if (!(num % 2 === 0)){
    if (num % 3 === 0) {
        console.log ("esse numero  é divisivel por 2 ou por 3 " ) }
        else {
        console.log ("esse numero  não é divisivel por 2 e por 3 ")
} 
}


if(num % 2 === 0 && num % 3 === 0 ){ 
    console.log("este numero é divisel por 2 e por 3")
 
} else {
    console.log ("este numero não é divisel por 3")
} 

    

   
