import express from "express";
const app = express();
export default app;

// TODO: this file!

app.use(express.json());

app.get(`/`, (request, response) => {
  response.send(`Welcome to the Fullstack Employees API.`)
})

import router from "#api/employees";
app.use(`/employees`, router)

app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).send(`SOMETHING WENT WRONG`)
})
