import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import DetailsPage from "../../Pages/DetailsPage/DetailsPage";
import AddService from "../../Pages/Home/Home/AddService/AddService";
import Blog from "../../Pages/Home/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import MyReview from "../../Pages/Home/Home/MyReview/MyReview";
import AllServices from "../../Pages/Home/Home/Services/AllServices";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/allservices',
            element:<AllServices></AllServices>,
            loader:() =>fetch('http://localhost:5000/allServices')
        },
        {
            path:'/details/:id',
            element:<DetailsPage></DetailsPage>,
            loader:({params}) => fetch(`http://localhost:5000/allServices/${params.id}`)
        },
        {
            path:"/myReview",
            element:(
                <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            )
        },
        {
            path:"/addService",
            element:(
                <PrivateRoutes><AddService></AddService></PrivateRoutes>
            )
        }
      ]
    }
  ]);

  export default router;