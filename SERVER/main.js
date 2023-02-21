const express = require("express");

const connectDB = require("./config/db");
const prodcutsRouter = require("./routers/productsRouter");

const app = express();
const port = 8000;

connectDB();

app.use(express.json());

app.use("/products", prodcutsRouter);


app.listen(port, () => {
	console.log(`app is listening at: http://localhost:${port}`);
});