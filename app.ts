const getProperty = <aaa>(object: aaa, key: keyof aaa): aaa[keyof aaa] => {
  return object[key];
};

const obj = {
  name: "Hello!",
  age: 15,
};

const res = getProperty(obj, "age");
console.log(res);