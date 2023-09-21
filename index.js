import express from 'express';
import bodyparser from  'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyparser.json());
app.use('/users', userRoutes);
app.get('/',(req,res)=>{
    res.send('hello from home page.');
});
app.listen(PORT,()=>console.log(`server is runing on port: http://localhost:${PORT}`));

