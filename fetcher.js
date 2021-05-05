const fs = require("fs");
const request = require("request");
const argv = process.argv.slice(2);

request(argv[0], (error, response, body) => {
  fs.appendFile(argv[1], body, function (err) {
    if (err) throw err;
    console.log(`Downloaded and saved 3261 bytes to ${argv[1]}`);
  });
});
