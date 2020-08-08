
class Book{

    // Book(title, author) {     ==undifined 
      constructor(title, author) {
    this.title = title;
    this.author = author;
    
  }


//   const getTitle = (data) => ({
//     title : () => console.log(`title : ${data.title}`)
//  });
//  const getAuthor = (data) => ({
//     author : () => console.log(`author: ${data.author}`)
//  });

  // function getTitle(){     
     getTitle(){
   return "Title:" + this.title;
 }

  setTitle(titleOne){
  this.title=titleOne;
}

 getAuthor(){
  return "Author:" + this.author;
}

 setAuthor(authorOne){
 this.author=authorOne;
}
}
var PP=new Book("Pride and Prejudice" , "Jane Austen" );
console.log("Title:" ,PP.title);
console.log("Author:" ,PP.author);
var H=new Book("Hamlet" , "William Shakespeare" );
var WP=new Book("War and Peace" , "Leo Tolstoy" );