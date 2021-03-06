
const db = require("./data");

// Add some dummy data to the database - in practice this should be in a different file
function addData() {
    const book1 = db.Book.create({
        title: "How to Draw Good",
        isbn: "3289589036"
    });
    const book2 = db.Book.create({
        title: "Making the Cake",
        isbn: "23567035"
    });
    const book3 = db.Book.create({
        title: "Laughing for No Reason",
        isbn: "3297806"
    });

    const author1 = db.Author.create({
        name: "Arthur James"
    });
    const author2 = db.Author.create({
        name: "Evelyn Dorothy"
    });
    const author3 = db.Author.create({
        name: "Lisa Jones"
    });

    const user1 = db.User.create({
        name: "Martin Chorley",
        barcode: 123456,
        memberType: "Staff"
    });

    const loan1 = db.Loan.create({
        dueDate: new Date(2019, 03, 27)
    });
 
    db.Login.create({
        barcode: 123456,
        hash: "$2b$10$MWWqLDygGLq6abgGxp9RGu5trEDutUlrO8Pq0d8BddN3IFEbV1UPe"
    })

    // wait for all the objects to save and then instantiate relationships.
    Promise.all([book1, book2, book3, author1, author2, author3, user1, loan1])
        .then(results => {
        b1 = results[0];
        b2 = results[1];
        b3 = results[2];
        a1 = results[3];
        a2 = results[4];
        a3 = results[5];
        u1 = results[6];
        l1 = results[7];
        b1.addAuthor(a1);
        b2.addAuthor(a3);
        b3.addAuthors([a1, a2]);
        u1.addLoan(l1);
        b3.setLoan(l1);
    });
}

db.initialiseDatabase(true, addData);
