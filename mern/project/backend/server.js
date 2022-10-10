const app = require('./app');

const dotenv = require('dotenv');
const connectDatabase = require('./config/database')

const cors = require('cors');
// var cors = require('cors');

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

//config
dotenv.config({path:'backend/config/config.env'});

connectDatabase()

app.listen(process.env.PORT , () => {
    console.log(`server is on http://localhost:${process.env.PORT}`)
})

app.use(cors());

// const cors = require('cors');


// app.use(cors(corsOptions));