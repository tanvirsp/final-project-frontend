import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import ProductStore from "../store/ProductStore";
import toast from "react-hot-toast";



const AddCategoryPage = () => {
    const navigate = useNavigate();
    const [categoryData, setCategoryData] = useState({});
    const {AddCategoryRequest} = ProductStore();


    const handleCategoryData = (name, value)=>{
        setCategoryData({
            ...categoryData,
            [name]:value
        })
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const result = await AddCategoryRequest(categoryData);
        if(result["status"] ==="success"){
            toast.success("Category Added Successfully");
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
            
            <label>Category Name</label>
            <input onBlur={(e)=>handleCategoryData("name", e.target.value)} type="text" className="form-control mb-2 p-3" required   />

            <label> Description</label>
            <input onBlur={(e)=>handleCategoryData("des", e.target.value)} type="text" className="form-control mb-2 p-3" required  />

            <label> Category Image URL</label>
            <input onBlur={(e)=>handleCategoryData("image", e.target.value)} type="text" className="form-control mb-2 p-3"  required />

            <input type="submit" value="Add A Category" className='btn btn-success w-100 p-3 mt-4' />



        </form>
        
    </section>
    );
};

export default AddCategoryPage;