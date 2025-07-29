import express from "express";
import userRoutes from "./routes.js";

const app = express();
app.use(express.json());

app.use("/usuarios", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
