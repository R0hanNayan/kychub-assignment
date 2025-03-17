import React, { useState } from "react";
import { Button} from "antd";
import ProductListModal from "./ProductListModal";
import "../styles.css";

const CompareProducts = ({ compareList, setCompareList }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const removeFromCompare = (id) => {
    setCompareList(compareList.filter(item => item.id !== id));
  };

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  return (
    <div className="content">
      <h2>Compare Products</h2>
      <div className="compare-table">
        {compareList.map((product) => (
          <div key={product.id} className="compare-card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p><b>Price:</b> ${product.price}</p>
            <p><b>Brand:</b> {product.brand}</p>
            <p><b>Category:</b> {product.category}</p>
            <Button type="danger" className="remove-button" onClick={() => removeFromCompare(product.id)}>Remove</Button>
          </div>
        ))}
      </div>
      {compareList.length < 4 && (
        <Button type="primary" className="add-more-button" onClick={showModal}>Add More</Button>
      )}
      <ProductListModal 
        visible={isModalVisible} 
        closeModal={hideModal} 
        compareList={compareList} 
        setCompareList={setCompareList} 
      />
    </div>
  );
};

export default CompareProducts;
