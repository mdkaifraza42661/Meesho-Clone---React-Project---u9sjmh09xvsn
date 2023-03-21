import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

const Product = () => {
    const temp = useParams();
    const [product, setproductsDetails] = useState({});
    let productdetails = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/1`;
    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            setproductsDetails(data)
        } catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchApiData(productdetails)
    }, [])
    return (
        <div className='product-container'>
            <div className='product-image'>
                <div className='product-smallimage'>
                    <img src={product.image} />
                </div>
                <div className='product-largeimage'><img src={product.image} />
                    <button >add to cart</button>
                </div>
            </div>
            <div className='product-discription'>
                <div className='product-price'>
                    <h4>{product.title}</h4>
                    <h1>₹{product.price}</h1>
                    <div>Free Delevery</div>
                    <div className='product-rating'> <div><p>{product.rating && product.rating.rate}</p></div><h3> &nbsp;{product.rating && product.rating.count}&nbsp;Review</h3></div>
                </div>
                <div className='product-detail'>
                    <div>
                        <h1>Product detail</h1>
                        <p>{product.description}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Product