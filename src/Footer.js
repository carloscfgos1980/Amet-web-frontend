import logo from "./Amet_Logo.png";
import { FaRegAddressBook } from 'react-icons/fa';
import { BsTelephonePlus } from 'react-icons/bs';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { TfiInstagram } from 'react-icons/tfi';
import { AiOutlineLinkedin, AiOutlineFacebook, AiFillTwitterSquare } from 'react-icons/ai';



const Footer = () => {


    function Mailto({ email, subject, body, ...props }) {
        return (
            <a className="text-light" href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
                {props.children}
            </a>
        );
    }
    return (
        <div className="container-fluid bg-dark py-3">
            <div className="container-xxl">
                <div className="row justify-content-between align-items-start ">
                    <div div className="col-sm-4 text-center py-2">
                        <img src={logo}
                            width="20%"
                            className="d-inline-block align-top"
                            alt="Logo" />
                    </div>
                    <div div className="display-3 col-sm-4 text-center py-2">
                        <h3 className="text-light pb-1">Contact us</h3>
                        <p className="text-light lead text-start"><FaRegAddressBook /> Heukestraat 8, Zutphen, The Netherlands</p>
                        <p className="text-light lead text-start"><BsTelephonePlus />  +31612779027</p>

                        <Mailto className="text-light lead text-start" email="am3tarte@gmail.com">
                            <p className="text-light lead text-start">
                                <MdOutlineMarkEmailRead /> am3tarte@gmail.com
                            </p>
                        </Mailto>

                    </div>
                    <div className="col-sm-3 text-center py-2">
                        <h3 className="text-light py-1">Follow us</h3>
                        <a className="text-light px-1" href='https://www.instagram.com/ametlaza/?hl=es'>
                            <TfiInstagram />
                        </a >
                        <a className="text-light px-1 lead" href='https://www.linkedin.com/in/amet-laza-mu%C3%B1oz-22b397112?originalSubdomain=nl'>
                            <AiOutlineLinkedin />
                        </a>
                        <a className="text-light px-1 lead" href='https://www.facebook.com/people/Amet-laza-mu%C3%B1oz/100063895069604/'>
                            <AiOutlineFacebook />
                        </a>
                        <a className="text-light px-1 lead" href='https://twitter.com/ametlazamuoz'>
                            <AiFillTwitterSquare />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;