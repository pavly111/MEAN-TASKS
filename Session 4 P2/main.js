const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "books.json");

const server = http.createServer((req, res) => {
  const pathname = req.url;
  const method = req.method;

  res.setHeader("Content-Type", "application/json");

  // ===========================
  //      GET ALL BOOKS
  // ===========================
  if (method === "GET" && pathname === "/books") {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end(JSON.stringify({ message: "Error reading file" }));
      }

      res.writeHead(200);
      res.end(data);
    });
  }

  // ===========================
  //     ADD BOOK
  // ===========================
  else if (method === "POST" && pathname === "/books") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      let newBook 

      try {
        newBook = JSON.parse(body);
      } catch {
        res.writeHead(400);
        return res.end(JSON.stringify({ message: "Invalid JSON" }));
      }

      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          res.writeHead(500);
          return res.end(JSON.stringify({ message: "Error reading file" }));
        }

        const books = JSON.parse(data);

        let maxId = 0;

        if (books.length > 0) {
          maxId = Math.max(...books.map((b) => b.id));
        }

        newBook.id = maxId + 1;

        books.push(newBook);

        fs.writeFile(filePath, JSON.stringify(books, null, 2), (err) => {
          if (err) {
            res.writeHead(500);
            return res.end(JSON.stringify({ message: "Error saving file" }));
          }

          res.writeHead(201);
          res.end(JSON.stringify(newBook));
        });
      });
    });
  }


  // ===========================
  // DELETE BOOK
  // ===========================
  else if (method === "DELETE" && pathname.startsWith("/books/")) {
    const id = Number(pathname.split("/")[2]);

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end(JSON.stringify({ message: "Error reading file" }));
      }

      const books = JSON.parse(data);

      const updatedBooks = books.filter((book) => book.id !== id);

      if (updatedBooks.length === books.length) {
        res.writeHead(404);
        return res.end(JSON.stringify({ message: "Book not found" }));
      }

      fs.writeFile(
        filePath,
        JSON.stringify(updatedBooks, null, 2),
        (err) => {
          if (err) {
            res.writeHead(500);
            return res.end(JSON.stringify({ message: "Error saving file" }));
          }

          res.writeHead(200);
          res.end(
            JSON.stringify({
              message: "Book deleted successfully",
            }),
          );
        },
      );
    });
  }

  // ===========================
  // GET BOOK BY ID
  // ===========================
    else if (method === "GET" && pathname.startsWith("/books/")) {
    const id = Number(pathname.split("/")[2]);

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end(JSON.stringify({ message: "Error reading file" }));
      }

      const books = JSON.parse(data);

      const book = books.find((b) => b.id === id);

      if (!book) {
        res.writeHead(404);
        return res.end(JSON.stringify({ message: "Book not found" }));
      }

      res.writeHead(200);
      res.end(JSON.stringify(book));
    });
  }


  // ===========================
  // UPDATE BOOK INFORMATION
  // ===========================
    else if (method === "PUT" && pathname.startsWith("/books/")) {
    const id = Number(pathname.split("/")[2]);

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      let updatedBook;

      try {
        updatedBook = JSON.parse(body);
      } catch {
        res.writeHead(400);
        return res.end(JSON.stringify({ message: "Invalid JSON" }));
      }

      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          res.writeHead(500);
          return res.end(JSON.stringify({ message: "Error reading file" }));
        }

        const books = JSON.parse(data);

        const bookIndex = books.findIndex((b) => b.id === id);

        if (bookIndex === -1) {
          res.writeHead(404);
          return res.end(JSON.stringify({ message: "Book not found" }));
        }

        books[bookIndex] = { ...books[bookIndex], ...updatedBook };

        fs.writeFile(
          filePath,
          JSON.stringify(books, null, 2),
          (err) => {
            if (err) {
              res.writeHead(500);
              return res.end(JSON.stringify({ message: "Error saving file" }));
            }

            res.writeHead(200);
            res.end(JSON.stringify(books[bookIndex]));
          },
        );
      });
    }); 
  }


  // ===========================
  // NOT FOUND
  // ===========================
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

server.listen(3000, () => {
  console.log("Server Running on http://localhost:3000");
});
