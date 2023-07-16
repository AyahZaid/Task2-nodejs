const fs=require("fs");

const addPerson=(id,fName,lName,city,age)=>{
    const allData=loadData();

    allData.push({
        id:id,
        fName:fName,
        lName,
        city:city,
        age:age
    })

    saveAllData(allData)
}

const loadData=()=>{
    try{
        const datajson=fs.readFileSync("users.json").toString()
    return JSON.parse(datajson)
    }
    catch{
        return[]
    }
    
}

const saveAllData=(allData)=>{
    const saveAllDataJson=JSON.stringify(allData)
    fs.writeFileSync("users.json",saveAllDataJson)

}
const deletData=(id)=>{
    const allData=loadData()
    const dataToKeep=allData.filter((obj)=>{
        return obj.id !==id
    })
    console.log(dataToKeep);
    saveAllData(dataToKeep)
}

const listData = () => {
    const allData = loadData()

    allData.forEach ((obj) => {
        console.log(obj.fName , obj.lName)
    })
}

const readData = (id) => {
    const allData = loadData()

    const itemNeeded = allData.find((obj) => {
         return obj.id == id 
    })
    console.log(itemNeeded)

}

module.exports={
addPerson,
deletData,
listData,
readData

}