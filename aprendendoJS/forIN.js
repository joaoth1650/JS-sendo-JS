let person = {
  name: "john",
  age: 34,
  weight: 87.9,
}
for (let property in person) {
    console.log(property)
    console.log(person[property])
}