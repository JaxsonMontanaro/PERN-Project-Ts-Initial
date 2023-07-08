import { createClient } from '@supabase/supabase-js';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ProgressBar } from 'react-loader-spinner';
import ImageGallery from 'react-image-gallery';
import './products.css';;

const supabase = createClient(
  'https://tvwekwohafzwojqwkuaw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2d2Vrd29oYWZ6d29qcXdrdWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDg4NDAsImV4cCI6MjAwMzU4NDg0MH0.hutfQaax4HpfhD-AiORLc4027L5xIK7E64YhGFtaeNE'
);

export default function Shirts() {
  const [shirts, setShirts] = useState({});
  const [isShirtsLoading, setIsShirtsLoading] = useState(true);
  const [updatedCount, setUpdatedCount] = useState(1);
  const [quantityInStock, setQuantityInStock] = useState(0);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getShirts();
  }, []);

  async function getShirts() {
    const { data, error } = await supabase
      .from('Products')
      .select()
      .eq('item_id', '1');
    setShirts(data);
    setQuantityInStock(data[0]?.quantity_in_stock || 0);
    setIsShirtsLoading(false);
  }

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setUpdatedCount(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addToCart(shirts[0].item_name, updatedCount, shirts[0].item_id);
    getShirts();
  };

  const shirtsImages = [
    {
      original: require('../assets/Shirts/shirt-1.png')
    },
    {
      original: require('../assets/Shirts/shirt-2.png')
    },
    {
      original: require('../assets/Shirts/shirt-3.png')
    },
    {
      original: require('../assets/Shirts/shirt-4.png')
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
        <ImageGallery items={shirtsImages} />
      </div>
      <div id="title-price">
        <h1 className="product-title">
          {isShirtsLoading ? loadingBar : shirts[0].item_name}
        </h1>
        <h1 className="product-price">
          ${isShirtsLoading ? loadingBar : shirts[0].price}
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
      <div className="quantity-in-stock">
        {quantityInStock} in Stock
      </div>
      </form>
    </div>
  );
}