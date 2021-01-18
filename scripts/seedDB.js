const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks")

const bookSeed = [
    {
        title: "Redshirts",
        author: "John Scalzi",
        description: "Redshirts is a Star Trek parody novel by science fiction writer John Scalzi. The book was published by Tor Books in June 2012. The audiobook of the novel is narrated by Wil Wheaton. The book won the 2013 Hugo Award for Best Novel and Locus Award for Best Science Fiction Novel.",
        image: "",
        link: "",
    },
    {
        title: "IT",
        author: "Stephen King",
        description: "It is a 1986 horror novel by American author Stephen King. It was his 22nd book, and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey.",
        image: "",
        link: "",
    },
    {
        title: "Eloquent JavaScipt",
        author: "Marijn Haverbeke",
        description: "",
        image: "",
        link: "",
    }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });