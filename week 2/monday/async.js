import fs from "fs";
import path from "path";
import os from "os";

const file = path.join(".", "myfile.txt");

// // 1
// fs.readFile("./myfile.txt", 'utf-8', (err, data) => 
// {
//     if (err)
//     {
//         console.log(`error reading file`, err);
//         return;
//     }
//     fs.stat("myfile.txt", (err, stats) =>
//     {
//         if (err)
//         {
//             console.log(`error`, err);
//         }
//         console.log(`file size: ${stats.size} bytes`);
//         console.log(`create at: ${stats.birthtime}`);
//     })
// })

// // 2
// const directory = path.join(".", "week 2");
// fs.readdir(directory, {withFileTypes: true}, (err, dirents) =>
// {
//     if (err)
//     {
//         console.log(`error`, err);
//         return;
//     }
//     const files = dirents
//         .filter(dirent => dirent.isFile())
//         .map(dirent => dirent.name);

//     console.log(`files in directory: ${files} `);
// })

//// 3
// function countdown(i)
// {
//     if (i < 0) 
//     {
//         console.log("time up");
//         return;
//     }

//     console.log(i);
//     setTimeout(()=> 
//     {
//         countdown(i - 1);
//     }, 1000)
// }

// countdown(5);

// // 4
// fs.readFile(path.join(".", "myfile.txt"), "utf-8", (err, data) =>
// {
//     if (err)
//     {
//         console.log(`error ${err}`);
//         return;
//     }

//     const arr = data.split("\n").filter(line =>line.length > 1)
//     console.log(arr);
    
//     console.log(arr[Math.floor(Math.random() * arr.length)]);
// })

// // 5
// function freeMemory(i)
// {
//     if (i < 0) 
//     {
//         console.log("Memory logging complete.");
//         return;
//     }

//     const total = os.totalmem();
//     const free = os.freemem();
//     const percent = ((free / total) * 100).toFixed(2);
//     console.log(os.freemem());
    
//     console.log(`free memory: ${percent}%`);
    
//     setTimeout(() => 
//     {
//         freeMemory(i - 1);
//     }, 2000)
// }
// freeMemory(5)

// // 6
// fs.appendFile(file , "hi every one\n", (err) => 
// {
//     if (err)
//     {
//         console.error(`error appending to file ${err}`);
//         return;
//     }
//     console.log("appending sucses");
// });

// // 7
// const newfolder = path.join(".", "backup");
// fs.mkdir(newfolder, (err) =>
// {
//     if (err)
//     {
//         console.error(`Folder already exists.`);
//         return;
//     }
//     console.log(`Folder created successfully.`);
// })

// // 8
// const filetodelete = "D:/Users/User/Documents/mordechai/kodcode/idf/training/full stack/js/practic/week 2/1.txt";

// fs.unlink(filetodelete, (err) =>
// {
//     if (err)
//     {
//         console.error("File not found.");
//         return;
//     }
//     console.log("file deleted");
// })

// 9
