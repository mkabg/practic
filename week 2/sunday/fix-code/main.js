// 1
import { greetUser } from "./export.js";

greetUser(Alice);
greetUser(Bob);
greetUser(Alice); // Should say: Welcome back, Alice!;


// // 2
// import { calculateDiscount } from "./export.js";

// console.log(calculateDiscount(150)); // Expect: 135
// console.log(calculateDiscount(15)); // Expect: 15
// console.log(calculateDiscount(50)); // Expect: 47.5

// // 3
// import { getPendingTasks, tasks } from "./export.js";
// const completed = getPendingTasks(tasks);
// completed.forEach(obj => console.log(`id: ${obj.id} title: ${obj.title} completed: ${obj.completed}`));