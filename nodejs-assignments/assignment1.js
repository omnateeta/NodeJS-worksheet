 // Import required core modules
 const fs = require("fs")
 const path = require("path")

 // Create students.txt and write 5 student names
 fs.writeFileSync('students.txt', 'Alice\nBob\nCharlie\nDavid\nEmma');
 console.log("Students.txt file created.");

 // Read the contents of the file
    const data = fs.readFileSync('students.txt', {encoding: 'utf-8'});
    console.log('\n List of students:\n' + data);

    //append a new student name to the file
    fs.appendFileSync('students.txt', '\nFrank');
    console.log('New students name appended.');

    //verify
    const updatedData = fs.readFileSync('students.txt', {encoding: 'utf-8'});
    console.log('\n Updated list of students:\n' + updatedData);

 //Create a new folder 'data' if it doesn't exist
if (!fs.existsSync('data')) {
  fs.mkdirSync('data');
  console.log('✅ Folder "data" created.');
}

 //Move students.txt into the data folder
const oldPath = path.join(__dirname, 'students.txt');
const newPath = path.join(__dirname, 'data', 'students.txt');

fs.renameSync(oldPath, newPath);
console.log('✅ students.txt moved to "data" folder.');

 // Delete students.txt from data folder
fs.unlinkSync(newPath);
console.log('🗑️ students.txt deleted from "data" folder.');