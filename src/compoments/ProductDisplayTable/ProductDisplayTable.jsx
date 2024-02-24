import './ProductDisplayTable.css';
import { GrView, GrEdit  } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import ProductStore from '../../store/ProductStore';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const ProductDisplayTable = () => {
    
    const {ProductsRequest, DeleteProductRequest,  Products} = ProductStore();
    const navigate = useNavigate();


   
  
    const handleDelete =(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#198754",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                (async()=>{
                    const result = await DeleteProductRequest(id);
                    if(result["status"] ==="success"){
                        await ProductsRequest(id);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Product has been deleted.",
                            icon: "success"
                          });
                    }
                })()
               
            }
          });
    }

  

    return (
        <section className="container table-responsive">
            
            <table className="table align-middle table-hover">
                <thead>
                    <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    Products === null? <tr> <td colSpan="6">Loading</td> </tr>:  
                    Products.length === 0 ?  <tr> <td colSpan="6">Your Store is Empty</td> </tr> : 
                    Products.map( (item, index) =>{
                            return <tr key={index} >
                                        <th scope="row">{index + 1}</th>
                                        <td> <img className='list-product-img' src={item["image"]} alt={item?.name} /> </td>
                                        <td>{item["name"]}</td>
                                        <td>{item["category"]["name"]}</td>
                                        <td>{item["brand"]["name"]  }</td>
                                        <td className="action-btn"> 
                                            <GrView  onClick={()=>navigate(`/details/${item["_id"]}`)} title="View" /> 
                                            <GrEdit onClick={()=>navigate(`/update-form/${item["_id"]}`)} title="Edit" /> 
                                            <RiDeleteBin5Line onClick={()=>handleDelete(item["_id"])} title="Delete" /> </td>
                                    </tr>
                        })
                    }
                    
                </tbody>
            </table>
            
        </section>
    );
};

export default ProductDisplayTable;