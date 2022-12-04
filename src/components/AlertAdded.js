import Alert from 'react-bootstrap/Alert';
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { switchFalse } from '../redux/gallerySlice';

const AlertAdded = () => {
    const dispatch=useDispatch();
    const closeAlert=()=>{
        dispatch(switchFalse());
    }
    return (
        <div className='text-justify'>
            <Alert style={{ width: '50%', margin: '0 auto' }} variant='warning'>
                <span>You have selected this peace. To undo the selection, please go the shopping cart and delete it.</span>
            <div className='text-end ms-5'>
                <span  
                    onClick={closeAlert}>
                    <AiFillCloseCircle/>
                </span>
            </div>
            </Alert>

    </div>
    );
}

export default AlertAdded;