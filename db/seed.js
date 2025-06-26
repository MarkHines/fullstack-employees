import db from "#db/client";
import { createEmployee } from "./queries/employees.js";
import { faker } from "@faker-js/faker";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO

  await createEmployee({name: faker.person.firstName(), birthday: faker.date.birthdate(), salary: faker.commerce.price({min: 32000, max: 100000, dec: 0})} )
  await createEmployee({name: faker.person.firstName(), birthday: faker.date.birthdate(), salary: faker.commerce.price({min: 32000, max: 100000, dec: 0})} )
  await createEmployee({name: faker.person.firstName(), birthday: faker.date.birthdate(), salary: faker.commerce.price({min: 32000, max: 100000, dec: 0})} )
  await createEmployee({name: faker.person.firstName(), birthday: faker.date.birthdate(), salary: faker.commerce.price({min: 32000, max: 100000, dec: 0})} )
  await createEmployee({name: faker.person.firstName(), birthday: faker.date.birthdate(), salary: faker.commerce.price({min: 32000, max: 100000, dec: 0})} )
  await createEmployee({name: faker.person.firstName(), birthday: faker.date.birthdate(), salary: faker.commerce.price({min: 32000, max: 100000, dec: 0})} )
  await createEmployee({name: faker.person.firstName(), birthday: faker.date.birthdate(), salary: faker.commerce.price({min: 32000, max: 100000, dec: 0})} )
  await createEmployee({name: faker.person.firstName(), birthday: faker.date.birthdate(), salary: faker.commerce.price({min: 32000, max: 100000, dec: 0})} )
  await createEmployee({name: faker.person.firstName(), birthday: faker.date.birthdate(), salary: faker.commerce.price({min: 32000, max: 100000, dec: 0})} )
  await createEmployee({name: faker.person.firstName(), birthday: faker.date.birthdate(), salary: faker.commerce.price({min: 32000, max: 100000, dec: 0})} )
}
