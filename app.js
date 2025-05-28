import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import AuthRouter from './src/router/authRouter.js';
import ProductRouter from './src/router/productRouter.js';
import subCategoryRoute from './src/router/subCategoryRoute.js';


const app = express();
app.use(
    cors({
        origin:true,
        credentials:true
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use('/api/auth', AuthRouter)
app.use('/api/product', ProductRouter)
app.use('/api/sub',subCategoryRoute)

export default app  