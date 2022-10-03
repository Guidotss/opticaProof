import dotenv from 'dotenv';
dotenv.config(); 

export const DB_CONFIG = {
    // eslint-disable-next-line no-undef
    urlAtlas: `mongodb+srv://Guido:${process.env.DB_PASSWORD}@cluster0.tijy1to.mongodb.net/opticaProof?retryWrites=true&w=majority`,
    options:{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
}   