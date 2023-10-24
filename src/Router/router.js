import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ADVTime from "../components/Header/ADVTime";
import AllProducts from "../components/pages/AllProducts/AllProducts";
import AddToCard from "../components/pages/AddToCard/AddToCard";
import NewArrivals from "../components/pages/NewARRIVALS/NewArrivals";
import ProductCatagorie from "../components/TrandingProduct/ProductCatagories";
import ErrorElement from "../components/pages/ErrorElement/ErrorElement";



const routes = createBrowserRouter([


    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorElement />,
        children: [
            { path: '/', element: <ADVTime /> },
            { path: '/all_product', element: <AllProducts /> },
            { path: '/add_to_card', element: <AddToCard /> },
            { path: '/New_arrivals', element: <NewArrivals /> },
            { path: '/trandint_product/:id', element: <ProductCatagorie /> }


        ]
    }
]);

export default routes;