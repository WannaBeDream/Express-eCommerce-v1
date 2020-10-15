import mongoose from 'mongoose';
import config from "./../config/config";


export default () => {
    const mongodbUrl = config.MONGODB_URL;
    mongoose.connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).catch(error => console.log(error.reason));
}