import * as http from 'http';

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    const data = JSON.stringify([
        {ciudad:"Pergamino", temp:29},
        {ciudad:"Montevideo", temp:12}
    ]);
    
    res.setHeader("Content-Type", "application/json");
    switch(req.url){
        case "/clima":
            res.writeHead(200);
            res.end(data);
            break
    }
    
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
