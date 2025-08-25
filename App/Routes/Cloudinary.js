import { uploadFile } from "../Controller/Coudinary.js";
import upload from "../Controller/Multer.js";
import express from 'express';

const fileRouter = express.Router()

fileRouter.post('/', upload.single('image'), uploadFile);

export default fileRouter