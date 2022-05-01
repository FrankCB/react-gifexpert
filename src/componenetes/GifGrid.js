import React from 'react'
import useFetchGifs from '../Hooks/useFetchGifs'
// import getGifs from '../Helpers/getGifs';
 import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {
//    const [images, SetImages] = useState([]);
   const {data, loading} =  useFetchGifs(category);
  
//     useEffect(() =>{
//         getGifs(category).then(imgs => SetImages(imgs));
//     },[category])

   
  return (
     <>

        <h3 className='card animate__animated animate__fadeInDown'>{category}</h3>
        {loading&&<p className='card animate__animated animate__flash'>Cargando</p>}
        <div className='card-grid'>
            
            {data.map(img=>(
                    <GifGridItem {...img} key={img.id}/>
            ))
            }
        
        </div>

     </> 
  )
}

export default GifGrid
