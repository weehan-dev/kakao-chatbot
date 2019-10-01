import express from "express";
import api from "./routers";
const app = express();

app.use("", api);

app.listen(4000, () => {
	console.log("Server is on 4000");
});
