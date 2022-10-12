var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/stocks", function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    }
    )

    stockCount(res, 101);
})

function stockCount(res, stockPrice) {
    res.write("data: " + stockPrice + "\n\n")
    const rndNumber = Math.round(Math.random() * 10) + 1
    if (rndNumber > 5) {
        setTimeout(function () {
            stockCount(res, stockPrice + rndNumber)
        }, (rndNumber / 2) * 1000)
    } else {
        setTimeout(function () {
            stockCount(res, stockPrice - rndNumber)
        }, rndNumber * 1000)
    }
}


app.listen(9000, function () { console.log("SSE Server started at PORT : 9000") })

// http://localhost:9000/stocks