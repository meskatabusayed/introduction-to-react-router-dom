import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div>
            <h1>This is Home page</h1>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;