import api from '../lib/axios';


const productGetAll = async () =>{
    const res = await api.get('/product')
    return res.data
}
const productGetById = async (id) =>{
    const res = await api.get(`/product/${id}`)
    return res.data
}

const productService = {
    productGetAll,
    productGetById,
}

export default productService