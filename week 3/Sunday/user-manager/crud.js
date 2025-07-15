import fs from 'fs/promises';
import path from 'path';


const filePath = path.join(".", "users.txt")


function create() {};
function read(path) {
    if (fs.stat(filePath))
};
function update() {};
function deleteById() {};