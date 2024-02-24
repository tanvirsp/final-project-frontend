import { useNavigate, useParams } from "react-router-dom";
import ProductStore from "../../store/ProductStore";
import { useEffect } from "react";
import './ProductDetail.css';
import { BsArrowLeft } from "react-icons/bs";
import { GrEdit  } from "react-icons/gr";
import UserStore from "../../store/UserStore";

const ProductDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const { ProductDetail, ProductDetailRequest} = ProductStore();
    const { isLogin} = UserStore();

    useEffect( ()=>{
        (async()=>{
            await ProductDetailRequest(id);
         

        })();

    }, [id])


    if(ProductDetail === null){
        return <h3>Loading...</h3>
    }

    return (
        <section className="details-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="details-image">
                            <img src={ProductDetail["image"]} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="details-info">
                            <h3 className="text-success mb-2">{ProductDetail["name"]}</h3>
                            <h6>Category: {ProductDetail["category"]["name"]}</h6>
                            <h6>Brand: {ProductDetail["brand"]["name"]}</h6>
                            <p>{ProductDetail["des"]}</p>
                            {
                                isLogin() && <>
                                    <button onClick={()=> navigate("/products")} className='btn btn-outline-success px-4 mt-5'><BsArrowLeft /> Go Back </button>
                                    <button onClick={()=>navigate(`/update-form/${ProductDetail["_id"]}`)} className='btn btn-success px-4 mt-5 ms-2' title="Edit"><GrEdit /> </button>
                                </>
                            }
                            

                        </div>

                    </div>
                </div>
            </div>
            
            
        </section>
    );
};

export default ProductDetail;