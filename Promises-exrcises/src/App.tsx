// import "./App.css";

// function App() {
//   class Person {
//     private readonly _name: string;

//     constructor(name: string) {
//       this._name = name;
//     }

//     set name(name: string) {
//       this._name = name;
//     }

//     get name() {
//       return this._name;
//     }
//   }

//   const person = new Person("Bobo");
//   person.name = "Tosho";

//   console.log(person);

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   const array: (number | string)[] = [5, "gosho", null];

//   console.log(array);

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {

//   const array: (number |null)[] = [5, 2, 7, "sea", null, undefined];

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   interface Course {
//   title: string;
//   subtitle: string;
//   lessonsCount: number;
// }

// const course: Partial<Course> = {
//   title: "Learning TS",
//   subtitle: "Course on TS",
// };

// console.log(course);
//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   interface HasId {
//     id: string;
//     printId: () => void;
//   }

//   interface HasTitle extends HasId {
//     title: string;
//   }

//   const hasTitleAndId: HasTitle = {
//     id: +1,
//     title: "TestTitle",
//     printId: () => {},
//   };
//   console.log(hasTitleAndId);

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   type Person = {
//     fistName:string,
//     lastName:string,
//   }

//   type Vehicle = {
//     color: string
//   }

//   const array: Person | Vehicle[] = [
//     {firstName: "John", lastName: "Doe"},
//     {color:red}
//   ]
//   console.log(array);

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   const role: "SUPER_ADMIN" | "ADMIN" = "USER";
//   console.log(role);

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//  const array: [string, number] = ["string", 1];
//   console.log(array);

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   type Person = {
//     firstName: string;
//     lastName: string;
//   };

//   type Swimmer = {
//     swim: () => string;
//   };

//   type SwimmingPerson = Person & Swimmer;

//   const josh: SwimmingPerson = {
//     firstName: "Josh",
//     lastName: "Johnson",
//     swim: () => "I swim",
//     walk: () => "I walk",
//   };

//   console.log(josh);

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   const logName = (name:string):string => console.log(`Your name is ${name}`);
//   logName("Gosho")

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   type Person = {
//     name: string;
//     doSomething(): void;
//   }

//   const person: Person = {
//     name:"Pesho",
//     doSomething :():void => {
//       return "do something"
//     }
//   }

//   console.log(person.doSomething());

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   type Person = {
//     name: string;
//     doSomething(): void;
//   }

//   const person: Person = {
//     name:"Pesho",
//     doSomething :():void => {
//       return "do something"
//     }
//   }
// }
//   console.log(person.doSomething());

// import "./App.css";

// function App() {
//   const logName = (name:string):string => console.log(`Your name is ${name}`);
//   logName("Gosho")

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   function Car() {
//     this.brand = "Lamborghini";
//   }

//   console.log(Car());
//   console.log(new Car());

//   const Boat = () => {
//     this.brand = "Ocean";
//   };

//   console.log(Boat());
//   console.log(new Boat());

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   let employee = {
//     id: 1,

//     greet: function () {
//       console.log(this);
//     },

//     cry: () => {
//       console.log(this);
//     },
//   };

//   employee.greet();
//   employee.cry();

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   class Person {
//     public static NUMBER_OF_PEOPLE: number = 0;

//     private _firstName: string;
//     private _lastName: string;

//     public constructor(firstName: string, lastName: string) {
//       this._firstName = firstName;
//       this._lastName = lastName;

//       Person.NUMBER_OF_PEOPLE++;
//     }

//     public get firstName(): string {
//       return this._firstName;
//     }

//     public set firstName(value: string) {
//       if (!value || value.length < 2 || value.length > 20) {
//         throw new Error("The first name should be between 2 and 20 characters");
//       }

//       this._firstName = value;
//     }

//     public work(): void {
//       console.log("Working...");
//     }
//   }

//   const pedro = new Person("pedro", "Peshov");
//   const josho = new Person("josho", "Peshov");
//   const pesho = new Person("Pesho", "Peshov");

//   console.log(Person.NUMBER_OF_PEOPLE);

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {

//   class Employee{
//     employeeCode:number;
//     employeeName:string;

//     constructor(code : number, name:string){
//       this.employeeCode = code;
//       this.employeeName = name;
//     }

//     getSalary():number{

//       return 10000;
//     }

//   }
//   console.log(Employee.getSalary);

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   function fn() {
//     return this;
//   }

//   console.log(fn.bind({ test: "test" })());
//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   const obj = {
//     walk: () => {
//       return console.log(this);
//     },
//   };

//   obj.walk();

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   // function expression referencing THIS in an object:
//   const user = {
//     firstName: "Gosho",
//     lastName: "Goshov",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     },
//   };

//   console.log(user.fullName());

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   const user = {
//     firstName: "Gosho",
//     lastName: "Goshov",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     },
//   };

//   console.log(user.fullName.bind({ firstName: "Pesho", lastName: "Peshov" })());

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   const log = function () {
//     return function () {
//       console.log(this.text);
//     };
//   };

//   const bindedLog = log.bind({ text: "hello" });

//   bindedLog()();

// with an arrow function:
// const log = function () {
//   return () => {
//     console.log(this.text);
//   };
// };

// const bindedLog = log.bind({ text: "hello" });

// bindedLog()();
//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   function saveCourse(course, callback: Function) {
//     this.course = course;

//     setTimeout(() => {
//       callback(this.course?.title ?? "unknown");
//     }, 1000);
//   }

//   const callback = (title: string) => console.log("successful", title);

//   saveCourse({ title: "TS" }, callback);
//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   const concatObjects = <T, R>(obj1: T, obj2: R): T & R => {
//     return {
//       ...obj1,
//       ...obj2,
//     };
//   };

//   console.log(
//     concatObjects({ name: "Pesho", age: 23 }, { wheels: 4, maxSpeed: 200 })
//   );
//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   function freeze<T extends object>(input: T): Readonly<T> {
//     return Object.freeze(input);
//   }

//   const frozenUser = freeze({ firstName: "gosho", lastName: "goshov" });
//   frozenUser.age = 23;

//   const frozenNumber = freeze(33);

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   class List<T> {
//     private readonly buffer: T[] = [];
//     public add(item: T): void {
//       this.buffer.push(item);
//     }
//     public remove(item: T): void {
//       const index = this.buffer.findIndex((x) => x === item);
//       this.buffer.splice(index, 1);
//     }
//   }

//   const list = new List<number | string>();
//   list.add("hello");
//   list.add(2);

//   console.log(list);

//   return <div className="App">Hello</div>;
// }

// export default App;

// import "./App.css";

// function App() {

//   const getProperty = <T>(object: T, key: keyof T): T[keyof T] => {
//     return object[key];
//   };
  
//   const obj = {
//     name: "Hello!",
//     age: 15,
//   };
  
//   const res = getProperty(obj, "age");
//   console.log(res);
  
//   return <div className="App">Hello</div>;
// }

// export default App;