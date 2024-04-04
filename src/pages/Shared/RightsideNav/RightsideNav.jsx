import { FaGoogle, FaInstagram, FaTwitter,FaGithub,FaFacebook } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightsideNav = () => {
    return (
        <div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub />
                    Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl mb-6">Find Us On</h2>
                <a href="" className="p-4 flex items-center text-lg border rounded-b-lg">
                 <FaFacebook className="mr-2" />
                 <span>  Facebook</span>
                </a>
                <a href="" className="p-4 flex items-center text-lg border-x rounded-t-lg">
                 <FaTwitter className="mr-2" />
                 <span> Twitter</span>
                </a>
                <a href="" className="p-4 flex items-center text-lg border rounded-b-lg">
                 <FaInstagram className="mr-2" />
                 <span>  Instagram</span>
                </a>
            </div>
            {/* q zone */}
               <div className="p-4 mb-6">
                <h2 className="text-3xl">Q zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div> 
    );
};

export default RightsideNav;