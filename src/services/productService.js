import api from '../lib/axios';
// import { toast } from 'sonner';

export const getAllProduct = async () =>{
    const res = api.get('/product')
    return res
}