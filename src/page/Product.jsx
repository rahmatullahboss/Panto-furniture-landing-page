import React, { useState } from 'react';
import Container from '../component/Container';
import Flex from '../component/Flex';
import Cart from '../component/Cart';
import products from '../products';

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className='pt-[94px] min-h-screen'>
      <Container>
        <h1 className='text-center text-3xl md:text-4xl text-[#1E1E1E] font-bold font-Pop pb-8'>Our Products</h1>
        
        {/* Category Filter Buttons */}
        <div className='bg-[#EEEEEE] max-w-2xl mx-auto mt-6 rounded-full py-3 md:py-4'>
          <Flex className="justify-around flex-wrap">
            {categories.map((category, index) => (
              <button 
                key={index}
                className={`py-1 px-3 md:py-2 md:px-4 rounded-full text-sm md:text-base transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-amber-600 text-white' 
                    : 'hover:bg-amber-700 hover:text-white'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </Flex>
        </div>
        
        {/* Products Grid */}
        <div className='pt-10 pb-16'>
          <Flex className='flex-wrap justify-center gap-6 md:gap-8'>
            {filteredProducts.map((item) => (
              <div key={item.id} className='w-full sm:w-[280px] md:w-[300px]'>
                <Cart 
                  text={item.name} 
                  heading={item.category} 
                  price={item.price} 
                  reting={item.rating} 
                  img={item.imageUrl} 
                />
              </div>
            ))}
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Product;