const request = require("request");

request(
  "https://api.thecatapi.com/v1/breeds/search?=beng",
  {},
  (error, response, data) => {
    try {
      const res = JSON.parse(data);

      if (res.length === 0) {
        console.log("No cats found...");
        return;
      }

      console.log(res);
    } 
    
    catch {
      console.error(error.message);
    }
  }
);
