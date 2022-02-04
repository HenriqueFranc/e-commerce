import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProduct,removeProduct } from "../redux/ActionCreators/ActionProducts";
import { useParams } from "react-router-dom";

export default (props) => {

    const product = useSelector((state) => state.selectedProduct)
    const params = useParams()
    const dispatch = useDispatch()

    const { id ,title,description, category, image, price, rating } = product

    useEffect(() => {
        dispatch(fetchProduct(params.id))
        return ()=>{
            dispatch(removeProduct())
        }
    },[])

    return (
        <div className="container">
            {
                Object.keys(product).length === 0 ? (<h1>Loading</h1>) :
                    (<div className="card shadow-lg mt-5">
                        <div className="container">
                          
                            <img src={image} style={{height: 300 , width:300}} className="img-fluid float-start p-2" alt="Product Image" />
                           
                            <div className="card-body">
                                <h5>{title}</h5>
                                <h6 >{description}</h6>
                                <div className="d-flex justify-content-evenly">
                                    <p><b>Price:</b>{price}</p>
                                    <p><b>Rating:</b>{rating.rate}</p>
                                </div>
                            </div>
                        </div>
                        </div>)
            }

        </div>
    )

}