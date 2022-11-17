import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminGlasses } from '../../hooks/useAdminGlasses';
import { GlassesAdminCard } from './GlassesAdminCard';



export const GlassesAdminList = () => {

  const { startGetAllGlasses, glasses,startFindGlasses } = useAdminGlasses();
  
  useEffect(() => {
    startGetAllGlasses();
  }, []);
  
  if(glasses.length  === undefined) return;
  return(
    <>
      {
        glasses.map(glassesItem => (
          <GlassesAdminCard key={glassesItem._id} glasses={ glassesItem }/>
        ))
      }
    </>
  )
}
