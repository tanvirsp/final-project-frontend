
import { Outlet } from 'react-router-dom';
import Header from '../compoments/Header/Header';
import Footer from '../compoments/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
            <Toaster />
        </>
    );
};

export default MainLayout;