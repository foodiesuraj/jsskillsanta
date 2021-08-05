//Question4. Consider the two functions below. Will they both return the same thing? Why or why not?
function foo1()
  {
    return {
      bar: "hello"
    };
  }
function foo2()
  {
    return{
      bar: "hello"
    };
  }

//solution: they will return different object's values which is same. Printing return from above functions will display the same value in output as shown below
console.log(foo1());
console.log(foo2());