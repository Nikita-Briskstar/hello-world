const app = require('./app');

const dotenv = require('dotenv');
const connectDatabase = require('./config/database')

// const cors = require('cors');
// var cors = require('cors');

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

//config
dotenv.config({path:'backend/config/config.env'});

connectDatabase()

// const cors = require('cors');


// const app = express();   


// app.use(cors());

// app.get('/' , function(req ,res, next){
//     res.json({msg : 'this is a CORS'})
// })

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200, // For legacy browser support
//     methods: "GET, PUT"
// }

// app.use(cors(corsOptions));

// app.use(cors({ origin: true }));

app.listen(process.env.PORT , () => {
    console.log(`server is on http://localhost:${process.env.PORT}`)
})

// app.use(cors());





// app.use(cors({
//     origin: 'http://localhost:3000'
// }));

// const cors = require('cors');
// app.use(cors({
//     origin: ['http://localhost:3000', 'http://localhost:4000']
// }));

// app.use(cors({
//     origin: '*'
// }));



// const cors = require('cors');


// app.use(cors(corsOptions));


// const whitelist = ['http://localhost:3000', 'http://localhost:4000']
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error())
//     }
//   }
// }


// app.use(cors({
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// }));



// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));




