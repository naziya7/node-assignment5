var http = require("http");

const PORT = 8081;
const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if(req.url === "/welcome"){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("Welcome to Dominos!")
    }
    else if(req.url === "/contact"){
                res.writeHead(200, {'Content-Type': 'text/json'});
                res.write(JSON.stringify({  
                    phone: '18602100000', 
                    email: 'guestcaredominos@jublfood.com' 
           }))       
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write("PAGE IS NOT FOUND")
    }
    res.end();
}

httpServer.listen(PORT, ()=>{
    console.log("server is up");
})
module.exports = httpServer;