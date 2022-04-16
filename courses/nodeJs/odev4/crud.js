
import * as fs from 'fs';


//CREATE
const jsonData =` {"name": "Employee 1 Name", "salary": 2000}`
fs.writeFile('employees.json', jsonData, "utf8",(err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

//READ
fs.readFile('employees.json',"utf8", (err,data) => {
    if(err) console.log(err);
    console.log(data)
})

//UPDATE
const jsonData2 = `\n{"name": "Employee 2 Name", "salary": 3000}`
fs.appendFile('employees.json', jsonData2, "utf8", (err) => {
  if (err) throw err;
  console.log('The data has been append!');
});


//DELETE 
fs.unlink("employees.json", (err) => {
    if(err) console.log(err)
    console.log("Dosya silindi")
})