import { createClient } from '@supabase/supabase-js';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ProgressBar } from 'react-loader-spinner';
import ImageGallery from 'react-image-gallery';
import './products.css';

const supabase = createClient(
  'https://tvwekwohafzwojqwkuaw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2d2Vrd29oYWZ6d29qcXdrdWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDg4NDAsImV4cCI6MjAwMzU4NDg0MH0.hutfQaax4HpfhD-AiORLc4027L5xIK7E64YhGFtaeNE'
);

export default function Shoes() {
  const [shoes, setShoes] = useState({});
  const [isShoesLoading, setIsShoesLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [updatedCount, setUpdatedCount] = useState(0);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getShoes();
  }, []);

  async function getShoes() {
    const { data, error } = await supabase
      .from('Products')
      .select()
      .eq('item_id', '3');
    setShoes(data);
    setIsShoesLoading(false);
  }

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setUpdatedCount(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCount(updatedCount);
    getShoes();
    addToCart(shoes[0].item_name, updatedCount);
  };

  const shoesImages = [
    {
      original: require('../assets/Shoes/shoes-1.png'),
    },
    {
      original: require('../assets/Shoes/shoes-2.png'),
    },
    {
      original: require('../assets/Shoes/shoes-3.png'),
    },
    {
      original: require('../assets/Shoes/shoes-4.png'),
    },
  ];

  const loadingBar = (
    <ProgressBar
      height="60"
      width="100"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#f6ebe0"
      barColor="#198fa5"
    />
  );

  return (
    <div>
      <div id="image-gallery">
        <ImageGallery items={shoesImages} />
      </div>
      <div id="title-price">
        <h1 className="product-title">
          {isShoesLoading ? loadingBar : shoes[0].item_name}
        </h1>
        <h1 className="product-price">
          ${isShoesLoading ? loadingBar : shoes[0].price}
        </h1>
      </div>
      <form className="add-to-cart-form" onSubmit={handleSubmit}>
        <label className="to-cart-label">
          <div className="quantity-input">
            <button
              className="minus-btn"
              type="button"
              onClick={() => {
                if (updatedCount > 0) {
                  setUpdatedCount(updatedCount - 1);
                }
              }}
            >
              -
            </button>
            <input
              id="input-field"
              type="number"
              value={updatedCount}
              onChange={handleInputChange}
            />
            <button
              className="add-btn"
              type="button"
              onClick={() => setUpdatedCount(updatedCount + 1)}
            >
              +
            </button>
          </div>
        </label>
        <button className="add-to-cart-btn" type="submit">
          Add to Cart
        </button>
      </form>
      <p>Cart: {count}</p>
    </div>
  );
}