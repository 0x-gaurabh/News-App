import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ItemDetail = ({ item = [] }) => {
  const [product, setProduct] = useState([]);
  const { term } = useParams();

  useEffect(() => {
    const filterProduct = item.filter((item) => item.author === term);
    setProduct(filterProduct);
  }, [term, item]);
  console.log(product);

  return (
    <div className="max-w-7xl mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6 text-center">Articles by {term}</h1>
    {product.length > 0 ? (
      product.map((prod, index) => (
        <div key={index} className="my-4 p-6 bg-white border rounded shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">{prod.title}</h2>
          <p className="text-gray-600 mb-4">{prod.description}</p>
          <p className="text-gray-500 mb-4"><strong>Published at:</strong> {new Date(prod.publishedAt).toLocaleString()}</p>
          <div className="flex justify-center">
            <img src={prod.urlToImage} alt={prod.title} className="w-[500px] h-72 mt-4 rounded-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500">No articles found for this author.</p>
    )}
  </div>
  );
}

export default ItemDetail;
