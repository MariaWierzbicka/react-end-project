import { Row, Col, Spinner } from 'react-bootstrap';
import Tables from '../../features/Tables/Tables';
import { getTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';


const Home = () => {
  const tables = useSelector(state => getTables(state));

  return (
    <>
      <Row className="justify-content-between align-items-center">
        <Col xs="9">
        <h1 className="py-3">All tables</h1>      
        </Col>
      </Row>
      {tables.length < 1 &&
        <div className="text-center py-5 mb-5"><Spinner animation="border" variant="primary" /> </div> }
      {!tables.length < 1 && <Tables />}
    </>
  )
};

export default Home;