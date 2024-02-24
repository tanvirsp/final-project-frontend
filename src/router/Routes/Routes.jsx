import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import MainLayout from "../../layout/MainLayout";
import LoginPage from "../../pages/LoginPage";
import SignUpPage from "../../pages/SignUpPage";
import VerifyOtpForm from "../../compoments/Form/VerifyOtpForm";
import ResetForm from "../../compoments/Form/ResetForm";
import ProfilePage from "../../pages/ProfilePage";
import ProductsPage from "../../pages/ProductsPage";
import ProductForm from "../../compoments/ProductForm/ProductForm";
import ProductUpdateForm from "../../compoments/ProductForm/ProductUpdateForm";
import ProductDetail from "../../compoments/ProductDetail/ProductDetail";
import ResetVerifyOtpForm from "../../compoments/Form/ResetVerifyOtpForm";
import ChangePasswordForm from "../../compoments/Form/ChangePasswordForm";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element:  <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path:"/signup",
                element: <SignUpPage />
            },
            {
                path:"/otp-form",
                element: <VerifyOtpForm />
            },
            {
                path:"/reset-password",
                element: <ResetForm />
            },
            {
                path:"/reset-verify-otp",
                element: <ResetVerifyOtpForm />
            },
            {
                path:"/change-password-form",
                element: <ChangePasswordForm />
            },
            {
                path:"/profile",
                element: <ProfilePage />
            },
            {
                path:"/products",
                element: <PrivateRoute> <ProductsPage /> </PrivateRoute> 
            },
            {
                path:"/product-form",
                element: <ProductForm />
            },
            {
                path:"/update-form/:id",
                element: <ProductUpdateForm />
            },
            {
                path:"/details/:id",
                element: <ProductDetail />
            }
           


        ]

    }
])

export default router;