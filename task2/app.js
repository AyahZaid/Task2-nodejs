const users=require("./users.js")
const yargs=require("yargs")

yargs.command({
    command:"add",
    describe:"to add a user",
    builder:{
        
        fName:{
            describe:"write the first Name ",
            demandOption:true,
            type:"string"
        },
        lName:{
            describe:"write the last Name ",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        users.addPerson(x.id,x.fName,x.lName,x.city,x.age)
    }

})
yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
        users.deletData(x.id)
    }
 })

 yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        users.listData()
    }
 })
 
 yargs.command ({
    command : "read",
    describe : "to read user info",
    builder : {
        id : {
            describe : "this is id ",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=> {
        users.readData (x.id)
    }
 })
yargs.parse()