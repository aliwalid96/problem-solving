'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------
// let arryOfNumber=[12, 32, 22, 45, 78, 12, 50];
const findMax = (arr)=>{
    let max=12;
    for(let i=0;i<arr.length;i++){
        if(max>arr[i]){
            max=max;
        }else{
            max=arr[i];

        }
    }
    
    return max;
}
console.log(findMax(arryOfNumber));


// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
// let arrForSum=[20, '234', 'car', 41, 20, 'chair'];

const sumNums = (arr)=>{
    let sum=0;
    
    for(let i=0;arr.length;i++){
        if(typeof arr[i]==="number"){
            sum=sum+arr[i];
        }
        
    }
    
   return sum;
}
console.log(sumNums(arrForSum));

//  
// ------------------------

// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
// let reverseArrayElement=['C#', 'JS', 'Ruby','Python' ] ;
const reverseArray = (arr)=>{
    for(let i=arr.length;i=>0;i--)
    {
        console.log(arr[i]);
    }
}
reverseArray(reverseArrayElement);



module.exports = {findMax , sumNums, reverseArray};