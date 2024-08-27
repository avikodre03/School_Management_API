const express = require('express');
const dotenv = require('dotenv');
const schoolRoutes = require('./routes/schools');
const PORT = process.env.PORT || 10000;
const cors=require("cors")

dotenv.config();
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', schoolRoutes);

app.get('/',(req,res)=>{
    console.log("Success");
    res.status(400).json({log:"done"});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});