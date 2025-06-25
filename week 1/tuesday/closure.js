// // 1
// function creatCounter()
// {
//     let count = 0;
//     return function()
//     {
//         count++;
//         return count;
//     }
// }
// const counter = creatCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// // 2
// function secretHolder(secret)
// {
//     function getSecret()
//     {
//         return secret;
//     };

//     return {getSecret};
// };

// const mySecret = secretHolder("abc");
// console.log(mySecret.getSecret());

// // 3
// function buildFunctions() 
// {
//     const arr = [];
//     for (let i = 0; i < 3; i++)
//     {
//         arr.push(function () 
//         {
//             console.log(i);
//         });
//     }
//     return arr;
// }

// const funcs = buildFunctions();
// funcs[0](); // should print 0
// funcs[1](); // should print 1
// funcs[2](); // should print 2