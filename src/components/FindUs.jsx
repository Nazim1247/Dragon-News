import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";



const FindUs = () => {
    return (
        <div className="mt-6">
            <h2 className="font-semibold mb-4">Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn join-item justify-start">
                    <FaFacebook></FaFacebook>
                    Facebook
                </button>
                <button className="btn join-item justify-start">
                    <FaInstagramSquare />
                    Instagram
                </button>
                <button className="btn join-item justify-start">
                    <FaTwitter></FaTwitter>
                    Twitter
                </button>
            </div>
        </div>
    );
};

export default FindUs;