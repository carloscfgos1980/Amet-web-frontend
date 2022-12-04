import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fansData } from "./redux/gallerySlice";
import { motion } from 'framer-motion';



const Contact = () => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState({
        name: '',
        city: '',
        country: '',
        telephone: '',
        email: '',
        feedback: ''
    });
    const updateInput = (e) => {
        setStatus({
            ...status,
            [e.target.name]: e.target.value
        })
    }
    const fillForm = (e) => {
        e.preventDefault();
        //console.log(state)
        dispatch(fansData(status))

    }

    return (
        <motion.div className="bg-light py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1 className="display-5 text-center mt-2 mb-4">Contact</h1>
            <Form className="container-fluid">
                <div className="row justify-content-around align-items-end">
                    <div className="col-sm-3 ms-5">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                onChange={updateInput}
                                type="text" name="name" placeholder="Name & Last Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" name="city" onChange={updateInput} placeholder="City" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" name="country" onChange={updateInput} placeholder="Country" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" name="telephone" onChange={updateInput} placeholder="Telephone" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" name="email" onChange={updateInput} placeholder="Your email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </div>
                    <div className="col-sm-6 me-sm-5">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" name="feedback" onChange={updateInput} rows={6} placeholder="share your inputs" />
                        </Form.Group>
                    </div>

                </div>
            </Form>
            <div className="text-center me-5 mb-3">
                <span className="pe-5">
                    <Link to="/">
                        <h3 className="btn btn-secundary px-5 bg-dark text-light" onClick={() => fillForm} >
                            Submit
                        </h3>
                    </Link>
                </span>
            </div>
        </motion.div>
    );
}

export default Contact;