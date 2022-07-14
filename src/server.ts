/* eslint-disable no-console */
import express from "express";
import { categoriesRoutes } from "./routes/category.routes";
import { specificationRoutes } from "./routes/specification.routes";

const app = express();
app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

app.listen(3000, () => console.log("Server is running"));
