import fs from "fs";
import path from "path";

import readlineSync from 'readline-sync';


const file = path.join(".", "./db.txt");
function getUserName()
{
    let userName = readlineSync.question("enter your name")
    return userName;
}
console.log(getUserName);


// C
function Create(user) {
    if (!fs.existsSync(file)) {
        fs.writeFile(file, user, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(`write sucses`);
        })
        return;
    }
    Read((data) => {
        const users = data.split("\n");
        console.log(users);
        if (users.includes(user)) {
            console.log(`user exist`);
            return;
        }
        fs.appendFile(file, "\n" + user, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(`append to file success`);
        })
    });
}

// R
function Read(callback) {
    fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`load data succsess`);
        callback(data);
    });
}

// U
function Update(user, newName) {
    Read((data) => {
        const users = data.split("\n");
        console.log(users);
        if (!users.includes(user)) {
            console.log(`usern ot exist`);
            return;
        }
        Delete(user);
        Create(newName);
    });
}

// D
function Delete(user) {
    const textToDelete = user;

    fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const modifiedData = data.replaceAll(textToDelete, ''); // Remove all occurrences

    fs.writeFile(file, modifiedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log(`"${textToDelete}" successfully deleted from ${file}.`);
        });
    });
}

Create("david")
