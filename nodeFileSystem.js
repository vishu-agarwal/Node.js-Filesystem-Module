//Practical 1: Node.js File System Module
/*
Create Directory ( Hint: fs.mkdir )
Remove Directory ( Hint: fs.rmdir )
Write File 
Read File 
Delete File
Append data to file
Update / Replace file with new data
Rename File
*/

// for taking input from user
const readline = require("readline");
//create interface of readline for taking input from user
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// declare file system fs constant
const fs = require("fs");
// for menu arrow function "menu"

var menu = () => {
        console.log("****************************************************************************");
        console.log("1.Create Directory");
        console.log("2.Remove Directory");
        console.log("3.Write FIle");
        console.log("4.Read FIle");
        console.log("5.Delete FIle");
        console.log("6.Append data to FIle");
        console.log("7.Update / Replace file with new data");
        console.log("8.Rename File");
        console.log("9.Exit from Menu");
        choice();
    }
    // ask for choice
var choice = () => {

        r1.question("Enter your choice: ", (ans) => {
            if (ans === "1") {
                console.log("Create Directory");
                createdir();
            } else if (ans === "2") {
                console.log("Remove Directory");
                removedir();
            } else if (ans === "3") {
                console.log("Write File : ");
                writeFile();
            } else if (ans === "4") {
                console.log("Read File : ");
                readFile();
            } else if (ans === "5") {
                console.log("Delete File : ");
                deleteFile();
            } else if (ans === "6") {
                console.log("Append File : ");
                appendFile();
            } else if (ans === "7") {
                console.log("Update OR Replace File : ");
                updateFile();
            } else if (ans === "8") {
                console.log("Rename File : ");
                renameFile();
            } else if (ans === "9") {
                console.log("Bye!!! Bye!!!!");
                r1.close();
            } else {
                console.log("you enter wrong choice");
                menu();
            }
        })
    }
    //call menu function
menu();

// create directory functions
var createdir = () => {
    r1.question("Enter the name of directory want to create : ", (ans) => {
        var dir = "./";
        dir = dir + ans;
        console.log(dir);
        fs.mkdir(dir, { recursive: true }, (err) => {
            if (err) throw err;

        });
        console.log("directory created succesfully");
        menu();

    });

};
//  remove directory function
var removedir = () => {
    r1.question("Enter the name of directory want to delete : ", (ans) => {
        fs.rmdir(ans, () => {
            console.log("directory deleted");
            menu();
        });
        console.log("directory not found");
    });
};

// write in file function

var writeFile = () => {
    r1.question("Enter the file name want to write(without write extention) : ", (fname) => {
        r1.question("Enter the contents of the file : ", (content) => {
            fs.writeFile(fname + ".txt", content, (err) => {
                if (err) throw err;
                console.log("Added succesfully");
                menu();
            });
            console.log("unsuccess.....");
        });
    });
};

//  read from file function
var readFile = () => {
    r1.question("Enter the filename  want to read (without write extention) : ", (fname) => {
        fs.readFile(fname + ".txt", "utf8", (err, data) => {
            if (err) throw err;
            5
            console.log(data);
            menu();
        });
    });
};

//  delete file function
var deleteFile = () => {
        r1.question("Enter the fiename want to delete: ", (fname) => {
            fs.unlink(fname, (err) => {
                if (err) throw err;
                console.log("Deleted Succesfully");
                menu();
            })
        })
    }
    // append file function 
var appendFile = () => {
    r1.question("Enter the filename want to Append: ", (fname) => {
        r1.question("Enter the contents  want to enter in the file : ", (content) => {
            fs.appendFile(fname, content, (err) => {
                if (err) throw err;
                console.log("Append succesfully");
                menu();
            });
        });

    });
};
// update or replace file function
var updateFile = () => {
    r1.question("Enter the file name want to update or replace  : ", (fname) => {
        r1.question("Enter the contents of the file : ", (content) => {
            fs.writeFile(fname + ".txt", content, (err) => {
                if (err) throw err;
                console.log("updated succesfully");
                menu();
            });
        });
    });
}

// rename file function
var renameFile = () => {
    r1.question("Enter the file name want to rename : ", (fname) => {
        r1.question("Enter the file name  want to rename your file :", (rename) => {
            fs.rename(fname, rename, (err) => {
                if (err) throw err;
                console.log("Rename succesfully");
                menu();
            });
        });
    });
};