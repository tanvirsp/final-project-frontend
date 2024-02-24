
import ProductStore from '../../store/ProductStore';
import './ProductGroupCard.css';
import { CiShoppingCart, CiHeart  } from "react-icons/ci";
import { PiEye } from "react-icons/pi";
import { IoIosGitCompare } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const ProductGroupCard = () => {

    const {Products} = ProductStore();
    const navigate = useNavigate()

    return (
        <section className='display-group-section'>
            <div className="container">
                
                {
                    Products === null ? <p>Loading</p>:
                    Products.length > 0 ? (
                        <div className="row">
                            {
                              Products.map( (item, index) =>{
                                return(
                                    <div key={index} className='col-md-3'>
                                        <div className="product-card">
                                            <span className="batch">New</span>
                                            <img src={item["image"]} alt="Product" />
                                            <div className="card-text">
                                                <p className="porduct-category">{item["category"]["name"]}</p>
                                                <h5 className="product-title">{item["name"]}</h5>
                                                <h6><del>450</del> <span className="price">526</span></h6>
                                            </div>
                                            <div className="action-icon">
                                                <span><CiShoppingCart /> </span>
                                                <span><CiHeart /> </span>
                                                <span><PiEye  onClick={()=>navigate(`/details/${item["_id"]}`)} /> </span>
                                                <span><IoIosGitCompare /> </span>

                                            </div>
                                        </div>
                                    </div>
                                )
                              })  
                            }
                        </div>
                    ): <h6>No product in your store</h6>
                    
                    
                }
                
            </div>
            
        </section>
    );
};

export default ProductGroupCard;