import express from "express";
import {listUser, addUser} from './controller.js';
import upload from '../../utils/multer-image.js'

const route = express.Router();
route.get('/users', listUser);
route.post('/users',upload, addUser);

export default route;