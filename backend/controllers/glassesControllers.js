import { Glasses } from '../services/glasses'; 

const glassesClass = new Glasses();

export async function getAllGlasses( _req, res ){
    try{
        const glasses = await glassesClass.getAllGlasses();
        return res.status(200).json({
            ok: true,
            glasses
        });
    }catch(err){
        return res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

export async function getGlassesById( req, res ){
    try{
        const glasses = await glassesClass.getGlassesById(req.params.id);
        return res.status(200).json({
            ok: true,
            glasses
        });
    }catch(err){  
        return res.status(404).json({
            ok: false,
            msg: 'Glasses not found'
        });
    }
}

export async function createGlasses( req, res ){
    try{  
        const newGlasses = await glassesClass.createGlasses(req.body);
        return res.status(201).json({
            ok: true,
            newGlasses
        });
    }catch(err){
        return res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

export async function updatedGlasses( req, res ){
    try{
        const updatedGlasses = await glassesClass.updateGlasses(req.params.id, req.body);
        return res.status(200).json({
            ok: true,
            updatedGlasses
        });
    }catch(err){
        return res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
} 

export async function deleteGlasses( req, res ){
    try{
        const deletedGlasses = await glassesClass.deleteGlasses(req.params.id);
        return res.status(200).json({
            ok: true,
            deletedGlasses
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}