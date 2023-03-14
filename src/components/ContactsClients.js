import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addClientData } from "../redux/gallerySlice";
import { motion } from 'framer-motion';

const ContactsClients = () => {
    const registerNumber = useSelector(state => state.data.registerNum);
    const dispatch = useDispatch();
    const [status, setStatus] = useState({
        name: '',
        last_name: '',
        country: '',
        telephone: '',
        email: '',
        feedback: '',
        registerNum: registerNumber
    });
    const updateInput = (e) => {
        setStatus({
            ...status,
            [e.target.name]: e.target.value
        })
    }
    const fillForm = () => {
        dispatch(addClientData(status))
    }

    return (
        <motion.div className="bg-light py-2"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: '100%', transition: { duration: 0.4 } }}
        >
            <Link to="/shopping-cart" >
                <div className="text-start ms-5">
                    <Button variant="warning">back</Button>{' '}
                </div>
            </Link>
            <h1 className="display-5 text-center mt-2 mb-4">Contact</h1>
            <Form className="container-fluid">
                <div className="row justify-content-around align-items-end">
                    <div className="col-sm-3 ms-5">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                onChange={updateInput}
                                type="text" name="name" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" name="last_name" onChange={updateInput} placeholder="Last Name" />
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
                <form className="pe-5" onClick={fillForm}>
                    <Link to="/check-data">
                        <h3 className="btn btn-secundary px-5 bg-dark text-light">
                            Submit
                        </h3>
                    </Link>
                </form>
            </div>
        </motion.div>
    );
}

export default ContactsClients;

