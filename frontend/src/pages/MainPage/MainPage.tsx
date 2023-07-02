import { useEffect } from 'react'
import Review from '../../components/Review'
import Blocks from '../../components/Blocks'
import AOS from "aos";

function Public() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    },[])
    
  return (
    <div>
      <Review/>
      <Blocks/>
    </div>
  )
}

export default Public
