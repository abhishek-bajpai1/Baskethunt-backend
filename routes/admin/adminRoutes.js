import express from "express";
const router = express.Router();
import { adminWelcome } from "../../controllers/admin/adminController";

router.get("/", adminWelcome);
export default router;
