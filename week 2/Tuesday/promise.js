import { ALL } from "dns";
import fs from "fs";
import path from "path";


// // 1
// function delayGreet(name, delay){
//     return new Promise((res) => {
//     setTimeout(() => {
//         res(`hello: ${name}`);
//     }, delay);
// })
// }
// delayGreet("mordechai", 2000).then((res) => {
//     console.log(res);
// })

// // 2
// function readFileContent(path){
//     return new Promise((res, rej) => {
//         fs.readFile(path, "utf-8", (err, data) => {
//             if (err){
//                 rej(err);
//             }
//             res(data);
//         })
//     })
// }
// readFileContent(path.join(".", "db.txt")).then(res => {
//     console.log(res);
// }).catch(rej => {
//     console.log(rej);
// })

// // 3
// function randomOperation(){
//     const option = ["success!", "failure!"];
    
//     const random = option[Math.floor(Math.random() * option.length)];
//     return new Promise((res, rej) => {
//         if (random === "success!"){
//             res(random);
//         }
//         rej(random);
//     })
// }

// randomOperation().then(res => {
//     console.log(res);
// }).catch(rej => {
//     console.log((rej));
// })

// // 4
// function timerRace(time1, time2){
//     return new Promise((res) => {
//         setTimeout(() => {
//             res("timer A finished")
//         }, time1);
//         setTimeout(() => {
//             res("timer B finished")
//         }, time2);
//     })
// }

// timerRace(200, 300).then(res => {
//     console.log(res);
// })

// 5

// // 6
// function waitAll(){
//     const p1 = Promise.resolve("first");
//     const p2 = new Promise((res) => {
//         setTimeout(() => {
//             res("second")
//         }, 100);})
//     const p3 = 200;
//     return Promise.all([p1, p2, p3]).then(res => {
//         console.log(res);
//     })
// }
// waitAll()

// // 7
// function checkFileExists(path){
//     return new Promise((res, rej) => {
//         if (fs.existsSync(path)){
//             res("true")
//         }
//         rej("false")
//     })
// }
// checkFileExists(path.join(".", "db.txt")).then(res => {
//     console.log(res);
// }).catch(rej => {
//     console.log(rej);
// })

// 8
