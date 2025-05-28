import express from 'express'
import { asyncHandler } from '../middleware/asyncHandler.js'
import {  login, logout, register } from '../controllers/authController.js'

const AuthRouter = express.Router()


AuthRouter.post("/register",asyncHandler(register))
AuthRouter.post("/login", asyncHandler(login))
AuthRouter.post("/logout", asyncHandler(logout))
// AuthRouter.post("/cookie", asyncHandler(cookieCheck))

export default AuthRouter
