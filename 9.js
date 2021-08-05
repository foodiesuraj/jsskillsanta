const gimli =
{ name: "Gimli",
race: "dwarf",
weapon: "axe",
greet: function() { return `Hi, my name is ${this.name}!`; }, };

//Question 9. How to access and print greet function from the above object code?

//answer:
console.log(gimli.greet());