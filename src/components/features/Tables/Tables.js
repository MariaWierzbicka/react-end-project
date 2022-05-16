import { Container, Col, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';
import shortid from 'shortid';
import { useSelector } from 'react-redux';
import { getTables } from '../../../redux/tablesRedux';


const Tables = () => {
  const tables = useSelector(state => getTables(state));

  return (
    <Container>
        {tables.map(table =>
          <Row key={shortid()} className="border-bottom py-4 justify-content-between align-items-center">
            <Col xs="4">
              <Row className="align-items-center">
                <Col className="p-0">
                  <h2 className="m-0">Table {table.id}</h2>
                </Col>
                <Col>
                  <p className="m-0"><span>Status: </span>{table.status}</p>
                </Col>
              </Row>
            </Col>
            <Col xs="2">
              <Link to={'/table/' + table.id}>
                <Button>Show more</Button>
              </Link>
            </Col>
          </Row>
        )}
    </Container>
  )
}
export default Tables;