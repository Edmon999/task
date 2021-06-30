// const findPairsInArr = (arr) => {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 count++
//             }
//         }
//     }
//     return count;
// }
// console.log(findPairsInArr([1,2,3,1,1,5,5,2,5]))

// const findKbigestElement = (arr,k) => {
//     k = k - 1;
//    return  arr.sort((a,b) => b - a)[k]
// }

const findKbigestElement = (arr,k) => {}

const findPairsInArr = (arr) => {
    let obj = {}
    let count = 1;
    for(let i = 0; i < arr.length; i++){
       if(!obj[arr[i]]){
           obj[arr[i]] = count;
       }else{
           obj[arr[i]] = obj[arr[i]] + 1
       }
    }
    let arrOfValues = Object.values(obj);
   return  arrOfValues.reduce((acc,el) => {
       return   acc + possiblePairs(el)
    },0)
}
const possiblePairs = (n) => (n * (n - 1)) / 2
console.log(findPairsInArr([1,2,3,1,1,5,5,2]))