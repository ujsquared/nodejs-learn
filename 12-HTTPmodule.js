//we'll use an abstraction over http module, => expressJS OwO
const http = require('http')
// btw not https, cuz security hamei dalni pdegi
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
    res.end("Welcome to our home page")
    }
    else if(req.url === '/about'){
    res.end('Here is our short history')
    }
    res.end(`<h1>Oops!</h1>
        <p> Cant seem to find the page you are looking for </p>
        <a href = "/">back home </a>`)
}) //2 obejcts as parameter
server.listen(5000)
