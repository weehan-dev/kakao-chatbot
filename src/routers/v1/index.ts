import express from "express";

const router = express.Router();

router.get("", (req, res) => {
	res.json("Hello World!");
});

router.get("/home", (req, res) => {
	res.json("this is home");
});

export default router;
