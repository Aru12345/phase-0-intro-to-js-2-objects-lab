// Write your solution in this file!
const employee ={
    name:"max",
    streetAddress:"New York ,New York"

}
function updateEmployeeWithKeyAndValue(){
   return Object.assign({name:"Sam"},{streetAddress:"11 Broadway"})
}
function  destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
     employee[key]=value;
     return employee

}
function deleteFromEmployeeByKey(employee,key){
    const newObj =Object.assign({},employee)
    delete newObj[key];
    return newObj


}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee
}