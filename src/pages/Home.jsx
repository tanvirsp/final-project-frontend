import { useEffect} from "react";
import ProductGroupCard from "../compoments/ProductGroupCard/ProductGroupCard";
import ProductStore from "../store/ProductStore";
import HeroSection from "../compoments/HeroSection/HeroSection";
import ShippingBanner from "../compoments/ShippingBanner/ShippingBanner";
import FilterProduct from "../compoments/FilterProduct/FilterProduct";

const Home = () => {
    const {ProductsRequest} = ProductStore();


    useEffect( ()=>{
        (async()=>{
            await ProductsRequest();

        })()

    },[])

    return (
        <div className="bg-light">
            <HeroSection />
            <ShippingBanner />
            <FilterProduct />
            <ProductGroupCard />
            
        </div>
    );
};

export default Home;