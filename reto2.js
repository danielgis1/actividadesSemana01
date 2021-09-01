const user = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA" }

let { name, email, ...rest } = user;
console.log(rest);

rest.city = "Lima"
rest.state = "VES"
rest.country = "Perú"

console.log(rest);
let str = `{ }`