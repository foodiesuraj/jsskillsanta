//Question 10. Consider below as an example of constructor function where we want name and level to be referred to a function itself, is below example correct or not? Please explain?
function Hero(name, level)
{
name = name;
level = level;
}

//answer explaination : No above is not right way to do it, since it will not assign values to default properties of function's object
//correct solution:
function Hero(name, level) 
{
this.name = name;  
this.level = level; 
}