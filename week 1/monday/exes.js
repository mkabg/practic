// // 1 
// let a = "mordechai";
// let b = "kaufman";
// console.log(a, b);
// [a, b] = [b, a]
// console.log(a, b);

// // 2
// const matrix = [
//   ["X", "o", "x", "X", " "],
//   ["x", "X", "x", "o", "X"],
//   ["o", " ", "x", "X", "x"],
//   ["X", "x", "x", "o", " "],
//   ["o", "X", " ", "x", "X"]
// ]
// let indexMetrix = []
// for (let i = 0; i < matrix.length; i++)
// {
//     for (let j = 0; j < matrix[i].length; j++)
//     {
//         if (matrix[i][j] === "X")
//         {
//             indexMetrix.push([i, j])
//         }
//     }
// }
// console.log(indexMetrix);

// // 3
// const family =
// {
//     parents: {},
//     children: 
//   [
//     { name: "Ali" },
//     { name: "Lea" },
//     { name: "Mona" }
//   ]
// };
// console.log(family.children[2]);
// let names = "";
// for (let i = 0; i < family.children.length; i++)
// {
//   names += family.children[i].name + " ";
// }
// console.log(names);

// // 4
// function reverse(array)
// {
//   let reversed = [];
//   for (let i = array.length - 1; i >= 0; i--)
//   {
//     reversed.push(array[i])
//   }
//   return reversed;
// }
// console.log(reverse([1, 2, 3, 4, 5]));

// // 5
// const arr = [1, "hello", true, null, { name: "Moshe" }, false, "world", 42, null];

// let countNum = 0;
// let countStr = 0;
// let countBool = 0;
// let countObject = 0;
// let countNull = 0;

// arr.forEach((value) => 
//     {
//         if (value ==  null)
//         {
//             countNull++;
//         }
//         else
//         {
//             switch (typeof value)
//             {
//                 case "number":
//                     countNum++;
//                     break;
                
//                 case "string":
//                     countStr++;
//                     break;

//                 case "boolean":
//                     countBool++;
//                     break;

//                 case "object":
//                     countObject++;
//                     break;
//             }
//         }
//     });

// console.log("Numbers:", countNum);
// console.log("Strings:", countStr);
// console.log("Booleans:", countBool);
// console.log("Objects:", countObject);
// console.log("Nulls:", countNull);

// // 6
// const numbers = [50, 120, 30, 200, 105];
// let biggerThen100 = [];
// let countLoop = 0;
// numbers.forEach((value) =>
// {
//     if (value > 100)
//     {
//         biggerThen100.push(value)
//     }
//     countLoop++;
// });
// console.log(biggerThen100, countLoop);

// // 7
// let even = [];
// let odd = [];

// for (let i = 1; i <= 50; i++)
// {
//     if (i % 2 === 0)
//     {
//         even.push(i);
//     }
//     else
//     {
//         odd.push(i);
//     }
// }
// console.log(`the even array is ${even} \nand the num element is ${even.length}\n the odd array is ${odd} \n and the num element is ${odd.length}`);

// // 8
// let matrix = 
// [
//     ["", "", ""],
//     ["", "", ""],
//     ["", "", ""]
// ];

// for (let i = 0; i < matrix.length; i++)
// {
//     for (let j = 0; j < matrix[i].length; j++)
//     {
//        if (i === j) 
//        {
//             matrix[i][j] = "#";
//        }
//        else if (i + j === matrix.length - 1)
//        {
//             matrix[i][j] = "#";
//        }
//     }
// }
// matrix.forEach(row => console.log(row));

// // 9
// const str = "fejshjcdghk gwhskdsjh";
// const counterLetters = {};
// for (const char of str)
// {
//     if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))
//     {
//         if (char in counterLetters)
//         {
//             counterLetters[char]++;
//         }
//         else
//         {
//             counterLetters[char] = 1;
//         }
//     }
// }
// console.log(counterLetters);

// // 10
// function FlatteningMatrix(matrix)
// {
//     const arr = [];
//     matrix.forEach(matrix => 
//     {
//         matrix.forEach(num =>
//         {
//             if (num > 0)
//             {
//                 arr.push(num);
//             }
//         })    
//     });
//     return arr;
// }
// console.log(FlatteningMatrix([[1, 2], [-1, 5]]));

// 11