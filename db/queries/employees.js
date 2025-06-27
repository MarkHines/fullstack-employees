import db from "#db/client";


/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  // TODO
  const sql = `
    INSERT INTO employees (name, birthday, salary)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const { rows: [createdEmployee] } = await db.query(sql, [name, birthday, salary])
  return createdEmployee;
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  // TODO

  const sql = `
    SELECT * FROM employees
  `;
  const {rows:employees} = await db.query(sql)
  return employees
  
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO

  //console.log(`GRABBING SINGLE EMPLOYEE`)
  const sql = `
    SELECT * FROM employees WHERE id = $1
  `
  const {rows:[employee]} = await db.query(sql, [id])
  //console.log(employee)
  return employee
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
  //console.log(`UPDATING`);
  const sql = `
    UPDATE employees
    SET name = $2, birthday = $3, salary = $4
    WHERE id = $1
    RETURNING *;
  `;
  const { rows: [ updatedEmployee ]} = await db.query(sql, [id, name, birthday, salary])
  //console.log(updatedEmployee)
  return updatedEmployee
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
  if(!id) return undefined
  //console.log(`DELETING`);
  const sql = `
    DELETE FROM employees WHERE id = $1
    RETURNING *
  `;
  const {rows: [deletedEmployee]} = await db.query(sql,[id])
  return deletedEmployee
}
