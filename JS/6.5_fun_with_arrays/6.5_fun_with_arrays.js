// 1. מלא מערך ב-100 אובייקטים זהים עם מתודת Array.fill.
const arr = new Array(100).fill({ name: "Appleseeds", value: "oneLove" });
console.log(arr[0]);

// 2. צור מערך עם מספרים בין 1-100 עם מתודת Array.from.
let i = 1;
const newArr = Array.from(arr, (el) => i++);
console.log(newArr);

// 3. המר רק values של אובייקט למערך אחד.
const obj = { name: "Appleseeds", value: "oneLove" };
const objArr = Object.values(obj);
console.log(objArr);

// 4. המר מערך לאובייקט אחד.
const arrToObj = ["a", "b", "c", 1, 2, 3, true];
const objFromArr = Object.assign({}, arrToObj);
console.log(objFromArr);

// 5. בררו אם מערך הוא מערך.
Array.isArray(arr);
Array.isArray(newArr);
Array.isArray(obj);
Array.isArray(objArr);
Array.isArray(arrToObj);
Array.isArray(objFromArr);

// 6. העתיקו מערך:

// ● צרו עותק של מערך שלא ישפיע על המערך המקורי אם ישונה.
const originalArray = [1, 2, 3];
const newArray1 = [...originalArray];
console.log(newArray1);

// ● צרו עותק של מערך שישפיע על המערך המקורי אם ישונה.
const newArray2 = originalArray.slice();
const newArray3 = newArray2;
newArray3.shift();
newArray3.pop();
console.log(newArray2);
console.log(newArray3);
