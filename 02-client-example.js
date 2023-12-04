const response = await fetch({ method: "GET"}, "http://localhost:3000/rank");
const html = await response.text();

console.log(html);