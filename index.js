const fs = require('fs');
const http = require('http');
const url = require('url');

////////////////////////

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado ${textIn}. \nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log("File written!");

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log("file has been written")
//             });
//         });
//     });
// });
// console.log('will read file!')
////////////////////////////////////////////////
///////////SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => { 
});

const dataObject = JSON.parse(data);


const server = http.createServer((req, res) => {
    console.log(req.url)
    const pathName = req.url
    if(pathName === '/' || pathName === '/overview'){
        res.end('this is the overview')
    }
    else if(pathName === '/api'){
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(data)
    }
    else if (pathName === '/product'){
        res.end('this is the product')
    }
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        res.end('<h1>Page not found</h1>')
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests')
})

