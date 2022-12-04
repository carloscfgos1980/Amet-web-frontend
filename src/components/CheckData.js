
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ClientTable from "./ClientTable";
import { motion } from 'framer-motion';

const CheckData = () => {

    return (
        <motion.div className="bg-light py-2"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: '100%', transition: { duration: 0.4 } }}
        >
            <Link to="/contacts-clients" >
                <div className="text-start ms-5">
                    <Button variant="warning">back</Button>{' '}
                </div>
            </Link>
            <h3 className="text-center py-2">Please, Check out if everything is correct</h3>
            <ClientTable />
        </motion.div>
    );
}

export default CheckData;