
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/assets/qZone1.png'
import qZone2 from '../../../assets/assets/qZone2.png'
import qZone3 from '../../../assets/assets/qZone3.png'

const RightSiteNav = () => {
    return (
        <div>


            <div className='p-4 space-y-4 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">

                    <FaGoogle></FaGoogle>

                    Login With Google
                </button>

                <button className="btn btn-outline w-full">

                    <FaGithub></FaGithub>
                    Login With Google
                </button>
            </div>


            <div className='p-4  mb-6'>
                <h2 className="text-3xl mb-4">Find us on</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href='p-4'>
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href='p-4'>
                    <FaTwitter className='mr-3'></FaTwitter>
                    Twitter
                </a>

                <a className='p-4 flex text-lg items-center border rounded-t-lg' href='p-4'>
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
            </div>

            {/* q zone */}


            <div className='p-4 space-y-4 mb-6'>
                <h2 className="text-3xl">Q zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
               

               
            </div>








        </div>


    );
};

export default RightSiteNav;