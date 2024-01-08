// //Exam 5.10
// function search(arr){
//     for(i in arr){
//         if(arr[i].includes(str)){
//             return arr[i];
//         }
//     }
// }

// let arr = ["Abdulaziz", "Shahobiddin", "Shohrux", "Shukurjon", "Azamat", "Rahmatulla"];
// let str = "az";

// let res = search(arr);
// console.log(res);



//3
// function getDividersSum(arr, n){
//     let sum = 0;
//     for(el of arr){
//         if(el % n == 0){
//             sum += el;
//         }
//     }
//     return sum;
// }

// let arr = [2, 5, 7, 10, 0, 18, 15];
// let n = 5;

// let res = getDividersSum(arr , n)

// console.log(res);


//4

// function checkSentence(str){
//     let len = str.length;
//     for(i in str){
//         if(str[0] == str[0].toUpperCase() && str[len-1] == "."){
//             return "true";
//         }
//     }
// }

// let str = "Abdulaziz programmer is full-stack developer."
// let res = checkSentence(str);
// console.log(res);


//5
// function getNumberOfCases(str) {
//     let result = {
//       uppercase: 0,
//       lowercase: 0
//     };
  
//     for (let char of str) {
//       if (char >= 'A' && char <= 'Z') {
//         result.uppercase++;
//       } else if (char >= 'a' && char <= 'z') {
//         result.lowercase++;
//       }
//     }
  
//     return result;
//   }
  
//   let str = "Abdulaziz Programmer";
//   let numberOfCases = getNumberOfCases(str);
//   console.log(numberOfCases);

//6
// function changeObjToString(obj) {
//     const result = [];
    
//     result.push(Object.keys(obj).join(''));
  
//     result.push(Object.values(obj).join(''));
  
//     return result;
//   }
  
//   let obj = {a: 1, b: 2, c: 3};
//   let resultArray = changeObjToString(obj);
//   console.log(resultArray);


//7
// function getProductsSum(...ids) {
//     const products = {
//       1: { name: "Product 1", price: 20 },
//       2: { name: "Product 2", price: 30 },
//       3: { name: "Product 3", price: 25 },
//     };
  
//     let sum = 0;
  
//     ids.forEach(id => {
//       if (products[id]) {
//         sum += products[id].price;
//       }
//     });
  
//     return sum;
//   }
  
//   const totalSum = getProductsSum(1, 3);
//   console.log(totalSum); // 45



//8
// function getTopProducts(products, n) {
//     const sortedProducts = products.sort((a, b) => b.price - a.price);
    
//     const topProductNames = sortedProducts.slice(0, n).map(product => product.name);
    
//     return topProductNames;
//   }

//   const products = [
//     { id: 1, name: 'Bike', price: 100 },
//     { id: 2, name: 'TV', price: 400 },
//     { id: 3, name: 'Album', price: 800 },
//     { id: 4, name: 'Book', price: 600 },
//     { id: 5, name: 'Phone', price: 500 },
//     { id: 6, name: 'Computer', price: 1000 },
//     { id: 7, name: 'Skate', price: 300 },
//     { id: 8, name: 'Keyboard', price: 200 },
//     { id: 9, name: 'Bottle', price: 700 },
//   ];
//   let n = 3;
  
//   const topProducts = getTopProducts(products, n);
//   console.log(topProducts);
  
  
  