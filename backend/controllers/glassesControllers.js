import { Glasses } from '../services/glasses'; 

const glassesClass = new Glasses();

export async function getAllGlasses( _req, res ){
    try{

        const glasses = await glassesClass.getAllGlasses();
        return res.status(200).json(glasses);

    }catch(err){
            
        console.log(err);
        return res.status(500).json({error: `Error: ${err}`});
    
    }
}