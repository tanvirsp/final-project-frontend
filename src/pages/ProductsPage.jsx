import { useEffect } from "react";
import FilterProduct from "../compoments/FilterProduct/FilterProduct";
import ProductDisplayTable from "../compoments/ProductDisplayTable/ProductDisplayTable";
import ProductTopBar from "../compoments/ProductTopBar/ProductTopBar";
import ProductStore from "../store/ProductStore";

const ProductsPage = () => {
    const {ProductsRequest} = ProductStore();


    useEffect( ()=>{
        (async()=>{
            await ProductsRequest();

        })()

    },[])
    

    return (
        <section className="container">
            <ProductTopBar />
            <FilterProduct />
            <ProductDisplayTable />
        </section>
    );
};

export default ProductsPage;