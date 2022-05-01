import { useState, useEffect } from "react";
import getGifs from "../Helpers/getGifs";


export default function useFetchGifs(category) {
      const[state,SetState] = useState({
          data:[],
          loading : true
      });
      useEffect(() =>{

            getGifs(category)
                .then(imgs=>{
                        SetState({
                            data: imgs,
                            loading: false
                        });
                
                })

        },[category])
        
      return state;

}
