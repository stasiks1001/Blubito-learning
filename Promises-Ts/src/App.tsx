// import "./App.css";

// function App() {
//   const onePromise = new Promise<string>((resolve, reject) => {
//     resolve("Hello World!");
//     reject(new Error('failed'));
//   });
//   onePromise
//     .then((value) => {
//       console.log("resolved", value);
//     })
//     .catch((error) => {
//       console.log("rejected", error);
//     });
//   return <div className="App">{}</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   const promise = new Promise((resolve, reject) => {
//     resolve(12);
//   });
//   promise.then((res)=>{
//     console.log("I am Stani", res === 12 );
//   })
//   promise.catch((error) => {

//   })
//   return <div className="App">{}</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   const RandomInt = (): string => {
//     return (Math.random() * 10).toFixed(0);
//   };
//   const findEven = new Promise<number>((resolve, reject) => {
//     setTimeout(function (): void {
//       const value = parseInt(RandomInt());

//       if (value % 2 == 0) {
//         resolve(value);
//       } else {
//         reject("Odd number found!");
//       }
//     }, 5000);
//   });

//   findEven
//     .then((value) => {
//       console.log("resolved-1:", value + 1);
//       return `${value + 1}`;
//     })
//     .then((value) => {
//       console.log("Resolved-2:", value + 1);
//     })
//     .then((error) => {
//       console.log("Rejected:", error);
//     })
//     .finally(() => {
//       console.log("Completed!");
//     });

//   return <div className="App">{}</div>;
// }

// export default App;

import "./App.css";

function App() {
  const goPromise = (
    value: number,
    delay: number,
    fail: boolean
  ): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => (fail ? reject(value) : resolve(value)), delay);
    });
  };

  const totalPromise = Promise.all<number>([
    goPromise(0, 0, false),
    goPromise(1, 4000, false),
    goPromise(2, 2000, false),
  ]);

  console.time("Settled-in");
  totalPromise.then((value) => {
    console.log("resolved: ", value);
  }).catch((err) => {
    console.log("rejected: ", err);
  }).finally(() => {
    console.timeEnd("settled-in");
    
  })

  return <div className="App">{}</div>;
}

export default App;
