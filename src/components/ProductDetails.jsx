import React, { useEffect, useState } from "react";
import { Table, Button, Image } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const ProductDetails = ({ compareList, setCompareList }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      });
  }, []);

  const addToCompare = (product) => {
    if (compareList.length < 4 && !compareList.some(item => item.id === product.id)) {
      setCompareList([...compareList, product]);
      navigate("/compare");
    }
  };

  const columns = [
    { title: "Image", dataIndex: "thumbnail", render: (src) => <Image width={50} src={src} /> },
    { title: "Title", dataIndex: "title", sorter: (a, b) => a.title.localeCompare(b.title) },
    { title: "Description", dataIndex: "description" },
    { title: "Price ($)", dataIndex: "price", sorter: (a, b) => a.price - b.price },
    { title: "Brand", dataIndex: "brand" },
    { title: "Category", dataIndex: "category" },
    {
      title: "Compare",
      dataIndex: "id",
      render: (_, record) => (
        <Button 
          type="primary"
          disabled={compareList.some(item => item.id === record.id)}
          onClick={() => addToCompare(record)}
        >
          Compare
        </Button>
      ),
    },
  ];

  return (
    <div className="content">
      <h2>Product Details</h2>
      <Table 
        columns={columns} 
        dataSource={products} 
        loading={loading} 
        rowKey="id" 
        pagination={{ pageSize: 4, showSizeChanger: true, showQuickJumper: true, pageSizeOptions: [4, 8, 12] }} 
      />
    </div>
  );
};

export default ProductDetails;
