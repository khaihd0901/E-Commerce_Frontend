import api from '../lib/axios';


export const getAllProduct = async () =>{
    const res = api.get('/product')
    return res
}