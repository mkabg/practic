// // 1
// function doubleValues(arr)
// {
//     const doubled = arr.map(num => num * 2)
//     return doubled;
// }

// console.log(doubleValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// // 2
// function onlyEvenValues(arr)
// {
//     // const even = arr.map(num => num % 2 === 0 ? num : undefined).filter(num => num % 2 === 0)

//     const even = []
//     arr.forEach(num => 
//         {
//             if (num % 2 === 0)
//                 even.push(num);
//         });
//         return even;
// }
// console.log(onlyEvenValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//// 3
// function showFirstAndLast(arr)
// {
//     const firstAndLast = [];
//     if (typeof arr[0] === "string")
//     {
//         firstAndLast.push(arr[0]);
//     }
//     if (typeof arr[arr.length - 1] === "string")
//     {
//         firstAndLast.push(arr[arr.length - 1]);
//     }
//     return firstAndLast;
// } 
// console.log(showFirstAndLast([ 5, 5, 5]));

// // 4
// function vowelCount(str)
// {
//     const  count = {"a": 0, "e": 0, "i": 0, "o": 0, "u": 0};

//     [...str.toLowerCase()].forEach(char => 
//     {
//         switch (char)
//         {
//             case "a":
//                 count["a"] ++;
//                 break;

//             case "e":
//                 count["e"] ++;
//                 break;

//             case "i":
//                 count["i"] ++;
//                 break;

//             case "o":
//                 count["o"] ++;
//                 break;

//             case "u":
//                 count["u"] ++;
//                 break;
//         }
//     }
//     )
//     return count;
// }
// console.log(vowelCount("abcaeAiuo"));

// 5
function capitalize(str)
{
    return str.toUpperCase();
}
console.log(capitalize("abc"));

// // 6
// function shiftLetters(str)
// {
//     let encrypted = "";
//     for (let char of str)
//     {
//         if (char >= 'a' && char <= 'z')
//         {
//             encrypted += char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
//         }
//         else if (char >= 'A' && char <= 'Z')
//         {
//             encrypted += char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
//         }
//         else
//         {
//             encrypted += char;
//         }
//     }
//     return encrypted;
// }
// console.log(shiftLetters("abc"));

// // 7
// function swapCase(str)
// {
//     const cap = [];
//     const words = str.split(" ");
//     for (let i = 0; i < words.length; i++)
//     {
//         if (i === 0)
//         {
//             cap.push(words[i]);
//         }
//         else 
//         {
//             cap.push(capitalize(words[i]))
//         }
//     }
//     return cap.join(" ");
// }

// console.log(swapCase("abc def ghi"));