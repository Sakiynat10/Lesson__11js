//3.10

//exam2 let arr = [1589, 31851, 512, 180975, 78];

// function getDigitsNumber(arr){
//     let max = arr[0]
//     for(el of arr){
//         if(max < el){
//             max = el;
//         }
//     }
//     return max;
// }


// let res = getDigitsNumber(arr);
// console.log(res);


//exam3

// function getStringArr(arr){
//     let arr2 = [];
//        for(el of arr){
//         if(typeof(el) == "string"){
//             arr2.push(el);
//         }
//        }
//     return arr2;
// }

// let arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}]
// let res = getStringArr(arr);
// console.log(res);


//exam4

// function getPunctuationNumber(str){
//     let sum = 0;
//     const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];
    
//     for(el of str){
//         if(punctuationSigns.includes(el)){
//             sum++
//         }
//     }
//     return sum;
// }


// let str = "Hello! How are you? I'm doing great. What's new?";

// let res = getPunctuationNumber(str);
// console.log(res);


//exam5

// function switchLetters(str){
//     let result = '';
//     for(el of str){
//         if(el >= "a" && el <= "z"){
//            console.log(el.toUppercase);
//         }
//     }
//     return result;
// }


// let str = "Abdulaziz Programmer";

// let res = switchLetters(str);
// console.log(res);

// function switchLetters(str) {
//     let result = '';

//     for (let el of str) {

//         if (el >= 'a' && el <= 'z') {
//             result += el.toUpperCase();
//         } else if (currentChar >= 'A' && currentChar <= 'Z') {
//             result += el.toLowerCase();
//         } else {
//             result += el;
//         }
//     }

//     return result;
// }

// let str = "Abdulaziz Programmer";
// let output = switchLetters(str);
// console.log(output);


//exam6
// let obj = {a: 1, b: 2, c: 3};

// function changeObjToArr(obj){
//     let arr = []
//     for(key in obj){
//         arr = arr.push(key) 
//         console.log(arr);
//     }
// }

// let res = changeObjToArr(obj);
// console.log(res);


//exam7
// function seperateStudents(students) {
//     const result = {
//       grant: [],
//       contract: []
//     };
  
//     students.forEach(student => {
//       if (student.isGrant) {
//         result.grant.push(student.name);
//       } else {
//         result.contract.push(student.name);
//       }
//     });
  
//     return result;
//   }
  
//   const students = [
//     {name: "Jurabek", isGrant: false},
//     {name: "Elbek", isGrant: true},
//     {name: "Shamshod", isGrant: false},
//     {name: "Kamola", isGrant: false},
//     {name: "Gulnoza", isGrant: true},
//     {name: "Savlatbek", isGrant: false},
//   ];
  
//   const result = seperateStudents(students);
//   console.log(result);


//exam8
// function getTotalPages(books) {
//     return books.reduce((totalPages, book) => {
//       if (book.isReadFinished) {
//         totalPages += book.pages;
//       }
//       return totalPages;
//     }, 0);
//   }
  
//   const books = [
//     { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//     { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//     { name: "Atom habits", pages: 328, isReadFinished: true },
//     { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//     { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//     { name: "The Hobbit", pages: 310, isReadFinished: false },
//     { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//     { name: "Harry Potter", pages: 320, isReadFinished: true },
//     { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//     { name: "To the Lighthouse", pages: 209, isReadFinished: true }
//   ];
  
//   const totalReadPages = getTotalPages(books);
//   console.log(totalReadPages);
  