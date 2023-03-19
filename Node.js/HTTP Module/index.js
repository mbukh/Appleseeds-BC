const http = require("http");
const axios = require("axios");

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/cats") {
        const options = {
            url: "https://catfact.ninja/fact",
            method: "GET",
        };

        axios(options)
            .then((response) => {
                const facts = response.data;
                const length = facts.length;
                const fact = facts.fact;
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end(`Fact: ${fact} \nThe Cats fact is ${length} characters long`);
            })
            .catch((error) => {
                console.error(error);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("An error occurred while retrieving the cats fact");
            });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found - only /cats exist");
    }
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});
