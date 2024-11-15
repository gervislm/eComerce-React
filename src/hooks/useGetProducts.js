import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(API);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [API]);

  return products;
};

export default useGetProducts;
