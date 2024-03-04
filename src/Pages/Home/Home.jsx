import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navber from "../shared/Navber/Navber";
import RightSiteNav from "../shared/RightSiteNav/RightSiteNav";
import BreakingNews from "./BreakingNews";

const Home = () => {      
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <h2 className="text-3xl font-poppins font-bold">This is home</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-4xl">news comming soon</h2>
                </div>
                <div className="border">
                <RightSiteNav></RightSiteNav>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;