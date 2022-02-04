import React,{useEffect, useState} from "react";
import { fetchProducts } from "../redux/ActionCreators/ActionProducts";
import { useDispatch } from "react-redux";
import ListProducts from "./ListProducts";

export default (props)=>{
    const dispatch = useDispatch()

   
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    
    return(
        <div className="container mt-5">
            <div className="row row-cols-4 g-1 h-50 align-items-center">
               <ListProducts></ListProducts>
            </div>
        </div>
    )


}