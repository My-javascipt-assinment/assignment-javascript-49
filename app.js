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
convert each word of string first letter to uppercase()
======================================= Answer =====================================*/
// function casing(){let get = document.getElementById('input').value;
//     console.log(get);
//     let convertArray = get.split(' ');
//     console.log(convertArray);
//     let target = convertArray.map((item)=>{return item.charAt(0).toUpperCase();});
//     console.log(target)
//     let otherMap = convertArray.map((item)=>{return item.charAt(0).toUpperCase()+item.slice(1)});
//     console.log(otherMap);
//     let requirement = otherMap.join(' ');
//     console.log(requirement);
//     let display = document.getElementById('display');
//     display.value = requirement;
   
// }

/*==================================== Question No 29 =========================================
change style by js
======================================= Answer =====================================*/
// // refresh page function 
// function refreshPage(){location.reload()}
// // underline
// function underlining(){let getInput = document.getElementById('input').value;
//   document.getElementById('input').value = '';
//   document.getElementById('input').focus();
//        let display = document.getElementById('display');
//        display.innerHTML = getInput;
//        display.style.textDecoration = 'underline';
// }

// function coloring(){let get = document.getElementById('input').value;
//   document.getElementById('input').value = '';
//   document.getElementById('input').focus();
//      let show = document.getElementById('display');
//      show.innerHTML = get;
//      show.style.fontSize = '50px'
// }
// function bolding(){let get = document.getElementById('input').value;
//   document.getElementById('input').value = '';
//   document.getElementById('input').focus();
//      let show = document.getElementById('display');
//      show.innerHTML = get;
//      show.style.fontWeight = 'bold'}
//     //  upperCase

//      function uppercasing(){let get = document.getElementById('input').value;
//   document.getElementById('input').value = '';
//   document.getElementById('input').focus();
//      let show = document.getElementById('display');
//      show.innerHTML = get;
//      show.style.textTransform = 'uppercase'}
//     //  lowercase

//      function lowercasing(){let get = document.getElementById('input').value;
//   document.getElementById('input').value = '';
//   document.getElementById('input').focus();
//      let show = document.getElementById('display');
//      show.innerHTML = get;
//      show.style.textTransform = 'lowercase'}

// // italicing
//      function italicing(){let get = document.getElementById('input').value;
//   document.getElementById('input').value = '';
//   document.getElementById('input').focus();
//      let show = document.getElementById('display');
//      show.innerHTML = get;
//      show.style.fontStyle = 'italic'}
// // capitalizing

//      function capitalizing(){let get = document.getElementById('input').value;
//   document.getElementById('input').value = '';
//   document.getElementById('input').focus();
//      let show = document.getElementById('display');
//      show.innerHTML = get;
//      show.style.textTransform = 'capitalize'}

/*==================================== Question No 30 =========================================
rest parameter
======================================= Answer =====================================*/
// const renderUser = (user1,user2,...rest)=>{console.log(user1),
//   console.log(user2);
//   console.log(rest)
// }

// renderUser('aziz','sndleeb','nik','andy',{username : 'anum',age : 30})

/*==================================== Question No 31 =========================================
default parameter
======================================= Answer =====================================*/
// function calculation(a,b =  4){return a+b;}
// let ans = calculation(2);
// console.log(ans)
/*==================================== Question No 32 =========================================
ternary operator
======================================= Answer =====================================*/
// let age = 18;
// let condition = (age < 20)?('eligible'):('overage');
// console.log(condition)

/*==================================== Question No 33 =========================================
object
======================================= Answer =====================================*/
// const student = {name : 'Aziz',
//   age : 23,
//   course : 'web'
// }
// console.log(student);
// let chek = student.hasOwnProperty('agee');
// console.log(chek);
// delete student.name;
// console.log(student);
// student.course = 'Graphic'
// console.log(student)

/*==================================== Question No 34 =========================================
onfocus and onblur event
======================================= Answer =====================================*/
 function bg(){let getInput = document.getElementById('input');
         getInput.style.background = 'red';
 }
 function ok(){let getInput = document.getElementById('input');
   getInput.style.width = '200px';
   getInput.style.height = '200px';
 }

/*==================================== Question No 35 =========================================
onmouseout and onmouseover
======================================= Answer =====================================*/
 function callMango(){let img = document.getElementById('img');
             img.src = "./assets/mango.jpg"
} function callApple(){let img = document.getElementById('img');   img.src = "./assets/apple.jpg"
 }

/*==================================== Question No 36 =========================================
recursion function
======================================= Answer =====================================*/
// function countDown(number){if(number <= 0){console.log('done');
//   return;
// }
// // print number 
// console.log(number);
// countDown(number-1)
// }
// countDown(5)

/*==================================== Question No 37 =========================================
find second largest number in an array by for loop
======================================= Answer =====================================*/
// let arr = [10, 5, 8, 20, 15];
// let max = arr[0];
// for(let i = 0 ; i < arr.length;i++){if(arr[i] > max){max = arr[i]}};
// console.log(max);
// let ind = arr.indexOf(max);
// console.log(ind);
// arr.splice(ind,1);
// console.log(arr);
// let final = arr[0]
// for(let i = 0;i < arr.length; i++){if(arr[i] > final){final = arr[i]}};
// console.log(final)


/*==================================== Question No 38 =========================================
find first not repeated character
======================================= Answer =====================================*/

// let word = "aabbcdde";
// for(let i = 0; i < word.length;i++){let times = 0;
//   for(let j= 0; j <word.length;j++){if(word[i]=== word[j])
//   {times = times + 1;}
//   }
//   if(times === 1){console.log(word[i]);
//     break;
//   }
// }


/*==================================== Question No 39 =========================================
find first not repeated letter
======================================= Answer =====================================*/
let word = "aabbcdde";

for(let i = 0; i <word.length;i++){let time = 0;
  for(let j = 0 ; j < word.length;j++){if(word[i]=== word[j]
   
  )
{time = time + 1;}}
if(time === 1){console.log(word[i]);
  break;
}
}


/*==================================== Question No 40 =========================================
some()
======================================= Answer =====================================*/
// const obj = [
//   {id : 1,
//   name : 'Aziz',
//   designation : 'Teacher'
// },
//  {id : 2,
//   name : 'Kashif',
//   designation : 'web developer'
// },
//  {id : 3,
//   name : 'Umer',
//   designation : 'Graphic designer'
// },
//  {id : 4,
//   name : 'Pervaiz',
//   designation : 'web developer'
// }
// ];
// console.log(obj )

// let need = obj.some((item)=>{return item.designation === 'web developer'});
// console.log(need)


/*==================================== Question No 41 =========================================
find()
======================================= Answer =====================================*/
// const obj = [
//   {id : 1,
//   name : 'Aziz',
//   designation : 'Teacher'
// },
//  {id : 2,
//   name : 'Kashif',
//   designation : 'web developer'
// },
//  {id : 3,
//   name : 'Umer',
//   designation : 'Graphic designer'
// },
//  {id : 4,
//   name : 'Pervaiz',
//   designation : 'web developer'
// }
// ];
// console.log(obj )

// let need = obj.find((item)=>{return item.designation === 'web developer'});
// console.log(need)

/*==================================== Question No 42 =========================================
filter()
======================================= Answer =====================================*/
// const obj = [
//   {id : 1,
//   name : 'Aziz',
//   designation : 'Teacher'
// },
//  {id : 2,
//   name : 'Kashif',
//   designation : 'web developer'
// },
//  {id : 3,
//   name : 'Umer',
//   designation : 'Graphic designer'
// },
//  {id : 4,
//   name : 'Pervaiz',
//   designation : 'web developer'
// }
// ];
// console.log(obj )

// let need = obj.filter((item)=>{return item.designation === 'web developer'});
// console.log(need)

/*==================================== Question No 43 =========================================
findIndex()
======================================= Answer =====================================*/

// const obj = [
//   {id : 1,
//   name : 'Aziz',
//   designation : 'Teacher'
// },
//  {id : 2,
//   name : 'Kashif',
//   designation : 'web developer'
// },
//  {id : 3,
//   name : 'Umer',
//   designation : 'Graphic designer'
// },
//  {id : 4,
//   name : 'Pervaiz',
//   designation : 'web developer'
// }
// ];
// console.log(obj )

// let need = obj.findIndex((item)=>{return item.name === 'Kashif'});
// console.log(need);
// obj.splice(need,1);
// console.log(obj);
// // let copy = obj.slice(0,2);
// // let copy = {...obj}
// let copy = JSON.parse(JSON.stringify(obj))
// console.log(copy)


/*==================================== Question No 44 =========================================
forEach()
======================================= Answer =====================================*/
// let fruit = ['apple','banana','guava','orange'];
//  fruit.forEach((item)=>{console.log(item)});

/*==================================== Question No 45 =========================================
split()
======================================= Answer =====================================*/
// let str = 'hello i love learning';
// let array = str.split(' ').length;
// console.log(array)
/*==================================== Question No 46 =========================================
join()
======================================= Answer =====================================*/
// let array = [ 'i','am','going' , 'to','school'];
// let str = array.join(' ');
// console.log(str)

/*==================================== Question No 47 =========================================
starWith()
======================================= Answer =====================================*/
// let fruits = ['banana','grapes','apple','gava'];
// let need = fruits.filter((item)=>{return item.startsWith('g')});
// console.log(need)

/*==================================== Question No 48 =========================================
try catch
======================================= Answer =====================================*/
// try{let num1 = prompt('enter number 1');
//   let num2 = prompt('enter number 2');
//   let ans = num1/num2;
//   if(num2 === '0'){throw 'can not divide by zero'}
//   console.log(ans)
// }
// catch(err){console.log('error: ',err)}
            
/*==================================== Question No 49 =========================================
try catch
======================================= Answer =====================================*/
// try{let age = prompt('enter age');
//   let education = prompt('enter eduction matric/inter');
//   if(age < 18){throw 'you are children'}
//  else if (education !== 'matric'){throw 'your education is less'}
//   console.log('you are eligible')
// }
// catch(err){console.log('err : ' ,err)}

/*==================================== Question No 50 =========================================
try catch
======================================= Answer =====================================*/
// try{let num = 5;
//   console.log(num.toUpperCase())
// }
// catch(error){console.log(error.message)}
// console.log('programm is running')




