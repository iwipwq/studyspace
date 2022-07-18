// const arr = (arg:Array<number>):number[] => {
//     return arg
// }

const arr = <T>(arg: T): T => {
  return arg;
};

const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

interface z1 {
  a: string;
}

type z2 = [1, 2, 3];

const l = last([1, 2, 3]);

const l2 = last<string>(["a", "b", "c"]);

const l3 = last<z1>([{ a: "abcde" }]);

const l4 = last<z2>([[1, 2, 3]]);

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v = makeArr(5, 6);
const v1 = makeArr("a", "b");
const v2 = makeArr(true, 7);
const v3 = makeArr<string | null, number>("a", 5);

// const makeFullName = (obj: { firstName: string; lastName: string }) => {
//   return {
//     ...obj,
//     fullName: obj.firstName + " " + obj.lastName,
//   };
// };

// firstName과 lastName은 반드시 포함시키고 싶을때
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

// const v4 = makeFullName({"firstName":"FIRSTNAME",lastName:"LASTNAME", age: 15}) => {}
const v4 = makeFullName({ firstName: "bob", lastName: "junior", age: 15 });
// const v5 = makeFullName({ another: "bob", lastName: "junior", age: 15 });

v4.age;
v4.fullName;

// interface Tab {
//     id: string;
//     position: number;
//     data: any;
// }
interface Tab<T> {
    id: string;
    position: number;
    data: T;
}

// type NumberTab =  {
//     id: string;
//     position: number;
//     data: number;
// }
type NumberTab = Tab<number>;
type StringTab = Tab<string>;



// type

type People = typeof MyArray;

type PersonIndex = typeof MyArray[number];

type Age = typeof MyArray[number]["age"];

type Age2 = PersonIndex["age"];

type Person = { age: number; name: string; alive: boolean };

type Name = "name" | "age";
type Name1 = "name" | "abc";

type I1 = Person[keyof Person];

// type I2error = Person[Name1]; //'Person' 형식에 'abc' 속성이 없습니다.ts(2339)
type I2 = Person[Name];

type I3 = I2;

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
