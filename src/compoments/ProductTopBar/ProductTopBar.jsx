import { useNavigate } from "react-router-dom";

const ProductTopBar = () => {
    const navigate = useNavigate();


    return (
        <div className="d-flex justify-content-between align-items-center p-5 bg-light my-4">
            <h2>Product Inventory</h2>
            <button onClick={() => navigate("/product-form")} className="btn btn-success p-3">Add New Product</button>
            
        </div>
    );
};

export default ProductTopBar;