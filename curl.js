// https://www.scrapingbee.com/curl-converter/javascript-fetch/

//I want to make a request..This is the curl request

// curl --location --request POST '2.2.2.22:343/sudun/cars' \
// --header 'Authorization: Bearer sdswmaiqwasae*********' \
// --header 'Content-Type: application/json' \
// --data-raw '{
//     "user": "sdsffwefwefwssdsds",
//     "numberofunits": 4,
//     "price": 0
// }'

//

fetch("http://2.2.2.22:343/sudun/cars", {
  method: "POST",
  headers: {
    Authorization: "Bearer sdswmaiqwasae*********",
    "Content-Type": "application/json",
  },
  // body: '{\n    "user": "sdsffwefwefwssdsds",\n    "numberofunits": 4,\n    "price": 0\n}',
  body: JSON.stringify({
    user: "sdsffwefwefwssdsds",
    numberofunits: 4,
    price: 0,
  }),
});

//

const response = await axios.post(
  "http://2.2.2.22:343/sudun/cars",
  // '{\n    "user": "sdsffwefwefwssdsds",\n    "numberofunits": 4,\n    "price": 0\n}',
  {
    user: "sdsffwefwefwssdsds",
    numberofunits: 4,
    price: 0,
  },
  {
    headers: {
      Authorization: "Bearer sdswmaiqwasae*********",
      "Content-Type": "application/json",
    },
  }
);

//

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer sdswmaiqwasae*********");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  user: "sdsffwefwefwssdsds",
  numberofunits: 4,
  price: 0,
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("2.2.2.22:343/sudun/cars", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

var encryptor = require("file-encryptor");

var key = "SUPER-SECRET-KEY";
var options = { algorithm: "aes256" };

encryptor.encryptFile(
  "myVideo.mp4",
  "encrypted.dat",
  key,
  options,
  function (err) {
    // Decryption complete
  }
);

//...

encryptor.decryptFile(
  "encrypted.dat",
  "outputfile.mp4",
  key,
  options,
  function (err) {
    // Encryption complete
  }
);

// By default it uses AES192, but you can use any encryption algorithm available in openssl. For a full list, execute this command in a Unix shell:

("openssl list-cipher-algorithms");
