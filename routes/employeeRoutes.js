import express from "express";
import employeeFileRouter from "./employee.file.router.js";

const router = express.Router();

export function routerEmployees(app) {
    app.use("/api/v1/employees", employeeFileRouter); // Cambiado aquí
}