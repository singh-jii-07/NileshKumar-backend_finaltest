import { uploadFile,downloadFile } from "../Controller/Coudinary.js";
import upload from "../Controller/Multer.js";
import express from 'express';

const fileRouter = express.Router()

fileRouter.post('/', upload.single('image'), uploadFile);
fileRouter.get("/download/:id", downloadFile);

export default fileRouter