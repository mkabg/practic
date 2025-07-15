import {URL} from 'url';

const myUrl = new URL('http://localhost:3000/serch?term=nodejs&limit=10');
// console.log(myUrl.pathname);
// console.log(myUrl.searchParams.get('term'));
// myUrl.searchParams.forEach(req => {
//     console.log(req);
// })

function logUrlParts(url) {
    console.log('Host name:', url.hostname);
    console.log('Path name:', url.pathname);
    console.log('Protocol:', url.protocol);
    console.log('Search parameters:');
    myUrl.searchParams.forEach((value, key) => {
    console.log(`${key}: ${value}`);
    })
    console.log('Fragment:', url.hash);
}

const urlStr = 'http://localhost:3000/users/list?role=admin&active=true#top';
logUrlParts(urlStr)