// URL Module in NodeJS is used to parse, format and resolve the URL. It is a built-in module in NodeJS. The URL module provides utilities for URL resolution and parsing.

import url from "url";

// The URL module provides various methods and properties for working with URLs. Some of the common functionalities provided by the URL module include:

// parse() method parses a URL string and returns a URL object
const parsedUrl = new URL("https://www.example.com/path?query=value");
console.log(parsedUrl);

// format() method returns a formatted URL string based on the URL object
const formattedUrl = url.format({
  protocol: "https",
  hostname: "www.example.com",
  pathname: "/path",
  query: "query=value",
});
console.log(formattedUrl);

// resolve() method resolves a URL string relative to a base URL
const resolvedUrl = url.resolve("https://www.example.com", "/path");
console.log(resolvedUrl);

// The URL module provides a convenient way to work with URLs in Node.js applications. By using the URL module, developers can easily parse, format, and resolve URLs, making it easier to handle URL-related operations in their applications.


const myURL = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");
console.log(myURL.hash);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.href);
console.log(myURL.pathname);
console.log(myURL.port);
console.log(myURL.protocol);
console.log(myURL.search);
console.log(myURL.searchParams);

// Both works the same 👇
console.log(myURL.toString());
console.log(myURL.toJSON());