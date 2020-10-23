import mongoose from 'mongoose';
import config from "./../config/config";


export default async () => {
    try {
        const mongodbUrl = config.MONGODB_URL;
        await mongoose.connect(mongodbUrl, {
             useNewUrlParser: true,
             useUnifiedTopology: true,
             useCreateIndex: true
         })
    } catch(e) {
        console.log(e);
    }
    
}