import { Form, Button, Col, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import styles from './TableForm.module.scss';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { getAllStatuses } from '../../../redux/statusRedux';
import shortid from 'shortid';


const TableForm = props => {
  
  const tableData = useSelector(state => getTableById(state, props.id));
  const allStatuses = useSelector(state => getAllStatuses(state));
  console.log(tableData);


  const [status, setStatus] = useState(tableData.status);
  const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
  const [maxPeopleAmount] = useState(tableData.maxPeopleAmount);
  const [bill, setBill] = useState(tableData.bill);

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Col md={5} sm={12}>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            {...register("title", { required: true, minLength: 3 })}
            type="text"
            value={title}
            placeholder="Type title"
            onChange={e => setTitle(e.target.value)}/>
        </Form.Group> */}
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            <span>Status:</span>
          </Form.Label>
          <Col sm={8}>
          <Form.Select value={status} onChange={e => setStatus(e.target.value) }>
            {allStatuses.map(status =>
                <option key={shortid()}>{status}</option>
            )}
          </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            <span>People:</span>
          </Form.Label>
          <Col sm={2}>
            <Form.Control type="text" />
          </Col>
          <Col sm={1} className={styles.text}>/</Col>
          <Col sm={2}>
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            <span>Bill:</span>
          </Form.Label>
          <Col sm={1} className="pt-1 pr-0">$</Col>
          <Col sm={2} className="p-0">
            <Form.Control type="text" />
          </Col>
        </Form.Group>
      </Col>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  )
}
export default TableForm;