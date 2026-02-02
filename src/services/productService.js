import api from '../lib/axios';


const productSearch = async (queryString = "") => {
  const res = await api.get(`/product/search?${queryString}`);
  return res.data;
};

const productGetAll = async () =>{
    const res = await api.get(`/product`)
    return res.data
}
const productGetById = async (id) =>{
    const res = await api.get(`/product/${id}`)
    return res.data
}

const productService = {
    productSearch,
    productGetAll,
    productGetById,
}

export default productService