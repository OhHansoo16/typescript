// // 交差型: & を用いることで、そのどちらのプロパティも扱うことができる(どちらの型も扱わなければならない)
// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: "Max",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// // 関数オーバーロード:戻り値が分からないときに使う
// function add2(a: number, b: number): number;
// function add2(a: string, b: string): string;
// function add2(a: string, b: number): string;
// function add2(a: number, b: string): string;
// function add2(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// const result = add2("Hello", "Typescript");
// result.split("  ");


// // オプショナルチェイン: ネストされたプロパティに安全にアクセスできる
// const fetchedUserData = {
//   id: "u1",
//   name: "user1",
//   job: {
//     title: "Developer",
//     description: "TypeScript",
//   },
// };

// // &&の前がnilだった時、後ろのコードは実行されない
// console.log(fetchedUserData.job && fetchedUserData.job.title);

// console.log(fetchedUserData?.job?.title);

// // NULL合体演算子: ??のことで、空文字列や0を保持したいときに使われる
// const userInput = '';

// const storedData = userInput ?? "DEFAULT";

// console.log(storedData);


// // 型ガード: どの型がどのプロパティを持っているか判断する
// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("startDate: " + emp.startDate);
//   }
// }

// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log("運転中...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("トラックを運転中...");
//   }
//   loadCargo(amount: number) {
//     console.log("荷物を載せています..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// // 判別可能なUnion型: 同じプロパティを持たせることで判別可能にする
// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("移動速度: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// //  型キャスト: typescriptはHTMLのどの要素かまでは特定できないため、どの要素であるかを指定することができる
// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// const userInputElement = document.getElementById(
//   "user-input",
// )! as HTMLInputElement;

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "こんにちは";
// }

// userInputElement.value = "こんにちは";

// //index型
// interface ErrorContainer { // { email: "正しいメールアドレスではありません", username: "ユーザー名に記号を含めることはできません"}
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "正しいメールアドレスではありません",
//   username: "ユーザー名に記号を含めることはできません",
// };