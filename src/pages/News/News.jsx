import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightsideNav from "../Shared/RightsideNav/RightsideNav";

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md: grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-3xl ">Dragon News</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightsideNav></RightsideNav>
                </div>
            </div>
        </div>
    );
};

export default News;