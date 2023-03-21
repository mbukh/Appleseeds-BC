import http from "http";
import fs from "fs";

http.createServer((req, res) => {
    if (req.method !== "GET") {
        res.statusCode = 405;
        res.end();
        return;
    }

    switch (req.url) {
        case "/users":
            fs.readFile(`users.json`, (err, data) => {
                if (err) {
                    res.statusCode = 500; // Internal Server Error
                    res.end();
                    return;
                }
                res.setHeader("Content-Type", "application/json");
                res.end(data);
            });
            break;
        case "/":
            fs.readFile(`index.html`, (err, data) => {
                if (err) {
                    res.statusCode = 500; // Internal Server Error
                    res.end();
                    return;
                }
                res.setHeader("Content-Type", "text/html");

                res.end(data);
            });
            break;
        case "/index.css":
            fs.readFile(`index.css`, (err, data) => {
                if (err) {
                    res.statusCode = 500; // Internal Server Error
                    res.end();
                    return;
                }
                res.setHeader("Content-Type", "text/css");

                res.end(data);
            });
            break;
        case "/index.js":
            fs.readFile(`index.js`, (err, data) => {
                if (err) {
                    res.statusCode = 500; // Internal Server Error
                    res.end();
                    return;
                }
                res.setHeader("Content-Type", "application/javascript");

                res.end(data);
            });
            break;
        case "/raw-html":
            res.setHeader("Content-Type", "text/html");
            res.end("<H1>Welcome</H1>");
        default:
            break;
    }
}).listen(8080, () => {
    console.log("Server running on port 8080");
});
