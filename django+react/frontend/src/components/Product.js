// import React from 'react'
// import { Card  } from 'react-bootstrap'
// import Rating from './Rating'
// import { Link } from 'react-router-dom'

// function Product({product}) {
//   return (
//     <Card className="my-3 p-3 rounded">
     
//      <Link to={`/product/${product._id}`}>
//         <Card.Img src={product.image}/>
//     </Link>

//     <Card.Body>
//     <Link to={`/product/${product._id}`}> 
//         <Card.Title as="div">
//             <strong>
//                 {product.name}
//             </strong>
//         </Card.Title>
//         </Link>
//         <Card.Text as="div">
//             <div className="my-3">

//               {/* {product.rating} from {product.numsReviews} reviews */}
//               <Rating value={product.rating} text={`${product.numsReviews} reviews`} color={'#f8e825'} />

//             </div>
//         </Card.Text>


//         <Card.Text as="h3">
//             ${product.price}
//         </Card.Text>
//     </Card.Body>
    
//     </Card>
//   )
// }

// export default Product
import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating'; // Import your Rating component here

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>

            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>

                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                </Card.Text>

                <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;