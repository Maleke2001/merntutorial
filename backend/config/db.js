import mongoose from "mongoose"

export const connectDB = () => {
try {
    const conn =mongoose.connect(process.env.MONGO_URI);
    console.log

} catch (error) {
    
}

}