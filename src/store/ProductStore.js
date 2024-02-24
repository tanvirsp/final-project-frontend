import {create} from 'zustand';
import axios  from "axios";






const ProductStore = create( (set) =>({

    Products:null,
    ProductsRequest: async() =>{
        const result = await axios.get(`http://localhost:5000/api/v1/products`);
        set({Products: result["data"]["data"]})

    },

    AddProductsRequest: async(data) =>{
        const result = await axios.post(`http://localhost:5000/api/v1/product`, data, {withCredentials: true});
        return result["data"]

    },

    UpdateProductRequest:  async(id, data) =>{
        const result = await axios.post(`http://localhost:5000/api/v1/update-product/${id}`, data, {withCredentials: true} );
        return result["data"]
    },

    
    DeleteProductRequest:  async(id) =>{
        const result = await axios.delete(`http://localhost:5000/api/v1/product/${id}`, {withCredentials: true});
        return result["data"]
    },


    ProductDetail: null,
    ProductDetailRequest: async(id)=>{
        set({ProductDetail: null});
        const result = await axios.get(`http://localhost:5000/api/v1/product-details/${id}` );
        set({ProductDetail: result["data"]["data"][0]})
    },


    Brands:null,
    BrandRequest: async() =>{
        const result = await axios.get(`http://localhost:5000/api/v1/brands`);
        set({Brands: result["data"]["data"]})

    },

    Categories:null,
    CategoryRequest: async() =>{
        const result = await axios.get(`http://localhost:5000/api/v1/categories`);
        set({Categories: result["data"]["data"]})
    },


    ListByFilterRequset: async(filter) =>{
        set({Products: null})
        const result = await axios.post(`http://localhost:5000/api/v1/product-by-filter`, filter);
        set({Products: result["data"]["data"]})
    },

    SearchKeyword:"",
    SearchKeywordRequest : async (keyword)=>{
        set({SearchKeyword: keyword});
    },


    SearchProductRequest: async(keyword) =>{
 
        const result = await axios.get(`http://localhost:5000/api/v1/search/${keyword}`);
        if(result.data['status'] ==="success"){
            set({Products: result["data"]["data"]})
        }
    },


    


   
   


}));



export default ProductStore;