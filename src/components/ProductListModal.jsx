import React, { useEffect, useState } from "react";
import { Modal, Table, Button } from "antd";
import axios from "axios";

const ProductListModal = ({ visible, closeModal, compareList, setCompareList }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
    }
  };

  const columns = [
    { title: "Title", dataIndex: "title" },
    { title: "Brand", dataIndex: "brand" },
    { title: "Category", dataIndex: "category" },
    {
      title: "Action",
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
    <Modal visible={visible} title="Add More Products" onCancel={closeModal} footer={null}>
      <Table 
        columns={columns} 
        dataSource={products} 
        loading={loading} 
        rowKey="id" 
        pagination={{ pageSize: 5 }} 
      />
    </Modal>
  );
};

export default ProductListModal;
