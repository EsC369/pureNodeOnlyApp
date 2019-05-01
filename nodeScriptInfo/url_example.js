const url = require("url");
const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized Url:
console.log(myUrl.href);
console.log(myUrl.href.toString());

// Grab Host (root domain):
console.log(myUrl.host);

// Host name:  - the different is hostname, doesnt include the port (if there is one), host above will.
// Example: const myUrl = new URL("http://mywebsite.com/8000/hello.html?id=100&status=active");    - hence the 8000
console.log(myUrl.hostname);

// Path name:
console.log(myUrl.pathname);

// Serialized query:
console.log(myUrl.search);

// To create an object from serialization:  - Params object
console.log(myUrl.searchParams);

// Add params:
myUrl.searchParams.append("abc", "123")    // Key: abc     value: 123

// Loop through params: Show each key value pair:
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));