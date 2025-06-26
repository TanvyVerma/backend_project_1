// require(' dotenv').config({path: './config/.env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: './env' });

connectDB();














































// m1

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`
//         )
//         app.on("error", (error) => {
//             console.error("MongoDB connection error:", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//         console.log("MongoDB connected successfully");


//     }
//     catch (error) {
//         console.error("MongoDB connection error:", error);
//     }   
// })