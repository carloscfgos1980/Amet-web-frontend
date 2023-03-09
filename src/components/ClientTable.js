import { Button, Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCustomerAsync, resetAddedPainting } from "../redux/gallerySlice";

const ClientTable = () => {
  const registerNumber = useSelector(state => state.data.registerNum);
  const clientAllData = useSelector(state => state.data.clientAllData)
  const addedPainting = useSelector(state => state.data.addedPainting);

  const dispatch = useDispatch()

  let total = 0;
  addedPainting.forEach(paint => total += paint.price);

  const client = {
    name: clientAllData.name,
    last_name: clientAllData.last_name,
    email: clientAllData.email,
    telephone: clientAllData.telephone,
    country: clientAllData.country,
    feedback: clientAllData.feedback,
    registerNum: registerNumber

  }
  const addClientData = () => {
    dispatch(addCustomerAsync(client))
    dispatch(resetAddedPainting())
  }

  return (
    <div className="container-lg">
      <div className="row justify-content-center align-items-end ">
        <div className="col-sm-8 my-1">
          <Table striped bordered hover >
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{clientAllData.name}</td>
              </tr>
              <tr>
                <td>Last Name:</td>
                <td>{clientAllData.last_name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{clientAllData.email}</td>
              </tr>
              <tr>
                <td>Telephone:</td>
                <td>{clientAllData.telephone}</td>
              </tr>
              <tr>
                <td>Country:</td>
                <td>{clientAllData.country}</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <Card className="col-sm-4 m-1">
          {addedPainting.map(paint => {

            return (
              <Card.Body key={paint.id}>
                <p>Paiting's title: {paint.title}</p>
                <p>Painting's price: {paint.price}</p>
              </Card.Body>
            )
          })}
        </Card>
        <Card className="col-sm-2 m-1">
          <Card.Body>TOTAL: {total}</Card.Body>
        </Card>
        <Link className="col-sm-1 ms-5 m-1" to="/success">
          <Button
            onClick={addClientData}
            variant="success"
          >CONFIRM</Button>{' '}
        </Link>
      </div>
    </div>
  );
}

export default ClientTable;