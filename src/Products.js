import React, { Component } from 'react';
import './Products.css'

class Products extends Component{
    constructor(props){
        super(props);

        this.state={
            slideCount:1
        };
    }

    render(){
        return(
            <div className="products">
                <p>Que ofrecemos?</p>
                <h2>Nuestros Productos</h2>
                <div className = "grid">
                    <div className="row">
                        <div className="column">
                            <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5BZi4gZTaBd83MhlyJ2dHHG0IYCykDyqmIMFVOJVGGygoNc"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfb8aQmZv2SCrmNEZSg5lxh6XA_OQmFhipy7Xcmht29xCVjJ6"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5BZi4gZTaBd83MhlyJ2dHHG0IYCykDyqmIMFVOJVGGygoNc"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5BZi4gZTaBd83MhlyJ2dHHG0IYCykDyqmIMFVOJVGGygoNc"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5BZi4gZTaBd83MhlyJ2dHHG0IYCykDyqmIMFVOJVGGygoNc"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5BZi4gZTaBd83MhlyJ2dHHG0IYCykDyqmIMFVOJVGGygoNc"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5BZi4gZTaBd83MhlyJ2dHHG0IYCykDyqmIMFVOJVGGygoNc"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5BZi4gZTaBd83MhlyJ2dHHG0IYCykDyqmIMFVOJVGGygoNc"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5BZi4gZTaBd83MhlyJ2dHHG0IYCykDyqmIMFVOJVGGygoNc"/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Products