import glasses from '../../data/glassesMock.json';
import { GlassesAdminCard } from './GlassesAdminCard';



export const GlassesAdminList = () => {

  if(glasses === undefined) return; 
  const { Glasses } = glasses;



  return(
    <>
      {
        Glasses.map( glasses => (
          <GlassesAdminCard key={glasses.id} glasses={glasses}/>
        ))
      }
    </>    
  )
}
