import express from "express";
const router = express.Router();
export default router;

// TODO: this file!

import { getEmployees, createEmployee, getEmployee, deleteEmployee, updateEmployee } from "#db/queries/employees";

router.get(`/`, async(request, response) => {
  const employees = await getEmployees();
  response.send(employees)
});

router.post(`/`, async(request, response) => {
  //console.log(request.body);
  if(!request.body || !request.body.name || !request.body.birthday || !request.body.salary) {
    response.status(400).send(`Incomplete Body`);
  } else {
    const newEmployee = await createEmployee(request.body)
    response.status(201).send(newEmployee)
  }
});


router.get(`/:id`, async(request, response) => {
  const { id } = request.params;
  //console.log(typeof id)
  const employeeId = Number(id) 
  //console.log(employeeId)
  const singleEmployee = await getEmployee(employeeId)
  //console.log(singleEmployee)
  if(employeeId < 0 || employeeId > 1000){
    response.status(400).send(`INCORRECT ID NUMBER`)
  } else if(!singleEmployee) {
    response.status(404).send(`EMPLOYEE DOES NOT EXIST`)
  } else {
    response.send(singleEmployee)
  }
});

router.delete(`/:id`, async(request, response) => {
  const { id } = request.params;
  const employeeId = Number(id)
  const singleEmployee = await deleteEmployee(employeeId);

  // the regex /\D/.test() checks the id for non numeric characters
  if(/\D/.test(id)) {
    response.status(400).send(`INCORRECT EMPLOYEE ID`)
  } else if(!singleEmployee) {
    response.status(404).send(`EMPLOYEE DOES NOT EXIST`);
  } else {
     response.status(204).send(`EMPLOYEE DELETED`);
  }
  
});

router.put(`/:id`, async(request, response) => {
  //console.log(request.body)
  // the regex /\D/.test() checks the id for non numeric characters

  const { id } = request.params;
  const employeeId = Number(id)
  const updatedEmployee = await updateEmployee(employeeId);


  if(!request.body || !request.body.name || !request.body.birthday || !request.body.salary) {
    response.status(400).send(`NO BODY PROVIDED`)
  } else if(/\D/.test(id)) {
    response.status(400).send(`INCORRECT ID NUMBER`)
  } else if(!updatedEmployee) {
    response.status(404).send(`EMPLOYEE DOES NOT EXIST`);
  } else {
    response.status(200).send(updatedEmployee)
  }
});

