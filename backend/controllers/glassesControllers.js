import { Glasses } from '../services/glasses'; 

const glassesClass = new Glasses();

export async function getAllGlasses( _req, res ){
    try{
        const glasses = await glassesClass.getAllGlasses();
        return res.status(200).json({glasses});
    }catch(err){
        return res.status(500).json({error: `Error: ${err}`});
    }
}

export async function getGlassesById( req, res ){
    try{
        const glasses = await glassesClass.getGlassesById(req.params.id);
        return res.status(200).json({glasses});
    }catch(err){  
        return res.status(404).json({error: `Error: ${err}`});
    }
}

export async function createGlasses( req, res ){
    try{  
        const newGlasses = await glassesClass.createGlasses(req.body);
        return res.status(201).json({newGlasses});
    }catch(err){
        return res.status(500).json({error: `Error: ${err}`});
    }
}

export async function updatedGlasses( req, res ){
    try{
        const updatedGlasses = await glassesClass.updateGlasses(req.params.id, req.body);
        return res.status(200).json({updatedGlasses});
    }catch(err){
        return res.status(500).json({error: `Error: ${err}`});
    }
} 

export async function deleteGlasses( req, res ){
    try{
        const deletedGlasses = await glassesClass.deleteGlasses(req.params.id);
        return res.status(200).json({deletedGlasses});
    }catch(err){
        console.log(err);
        return res.status(500).json({error: `Error: ${err}`});
    }
}