import { useEffect, useState } from 'react';
import ProductStore from '../../store/ProductStore';
import './ProductForm.css'
import toast from 'react-hot-toast';
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    const navigate = useNavigate();
    const {Brands, BrandRequest, Categories, CategoryRequest, AddProductsRequest} = ProductStore();

    useEffect(()=>{

        ( async()=>{
            await BrandRequest();
            await CategoryRequest();
        })()
    } ,[])


    const [productData, setProductData] = useState({});

    const handleProductData = (name, value)=>{
        setProductData({
            ...productData,
            [name]:value
        })
    };


    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        const result = await AddProductsRequest(productData);
        if(result["status"] ==="success" ){
            toast.success('Product Added Successfully');
            e.target.reset();
        } else {
            toast.error(result["data"])
        }
        
    }



    return (
        <section className="product-form">
            <button onClick={()=> navigate("/products")} className='btn btn-outline-success px-4 mb-3'><BsArrowLeft /> Go Back </button>
            <form onSubmit={handleSubmit} >
                
                <label>Product Name</label>
                <input onBlur={(e)=>handleProductData("name", e.target.value)} type="text" className="form-control mb-2 p-3" required   />

                <label> Description</label>
                <input onBlur={(e)=>handleProductData("des", e.target.value)} type="text" className="form-control mb-2 p-3" required  />

                <label> Product Image URL</label>
                <input onBlur={(e)=>handleProductData("image", e.target.value)} type="text" className="form-control mb-2 p-3"  required />

                
                <label> Select Brand</label>
                <select  onChange={(e)=>handleProductData("brandID", e.target.value)}  className="form-select p-3" aria-label="Default select example">
                    <option  >Select Brand</option>
                    {
                        Brands ===null ? "" : 
                            Brands.map( (item, index) => <option key={index} value={item["_id"]}>{item["name"]}</option> )
                    }
  
                </select>

                <label> Select Category</label>
                <select  onChange={(e)=>handleProductData("categoryID", e.target.value)}   className="form-select p-3" aria-label="Default select example">
                    <option  >Select Category</option>
                    {
                        Categories ===null ? "" : 
                        Categories.map( (item, index) => <option key={index} value={item["_id"]}>{item["name"]}</option> )
                    }
                </select>

                <input type="submit" value="Add To Store" className='btn btn-success w-100 p-3 mt-4' />



            </form>
            
        </section>
    );
};

export default ProductForm;