import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../component/Container';
import Flex from '../component/Flex';
import products from '../products';
import { IoIosStar } from 'react-icons/io';
import { FaPlus, FaMinus, FaShoppingBag } from 'react-icons/fa';
import Image from '../component/Image';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find(item => item.id === parseInt(productId));
  
  const [quantity, setQuantity] = useState(1);
  
  // Handle case where product is not found
  if (!product) {
    return (
      <section className='pt-[94px] min-h-screen bg-gray-50'>
        <Container>
          <div className='text-center py-12'>
            <h2 className='text-2xl text-gray-600'>Product not found</h2>
            <p className='text-gray-500 mt-2'>The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/product" className='mt-4 inline-block text-blue-600 hover:underline'>Back to Products</Link>
          </div>
        </Container>
      </section>
    );
  }
  
  // Render stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<IoIosStar key={i} className='text-yellow-400' />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<IoIosStar key={i} className='text-yellow-400' />);
      } else {
        stars.push(<IoIosStar key={i} className='text-gray-300' />);
      }
    }
    return stars;
  };
  
  const handleQuantityChange = (value) => {
    if (quantity + value > 0) {
      setQuantity(quantity + value);
    }
  };
  
  return (
    <section className='pt-[94px] min-h-screen bg-gray-50'>
      <Container>
        {/* Header similar to Product page */}
        <h1 className='text-center text-3xl md:text-4xl text-[#1E1E1E] font-bold font-Pop pb-8 pt-6'>Product Details</h1>
        
        <div className='py-12'>
          <Flex className='flex-col md:flex-row gap-8 md:gap-12'>
            {/* Product Image */}
            <div className='w-full md:w-1/2'>
              <div className='bg-[#fafafa] border border-gray-200 rounded-lg p-8 h-[400px] md:h-[500px] flex items-center justify-center'>
                <Image 
                  className='max-h-full max-w-full object-contain' 
                  src={product.imageUrl}
                />
              </div>
            </div>
            
            {/* Product Details */}
            <div className='w-full md:w-1/2'>
              <div className='bg-white p-6 md:p-8 rounded-lg border border-gray-200'>
                <p className='text-sm md:text-base text-gray-600 mb-2'>{product.category}</p>
                <h1 className='text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-4'>{product.name}</h1>
                
                <Flex className='items-center gap-2 mb-6'>
                  <Flex className='gap-1'>
                    {renderStars()}
                  </Flex>
                  <span className='text-sm text-gray-600'>({product.rating})</span>
                </Flex>
                
                <p className='text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-6'>${product.price}</p>
                
                <p className='text-gray-600 mb-8'>
                  {product.description}
                </p>
                
                <div className='mb-8'>
                  <h3 className='text-lg font-semibold text-[#1E1E1E] mb-3'>Quantity</h3>
                  <Flex className='items-center gap-4'>
                    <Flex className='items-center border border-gray-300 rounded-lg'>
                      <button 
                        className='px-4 py-2 text-gray-600 hover:bg-gray-100'
                        onClick={() => handleQuantityChange(-1)}
                      >
                        <FaMinus />
                      </button>
                      <span className='px-4 py-2'>{quantity}</span>
                      <button 
                        className='px-4 py-2 text-gray-600 hover:bg-gray-100'
                        onClick={() => handleQuantityChange(1)}
                      >
                        <FaPlus />
                      </button>
                    </Flex>
                    
                    <button className='flex items-center gap-2 bg-black hover:bg-black/80 text-white px-6 py-2 rounded-lg transition duration-300'>
                      <FaShoppingBag />
                      <span>Add to Cart</span>
                    </button>
                  </Flex>
                </div>
                
                <div className='border-t border-gray-200 pt-6'>
                  <h3 className='text-lg font-semibold text-[#1E1E1E] mb-3'>Product Details</h3>
                  <ul className='text-gray-600 space-y-2'>
                    <li className='flex'>
                      <span className='w-32 font-medium'>Category:</span>
                      <span>{product.category}</span>
                    </li>
                    <li className='flex'>
                      <span className='w-32 font-medium'>Material:</span>
                      <span>Wood, Fabric</span>
                    </li>
                    <li className='flex'>
                      <span className='w-32 font-medium'>Dimensions:</span>
                      <span>30" x 30" x 30"</span>
                    </li>
                    <li className='flex'>
                      <span className='w-32 font-medium'>Weight:</span>
                      <span>15 kg</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Flex>
          
          {/* Related Products */}
          <div className='mt-16'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-8 text-center'>Related Products</h2>
            <div className='text-center py-8 text-gray-500'>
              <p>Related products will be displayed here</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SingleProduct;