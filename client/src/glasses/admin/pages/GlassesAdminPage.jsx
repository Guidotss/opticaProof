import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useAdminGlasses } from '../../../hooks';
import { AdminGlassesLayOut } from '../../layout/AdminGlassesLayOut';


export const GlassesAdminPage = () => {

  const { id } = useParams();
  const { startFindGlasses, glasses } = useAdminGlasses();

  useEffect(() => {
    startFindGlasses(id);
  }, [id]);



  const glassesData = useMemo(() => {
    return glasses;
  }, [glasses]);


  return (
    <AdminGlassesLayOut>
      <Box sx={{width:'100vw', border:'solid 1px gray',boxShadow:2,backgroundColor:'#334746'}}>
        <h1 style={{color:'white', letterSpacing:5, fontWeight:'bold',marginLeft:'250px', marginTop:'28px'}} >
          Anteojos
        </h1>
      </Box>
      <Box>
        <Box>
        
          <img 
            style={{
              width:'50vw', 
              height:'60vh', 
              borderRadius:'20px', 
              marginTop:'20px',
              marginLeft:'20vw', 
            }}
            src={glassesData.image} 
            alt={`${glassesData.name}.jpg`} 
          />
        </Box>
      </Box>
    </AdminGlassesLayOut>
  )
}