import express from "express";
import { get_items } from "../controllers/items.controller";

const router = express.Router()


router.get("/items", get_items)



export default router()