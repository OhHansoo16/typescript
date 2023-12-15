// // Generics型: <string>みたいなやつ
// // const names: Array<any> = []; //string[]
// // // names[0].split(" ");

// // const promise: Promise<string> = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("終わりました！");
// //   }, 2000);
// // });

// function merge<T extends {}, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: "Max" }, { age: 20 });
// console.log(mergedObj.age);

// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = "値がありません。";
//   if (element.length > 0) {
//     descriptionText = "値は" + element.length + "個です。";
//   }
//   return [element, descriptionText];
// }

// console.log(countAndDescribe(["Sports", "Cooking"]));

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return "Value: " + obj[key];
// }

// extractAndConvert({ name: "Max" }, "name");

// class DataStorage<T extends string | number | boolean> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) {
//       return;
//     }
//     this.data.splice(this.data.indexOf(item), 1); // 要素が見つからないとき、-1
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem("Data1");
// textStorage.addItem("Data2");
// textStorage.removeItem("Data1");
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();

// // const ojbStorage = new DataStorage<object>();

// // const obj = {name: "Max"};

// // ojbStorage.addItem(obj);
// // ojbStorage.addItem({name: "Manu"});

// // ojbStorage.removeItem(obj);
// // console.log(ojbStorage.getItems());

// interface CourseGoal {
//   title: string;
//   description: string;
//   completeUntil: Date;
// }

// function createCourseGoal(
//   title: string,
//   description: string,
//   date: Date
// ): CourseGoal {
//   let courseGoal: Partial<CourseGoal> = {};
//   courseGoal.title = title;
//   courseGoal.description = description;
//   courseGoal.completeUntil = date;
//   return courseGoal as CourseGoal;
// }

// const names: Readonly<string[]> = ["Max", "Anna"];