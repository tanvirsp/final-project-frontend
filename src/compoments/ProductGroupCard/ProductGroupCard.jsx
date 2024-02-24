
import ProductStore from '../../store/ProductStore';
import './ProductGroupCard.css';
import { CiShoppingCart, CiHeart  } from "react-icons/ci";
import { PiEye } from "react-icons/pi";
import { IoIosGitCompare } from "react-icons/io";


const ProductGroupCard = () => {

    const {Products} = ProductStore();


    return (
        <section className='display-group-section'>
            <div className="container">
                
                {
                    Products === null ? <p>Loading</p>:(
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
                                                <span><PiEye /> </span>
                                                <span><IoIosGitCompare /> </span>

                                            </div>
                                        </div>
                                    </div>
                                )
                              })  
                            }
                        </div>
                    )
                    
                }
                
            </div>
            
        </section>
    );
};

export default ProductGroupCard;