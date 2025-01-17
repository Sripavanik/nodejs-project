const express=require('express')
const router=express.Router()

const EmployeeController=require('../controllers/EmployeeController')
const upload=require('../middleware/upload')
const authenticate=require('../middleware/authenticate')
router.get('/',authenticate,EmployeeController.index)
router.post('/show',EmployeeController.show)
router.post('/store',upload.single('avatar'),EmployeeController.store)
//router.post('/store',upload.array('avatar[]'),EmployeeController.store)
//in postman keep key as avatar[] for multiple files to upload
//in controller if(req.files){let path=''
//req.files.foreach(function(files,index,arr){
//  path=path+files.path+','})path is coma separated
//path=path.substring(0,path.lastIndexOf(","))//removes last coma
//employee.avatar=path}
router.post('/update',EmployeeController.update)
router.post('/delete',EmployeeController.destroy)

module.exports=router 