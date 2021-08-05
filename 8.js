//Question 8. How to copy values from one object to another in above mentioned example , merge and print them?

const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};

//code for solution:
function display(obj)
{
  for(let element in obj)
    {
      console.log(obj[element]);
    }
}

Object.assign(name,details); //merges 'details' object's properties to 'name' object
display(name); //prints name object data

