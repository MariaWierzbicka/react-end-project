import { Row, Col } from 'react-bootstrap';
import Tables from '../../features/Tables/Tables';

const Home = () => {

  return (
    <>
    <Row className="justify-content-between align-items-center">
      <Col xs="9">
      <h1 className="py-3">All tables</h1>      
      </Col>
    </Row>
    <Tables />
    </>
  )
};

export default Home;