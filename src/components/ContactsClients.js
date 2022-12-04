import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clientData } from "../redux/gallerySlice";
import { motion } from 'framer-motion';

const ContactsClients = () => {
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
    const fillForm = () => {
        //console.log(status)
        dispatch(clientData(status))

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
            <h1 className="display-5 text-center my-2">Contacts</h1>
            <Form className="container-fluid" >
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
                    <div className="col-sm-6 me-5">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" name="feedback" onChange={updateInput} rows={6} placeholder="share your inputs" />
                        </Form.Group>
                    </div>
                    <div className="text-center me-5 mb-3">

                        <form className="pe-5" onClick={fillForm(status)}>
                            <Link to="/check-data">
                                <h3 className="btn btn-secundary px-5 bg-dark text-light"  >
                                    Submit
                                </h3>
                            </Link>
                        </form>

                    </div>
                </div>
            </Form>

        </motion.div>
    );
}

export default ContactsClients;