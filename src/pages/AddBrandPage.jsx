import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import ProductStore from "../store/ProductStore";
import toast from "react-hot-toast";



const AddBrandPage = () => {
    const navigate = useNavigate();
    const [brandData, setBrandData] = useState({});
    const {AddBrandRequest} = ProductStore();


    const handleBrandData = (name, value)=>{
        setBrandData({
            ...brandData,
            [name]:value
        })
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const result = await AddBrandRequest(brandData);
        if(result["status"] ==="success"){
            toast.success("Brand Added Successfully");
            e.target.reset();
        }else {
            toast.error(result["data"])
        }
        
       
        
    }


    return (
        <section className="product-form">
        <button onClick={()=> navigate("/products")} className='btn btn-outline-success px-4 mb-3'><BsArrowLeft /> Go Back </button>
        <h4 className='text-center'>Add A Brand</h4>
        <form onSubmit={handleSubmit} >
            
            <label>Brand Name</label>
            <input onBlur={(e)=>handleBrandData("name", e.target.value)} type="text" className="form-control mb-2 p-3" required   />

            <label> Description</label>
            <input onBlur={(e)=>handleBrandData("des", e.target.value)} type="text" className="form-control mb-2 p-3" required  />

            <label> Brand Image URL</label>
            <input onBlur={(e)=>handleBrandData("image", e.target.value)} type="text" className="form-control mb-2 p-3"  required />

            <input type="submit" value="Add A Brand" className='btn btn-success w-100 p-3 mt-4' />



        </form>
        
    </section>
    );
};

export default AddBrandPage;