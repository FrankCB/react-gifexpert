import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategoryApp = ({setCategorias}) => {
   const [inputValue, SetInputValue] = useState('');


   const handleImputChange = (e)=>{
       SetInputValue(e.target.value)
   }
   const handleSubmit = (e)=>{
    e.preventDefault();

    if(inputValue.trim().length > 2){
        
        setCategorias(X => [inputValue,...X]);
        SetInputValue('');
    }

}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue}
        onChange={handleImputChange}></input>
    </form>
  )
}

AddCategoryApp.prototype={
    setCategorias: PropTypes.func.isRequired
}

export default AddCategoryApp
