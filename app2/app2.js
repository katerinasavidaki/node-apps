const fs = require('fs');
const http = require('http');
const os = require('os');

// Επιστρέφει το λειτουργικό από το σύστημα μας
const osType = os.type();

// Δημιουργία String με HTML περιεχόμενο
const htmlContent = `<html><h3>Hello, World! Your OS type is ${osType}</h3></html>`;
console.log(htmlContent)

const server = http.createServer((req, res) => {
  console.log("Αρχικά δημιουργούμε το αρχείο index.html με περιεχόμενα το htmlContent");
  fs.writeFile('./index1.html', htmlContent, err => {
    if(err) {
      console.log('Problem in writing file');
    } else {
      console.log('Στη συνέχεια διαβάζουμε το αρχείο index1.html');
      fs.readFile('index1.html', 'utf8', (err, content) => {
        if (err) {
          console.log(err)
        }
        console.log('Ορίζουμε headers σε αυτό που θα επιστρέψουμε πίσω');
        res.setHeader('Content-Type', 'text/html');
        // res.setHeader('Content-Type', 'application/json');
        res.end(content);
      })
    }
  })
});