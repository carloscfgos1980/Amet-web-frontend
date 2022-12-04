import { Button, Card, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ClientTable = () => {
  const clientAllData = useSelector(state => state.data.clientAllData)
  //console.log("all data", clientAllData);
  const addedPainting = useSelector(state => state.data.addedPainting);
  let total = 0;
  addedPainting.forEach(paint => total += paint.price);

  const sold = {
    name: clientAllData.name,
    email: clientAllData.email,
    telephone: clientAllData.telephone,
    city: clientAllData.city,
    country: clientAllData.country,
    feedback: clientAllData.feedback,
    sold: [],

  }

  const sell = addedPainting.map(paint => {
    let clientDetails = {
      title: paint.title,
      rice: paint.price,
    }
    return clientDetails
  });

  sold.sold.push(sell);

  console.log("sold", sold)



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
                <td>Email:</td>
                <td>{clientAllData.email}</td>
              </tr>
              <tr>
                <td>Telephone:</td>
                <td>{clientAllData.telephone}</td>
              </tr>
              <tr>
                <td>City:</td>
                <td>{clientAllData.city}</td>
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
          <Button variant="success" >CONFIRM</Button>{' '}
        </Link>
      </div>
    </div>
  );
}

export default ClientTable;