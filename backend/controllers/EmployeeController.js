const Employee=require('../models/Employee')

//show the list of employees
const index=(req,res,next)=>{
    Employee.find()
    .then(response=>{
        res.json(
            {
                response
            }
        )
    })
    .catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })
}
// show single employee
const show=(req,res,next)=>{
    let employeeID=req.body.employeeId
    Employee.findById(employeeID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
                  message:"an error occured"
        })
    })
}
// store function to add an employee to a database
//add employee
const store=(req,res,next)=>{
    let employee=new Employee({
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    })
    if(req.file){
        employee.avatar=req.file.path
    }
    employee.save()
    .then(response=>{
        res.json({
            message:"employee added successfully"
        })
    })
    .catch(error=>{
        res.json({
            message:"an error occured"
        })
    })
}
//updating an employee
const update=(req,res,next)=>{
    let employeeID=req.body.employeeID
    let updatedData={
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    }
    Employee.findByIdAndUpdate(employeeID,{$set:updatedData})
    .then(()=>{
        res.json({
            message:"employee updated succesfully"
        })
    })
    .catch(error=>{
        res.json({
            message:"error while updating"
        })
    })
}
//deleting an employee
const destroy=(req,res,next)=>{
    let employeeID=req.body.employeeID
    Employee.findByIdAndDelete(employeeID)
    .then(()=>{
        res.json({
            message:"employee deleted successfully"
        })
    })
    .catch(error=>{
        res.json({
            message:"error occured"
        })
    })
}
module.exports={
    index,show,store,update,destroy
}