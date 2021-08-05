//Q2. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }
];

//solution code below:
function statusDisplay(library)
{
    for(var elem in library)
    console.log("author: "+library[elem].author+", title: "+library[elem].title+", readingStatus: "+library[elem].readingStatus);
   
}

statusDisplay(library);