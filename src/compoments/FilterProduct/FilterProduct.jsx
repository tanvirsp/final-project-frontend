import { useEffect, useState } from 'react';
import './FilterProduct.css';
import { IoSearchOutline } from "react-icons/io5";
import ProductStore from '../../store/ProductStore';

const FilterProduct = () => {
    const {Brands, BrandRequest, Categories, CategoryRequest, ListByFilterRequset, SearchKeywordRequest, SearchKeyword, SearchProductRequest} = ProductStore();

    const [filter, setFilter] = useState({
        brandID: "",
        categoryID: "",
    
      });

 

  useEffect( ()=>{
    (async()=>{
        Brands ===null && await BrandRequest();
        Categories ===null && await CategoryRequest();

        const isEveryfilterPropertyEmpty = Object.values(filter).every(value => value ==="");
        !isEveryfilterPropertyEmpty ? await ListByFilterRequset(filter): null
        
      
    } )()


  }, [filter])



      //handle input filter 
    const handleInputFilter =async(name, value) =>{
        setFilter( (data) =>({
        ...data,
        [name]: value
        
        } ));

    
    }

    //handle Search
    const handleSearch = async(e)=>{
        e.preventDefault();
        if(SearchKeyword.length > 0){
            await SearchProductRequest(SearchKeyword);
        }
        
    }




    return (
        <section>
            <div className="container bg-white mt-3">
                <div className="row align-items-center">
                    <div className="col-md-3 bg-success p-4">
                        <h5 className='text-white'>Product Filter:</h5>
                    </div>
                    <div className="col-md-3 p-4">
                        <select value={filter.brandID} onChange={async(e) => await handleInputFilter("brandID", e.target.value )  } 
                            className="form-control form-select">
                            <option value="">Choose Brand</option>
                            {
                                Brands !== null && Brands.map( (item, index) => <option key={index} value={item["_id"]}>{item["name"]} </option>)
                            }
                
                        </select>
                    </div>
                    <div className="col-md-3 p-4">
                        <select value={filter.categoryID} onChange={async(e) => await handleInputFilter("categoryID", e.target.value )} 
                            className="form-control form-select">
                            <option value="">Choose Category</option>
                            {
                                Categories !== null && Categories.map( (item, index) => <option key={index} value={item["_id"]}>{item["name"]} </option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-3 p-4">
                        <form className='search-form'>
                            <input onChange={(e)=>{SearchKeywordRequest(e.target.value)}}  className='form-control' type="text" name="" id="" placeholder='Search your product' />
                            <button onClick={handleSearch}><IoSearchOutline /> </button>
                        </form>
                    </div>
                </div>
                
            </div>
            
        </section>
    );
};

export default FilterProduct;