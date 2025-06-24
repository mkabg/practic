// // 1
// let num = 45632;
// let sum =0;
// while (num > 0)
// {
//     const i = num % 10;
//     sum += i;
//     // num = Math.floor(num / 10);
//     num = (num / 10) | 0;
// }
// console.log(sum);

// // 2
// const num = 7;
// for (let i = 0; i <= num;)
// {
//     console.log("*".repeat(i));
//     i++;
// }

// // 3
// const num1 = 11;
// const num2 = 12;
// const num3 = 13;
// const num4 = 14;
// const num5 = 15;
// console.log(Math.max(num1, num2, num3, num4, num5));

// // 4
// const num = 56856982;
// const str = String(num);
// console.log(str.length);

// // 5
// let start = 45;
// const end = 4855;
// for (start; start <= end;)
// {
//     if (start % 2 == 0)
//     {
//         console.log(start);
//     }
//     start++;
// }

// // 6
// let num = 4586;
// let reverse = '';
// while (num > 0)
// {
//     process.stdout.write((num % 10).toString());
//     reverse += (num % 10) 
//     num = Math.floor(num / 10)    
// }

// //  7
// for (let i = 1; i < 6; i++)
// {
//     const space = " ".repeat(5 - i);
//     const numbers = `${i}`.repeat(2 * i - 1);
//     console.log(space + numbers);
// }

// // 8
// const num = 785;
// const reverse = parseInt(num.toString().split("").reverse().join(""));
// console.log(num === reverse);

// // 9
// const num = 12
// for (let i = 1; i <= num; i++)
// {
//     console.log(`${num} * ${i} = ${num * i}`);
// }

// // 10
// let num = 58;
// let count = 0;
// while (num > 1)
// {
//     if (num % 2 === 0)
//     {
//         num = (num / 2) | 0;
//         console.log("num = num / 2: " + num);
//     }
//     else
//     {
//         num = num * 3 + 1;
//         console.log("num = num * 3 + 1: " + num);
//     }
//     count += 1;
// }
// console.log(`num of loop ${count}`);
