import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import ProductStore from "../../store/ProductStore";
import toast from "react-hot-toast";

const ProductUpdateForm = () => {
    
    const navigate = useNavigate();
    const {id}=  useParams();
    const [productData, setProductData] = useState({});
    
    const {ProductDetailRequest,UpdateProductRequest,  ProductDetail, Brands,BrandRequest,CategoryRequest,  Categories} = ProductStore();

    useEffect( ()=>{
        (async()=>{
            await ProductDetailRequest(id);
            Brands === null && await BrandRequest();
            Categories === null && await CategoryRequest();

        })();

    }, [id])

    
    const handleProductData = (name, value)=>{
        setProductData({
            ...productData,
            [name]:value
        })
    };

  

    const handleSubmit = async(e)=>{
        e.preventDefault();
       const result = await UpdateProductRequest(id, productData);
       if(result["status"] === "success"){
        toast.success("Product Update Successfully");
        navigate("/products")
        
       }else {
        toast.error(result["data"])
       }
        
    }


    if(ProductDetail === null){
        return <p>Loading...</p>
    }


    return (
        <section className="product-form">
            
            <button onClick={()=> navigate("/products")} className='btn btn-outline-success px-4 mb-3'><BsArrowLeft /> Go Back </button>
            <h4 className="text-center my-3 display-6">Prtoduct Update</h4>
            <form onSubmit={handleSubmit} >
                
                <label>Product Name</label>
                <input defaultValue={ProductDetail["name"]} onBlur={(e)=>handleProductData("name", e.target.value)} type="text" className="form-control mb-2 p-3" required   />

                <label> Description</label>
                <input defaultValue={ProductDetail["des"]} onBlur={(e)=>handleProductData("des", e.target.value)} type="text" className="form-control mb-2 p-3" required  />

                <label> Product Image URL</label>
                <input defaultValue={ProductDetail["image"]} onBlur={(e)=>handleProductData("image", e.target.value)} type="text" className="form-control mb-2 p-3"  required />

                
                <label> Select Brand</label>
                <select value={ProductDetail["brand"]["_id"]}  onChange={(e)=>handleProductData("brandID", e.target.value)}  className="form-select p-3" aria-label="Default select example">

                    <option >Select Brand</option>
                    {
                        Brands ===null ? "" : 
                            Brands.map( (item, index) => <option key={index} value={item["_id"]}>{item["name"]}</option> )
                    }
                    
                </select>

                <label> Select Category</label>
                <select value={ProductDetail["category"]["_id"]}   onChange={(e)=>handleProductData("categoryID", e.target.value)}   className="form-select p-3" >
                    <option >Select Category</option>
                    {
                        Categories ===null ? "" : 
                            Categories.map( (item, index) => <option key={index} value={item["_id"]}>{item["name"]}</option> )
                    }
                    
                </select>

                <input type="submit" value="Update" className='btn btn-success w-100 p-3 mt-4' />



            </form>
            
        </section>
    );
};

export default ProductUpdateForm;