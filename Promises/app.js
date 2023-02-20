// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("success");
//   } else {
//     reaject("failed");
//   }
// });

// p.then((message) => {
//   console.log("This is in the then " + message);
// }).catch((message) => {
//     console.log("This is in the catch " + message);
// })

// const something = new Promise((resolve, reject) => {
//     arrival = 9

//     if (arrival == 8 ){
//         resolve("success");
//     }else{
//         reject("failure");
//     }
// })

// something.then((message)=>{
//     console.log("We are on time !" + message);
// }).catch((message)=>{
//     console.log("we are late! " + message);
// })

// let student = new Promise((resolve, reject) => {
//   let wishedGrade = 4;

//   if (wishedGrade >= 5) {
//     resolve("You did it.");
//   } else {
//     reject("try harder");
//   }
// });

// student
//   .then((message) => {
//     console.log(message + " Summer vacation in Bali!");
//   })
//   .catch((message) => {
//     console.log(message + " Working");
//   });

// let payment = new Promise((resolve, reject) => {
//   let sallary = 1000;

//   if (sallary >= 2000) {
//     resolve("You receive your check on time!");
//   } else {
//     reject("You did not receive your check on time!");
//   }
// });

// payment
//   .then((message) => {
//     console.log(message + " Your boss is fair!");
//   })
//   .catch((message) => {
//     console.log(message + " Your boss is not fair!");
//   });

// let Cleaning = new Promise((resolve, reject) => {
//     const hours = 7

//     if (hours < 8){
//         resolve("Success!");
//     }else {
//         reject("Failed");
//     }
// });

// Cleaning.then((message) => {
//     console.log(message + " - cleaned successfully!");
// }).catch((message) => {
//     console.log(message + " - couldn't cleaned successfully!");
// })

// let Repair = new Promise((resolve, reject) => {
//   const budget = 2000;
//   const expenses = 2900;

//   if (expenses <= budget) {
//     resolve("Success!");
//   } else {
//     reject("Failure!");
//   }
// });

// Repair.then((message) => {
//   console.log(message + " Repair is been made!");
// }).catch((message) => {
//   console.log(message + "Repair is not been made!");
// });
