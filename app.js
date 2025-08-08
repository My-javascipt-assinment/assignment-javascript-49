// assignment - javascript 49
/*==================================== Question No 1 =========================================
Check if an array has any even number.
let numbers = [3, 7, 9, 10];
======================================= Answer =====================================*/
// let numbers = [3,7,9,10];
// let target = numbers.some((item)=>{
//     return item % 2 === 0});
// console.log(target)
/*==================================== Question No 2 =========================================
Check if any name in the array starts with the letter "A".
let names = ['Ali', 'Bilal', 'Usman', 'Ahmed'];
======================================= Answer =====================================*/
// let names = ['Ali', 'Bilal', 'Usman', 'Ahmed'];
// let target = names.some((item)=>{
//     return item.startsWith('A');
// });
// console.log(target)

/*==================================== Question No 3 =========================================
Check if any student scored more than 80 marks.
let marks = [65, 73, 49, 81, 59];
======================================= Answer =====================================*/
// let marks = [65, 73, 49, 8, 59];
// let target = marks.some((item)=>{return item > 80;})
// console.log(target)

/*==================================== Question No 4 =========================================
Check if any product in the cart is out of stock.
let products = [
  { name: "Laptop", inStock: true },
  { name: "Mouse", inStock: false },
  { name: "Keyboard", inStock: true }
];
======================================= Answer =====================================*/
// let products = [
//   { name: "Laptop", inStock: true },
//   { name: "Mouse", inStock: false },
//   { name: "Keyboard", inStock: true }
// ];
// let target = products.some((item)=>{return item.inStock === false});
// console.log(target)

/*==================================== Question No 5 =========================================
Check if any number in the array is negative.
let numbers = [5, -3, 8, 12];
======================================= Answer =====================================*/
// let numbers = [5, -3, 8, 12];
// let target = numbers.some((item)=>{return item < 0;});
// console.log(target)

/*==================================== Question No 6 =========================================
 Find the Index of a Specific Name
let names = ["Ali", "Sana", "Zara", "Aziz", "Hamza"];
// 👉 Find the index of "Aziz" in the array using findIndex
======================================= Answer =====================================*/
// let names = ["Ali", "Sana", "Zara", "Aziz", "Hamza"];
// let target = names.findIndex((item)=>{return item === 'Aziz'});
// console.log(target)

/*==================================== Question No 7 =========================================
let numbers = [10, 20, 0, -5, 30, -1];
// 👉 Use findIndex to get the index of the first negative number
======================================= Answer =====================================*/
// let numbers = [10, 20, 0, -5, 30, -1];
// let target = numbers.findIndex((item)=>{
//     return item < 0});
// console.log(target)

/*==================================== Question No 8 =========================================
let users = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Zain" },
  { id: 3, name: "Aziz" }
];
// 👉 Find the index of the user with id = 2
======================================= Answer =====================================*/
// let users = [
//   { id: 1, name: "Ahmed" },
//   { id: 2, name: "Zain" },
//   { id: 3, name: "Aziz" }
// ];
// let target = users.findIndex((item)=>{return item.id === 2;});
// console.log(target);
// users.splice(target,1);
// console.log(users)

/*==================================== Question No 9 =========================================
let students = [
  { name: "Sara", age: 20 },
  { name: "Hira", age: 17 },
  { name: "Ali", age: 22 }
];
// 👉 Find the index of the first student who is under 18
======================================= Answer =====================================*/
// let students = [
//   { name: "Sara", age: 20 },
//   { name: "Hira", age: 17 },
//   { name: "Ali", age: 22 }
// ];
// let target = students.findIndex((item)=>{return item.age < 18;})
// console.log(target)

/*==================================== Question No 10 =========================================
let products = [
  { id: 1, name: "Mobile" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "Tablet" }
];

// 👉 Use findIndex to find the product with id = 2
// 👉 Then use splice to delete it from the array
======================================= Answer =====================================*/
// let products = [
//   { id: 1, name: "Mobile" },
//   { id: 2, name: "Laptop" },
//   { id: 3, name: "Tablet" }
// ];

// let target = products.findIndex((item)=>{return item.id === 2;})
// products.splice(target,1);
// console.log(products)


/*==================================== Question No 11 =========================================
let numbers = [2, 4, 6, 8];
// 👉 Use map to create a new array where each number is doubled
======================================= Answer =====================================*/
// let numbers = [2, 4, 6, 8];
// let target = numbers.map(function(item){return item*2;});
// console.log(target)
/*==================================== Question No 12 =========================================
let users = [
  { id: 1, name: "Aziz" },
  { id: 2, name: "Zara" },
  { id: 3, name: "Hamza" }
];
// 👉 Use map to create an array of only names
// Result: ["Aziz", "Zara", "Hamza"]
======================================= Answer =====================================*/
// let users = [
//   { id: 1, name: "Aziz" },
//   { id: 2, name: "Zara" },
//   { id: 3, name: "Hamza" }
// ];
// let target  = users.map((item)=>{return item.name;});
// console.log(target);

/*==================================== Question No 13 =========================================
let prices = [100, 200, 300];
// 👉 Use map to return ["₹100", "₹200", "₹300"]
======================================= Answer =====================================*/
// let prices = [100, 200, 300];
// let target = prices.map(function(item){return `$${item}`});
// console.log(target);
/*==================================== Question No 14 =========================================
 Convert to Uppercase
let fruits = ["apple", "banana", "mango"];
// 👉 Use map to return a new array with all fruit names in uppercase
======================================= Answer =====================================*/
// let fruits = ["apple", "banana", "mango"];
// let target = fruits.map(function(item){return item.toUpperCase();});
// console.log(target);
/*==================================== Question No 15 =========================================
let students = ["Ali", "Sana", "Hira"];
// 👉 Use map to return: ["Hello Ali", "Hello Sana", "Hello Hira"]
======================================= Answer =====================================*/
// let students = ["Ali", "Sana", "Hira"];
// let target = students.map(function(item){return `Hello ${item}`});
// console.log(target);

/*==================================== Question No 16 =========================================
let sentence = "JavaScript is fun";
// 👉 Use split() to turn this string into an array of words
// Result: ["JavaScript", "is", "fun"]
======================================= Answer =====================================*/
// let sentence = "JavaScript is fun";
// let target = sentence.split(' ');
// console.log(target);
/*==================================== Question No 17 =========================================
let name = "Aziz";
// 👉 Use split() to break the name into individual characters
// Result: ["A", "z", "i", "z"]
======================================= Answer =====================================*/
// let name = "Aziz";
// let target = name.split('');
// console.log(target)
/*==================================== Question No 18 =========================================
let data = "HTML,CSS,JavaScript,React";
// 👉 Use split() to turn this into an array of skills
// Result: ["HTML", "CSS", "JavaScript", "React"]
======================================= Answer =====================================*/
// let data = "HTML,CSS,JavaScript,React";
// // let target = data.split(" , ");
// // console.log(target);

// let skills = data.split(",");
// console.log(skills)

/*==================================== Question No 19 =========================================
let paragraph = "Learning JavaScript is fun and powerful";
// 👉 Use split() to count how many words are in this string
======================================= Answer =====================================*/
// let paragraph = "Learning JavaScript is fun and powerful";
// let target = paragraph.split(' ');
// console.log(target);
// let len = target.length;
// console.log(len);
/*==================================== Question No 20 =========================================
let fullName = "Aziz Ullah Khan";
// 👉 Use split() to get only the first name ("Aziz")
======================================= Answer =====================================*/
// let fullName = "Aziz Ullah Khan";
// let target = fullName.split(' ');
// console.log(target);
// let get = target.slice(0,1);
// console.log(get);
// let need = get.join();
// console.log(need)

/*==================================== Question No 21 =========================================
const fruits = ["Apple", "Banana", "Mango"];
// Join the array with commas and log the result.
Expected Output: "Apple,Banana,Mango"
======================================= Answer =====================================*/
// const fruits = ["Apple", "Banana", "Mango"];
// let target = fruits.join(',');
// console.log(target)
/*==================================== Question No 22 =========================================
const words = ["Learning", "JavaScript", "is", "fun"];
// Join the words with a space and log the sentence.
Expected Output: "Learning JavaScript is fun"
======================================= Answer =====================================*/
// const words = ["Learning", "JavaScript", "is", "fun"];
// let target = words.join(' ');
// console.log(target)
/*==================================== Question No 23 =========================================
const numbers = [1, 2, 3, 4, 5];
// Join the numbers with a dash (-)
Expected Output: "1-2-3-4-5"
======================================= Answer =====================================*/
// const numbers = [1, 2, 3, 4, 5];
// let target = numbers.join('-');
// console.log(target)

/*==================================== Question No 24 =========================================
const data = ["Aziz", "Web Developer", "Karachi"];
// Convert the array to a CSV format string (comma-separated)
Expected Output: "Aziz,Web Developer,Karachi"
======================================= Answer =====================================*/
// const data = ["Aziz", "Web Developer", "Karachi"];
// let target = data.join(',');
// console.log(target)

/*==================================== Question No 25 =========================================
const tags = ["coding", "javascript", "frontend"];
// Join the words into a single hashtag string like "#coding#javascript#frontend"
Expected Output: "#coding#javascript#frontend"
======================================= Answer =====================================*/
// const tags = ["coding", "javascript", "frontend"];
// let target = tags.join('#');
// console.log(target);

/*==================================== Question No 26 =========================================
show array data on dom
======================================= Answer =====================================*/
// const users = ['Aziz','Kaleem','Saqi','Mobeen'];
// let ul = document.getElementById('ul');
// ul.innerHTML = users.map((item)=>{return `<li>${item}</li>`
             
// }).join('');

/*==================================== Question No 27 =========================================
convert an array to object and give id to each array element
======================================= Answer =====================================*/
// const users = [
//     {name : 'Aziz'},
//     {name : 'Ilyas'},
//     {name : 'Waqar'},
//     {name : 'Zohaib'}
// ];
// console.log(users);
// let target = users.map(function(item,index){return })

// const users = ['ahmed','mark','smith','trish'];
// const modifyArray = users.map((item,index)=>{return{uid : index + new Date().getTime(),
//    userName : item
// };});
// console.log(modifyArray)
// const student = ['klsoom','Areeb','Sndleeb','Kehkshan'];
// const modifyStudent = student.map((item,index)=>{return{uid : index + new Date().getTime(),
//     userName : item
// }})
// console.log(modifyStudent)


/*==================================== Question No 28 =========================================

======================================= Answer =====================================*/
function casing(){let get = document.getElementById('input').value;
    console.log(get);
    let convertArray = get.split(' ');
    console.log(convertArray);
    let target = convertArray.map((item)=>{return item.charAt(0).toUpperCase();});
    console.log(target)
    let otherMap = convertArray.map((item)=>{return item.charAt(0).toUpperCase()+item.slice(1)});
    console.log(otherMap);
    let requirement = otherMap.join(' ');
    console.log(requirement);
    let display = document.getElementById('display');
    display.value = requirement;
   
}




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/