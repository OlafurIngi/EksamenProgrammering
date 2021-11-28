// Denne sektion er inspireret af Søren's forelæsning.

// We require file system
var fs = require("fs");


// Variables for the main path in the directory and for the user file in data
const mainPath = __dirname + "/../../data";
const userFile = "/users.json";

class DB {
  constructor() {
    this.users = this.openFile(userFile);
  }
  
  // Method to save file
  saveFile(fileName, contentString) {
    fs.writeFileSync(mainPath + fileName, contentString);
  }

 // Method to login from the database
 saveUser(user) {
     // This method pushes the user to the "database"
    this.users.push(user);
    this.saveFile(userFile, JSON.stringify(this.users));
  }


  // Method to open file
  openFile(fileName) {
    const file = fs.readFileSync(mainPath + fileName);
    return JSON.parse(file);
  }

  // Specific applications
  // Method to delete the user 
  deleteUser(user) {
    this.users = this.users.filter((x) => x.email != user.email);
    this.saveFile(userFile, JSON.stringify(this.users));
  }

  // Method to find the user in the database
  findUser(user) {
    return this.users.find((x) => user.email == x.email);
  }
}

module.exports = new DB();

