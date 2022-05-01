import React, { useState } from 'react'
import AddCategoryApp from './AddCategoryApp';
import GifGrid from './GifGrid';

  const GifexpertApp = () => {

   // const categorias = ['onepunch','Samurai X','Goku']
   const[categorias, setCategorias] = useState(['onepunch']);

//    const handleAdd = ()=>{
//     setCategorias(X => [...X,'GAAAA'])
//    }

  return (
    <>
      <h2>GifexpertApp</h2>
      <AddCategoryApp setCategorias={setCategorias}/>
      <hr/>
      <ol>
          {
              categorias.map(category=> <GifGrid key = {category} 
                                                  category = {category} />)
          }
      </ol>
    </>
  )
}
export  default GifexpertApp;

