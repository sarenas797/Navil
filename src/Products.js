import React, { Component } from 'react';
import './Products.css'

class Products extends Component{
    render(){
        return(
            <div className="products" id="Productos">
                <p>¿Qué Ofrecemos?</p>
                <h2 className="Prod">Nuestros Productos</h2>
                <h4 className="desc">Cras a lacus eget metus imperdiet tincidunt. Vivamus tempor blandit massa, vitae pharetra elit eleifend eget. 
                    Nulla gravida aliquet dignissim. Curabitur feugiat rutrum massa facilisis molestie. 
                    Suspendisse ac purus ut quam lacinia iaculis at venenatis mi.
                </h4>
                <div className = "grid">
                    <a href="" className="Pic1">
                        <h3>Hoodies</h3>
                    </a>
                    <a href ="" className="Pic2">
                        <h3>Bags</h3>
                    </a>
                    <a href="" className="Pic3">
                        <h3>Things</h3>
                    </a>
                    <a href="" className="Pic4">
                        <h3>Things</h3>
                    </a>
                    <a href="" className="Pic5">
                        <h3>Things</h3>
                    </a>
                    <a href="" className="Pic6">
                        <h3>Things</h3>
                    </a>
                    <a href="" className="Pic7">
                        <h3>Things</h3>
                    </a>
                    <a href="" className="Pic8">
                        <h3>Things</h3>
                    </a>
                    <a href="" className="Pic9 ">
                        <h3>Things</h3>
                    </a>
                    <div className="buy">
                        <a href =""><h3>Ver Catalogo</h3></a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Products