import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default (props) => {

    const products = useSelector((state) => state.allProducts.products)
    const listRender = products.map((product) => {
        const { id, title, category, image, price, rating } = product

        return (
            <Link className="nav-link text-dark" to={`/${id}`} >
            <div className="col" key={id}>
                <div className="card" style={{height: 500}}>
                    <img src={image} className="card-img-top h-50" alt="Product Image" />
                    <div className="card-body">
                        <h6>{title}</h6>
                        <p><i>{category}</i></p>
                        <div className="d-flex justify-content-evenly">
                            <p><b>Price:</b>{price}</p>
                            <p><b>Rating:</b>{rating.rate}</p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        )

    })

    return listRender
}