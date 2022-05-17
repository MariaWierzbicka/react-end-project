import { Form, Button, Col, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import styles from './TableForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { changeTable } from '../../../redux/tablesRedux';
import { getAllStatuses } from '../../../redux/statusRedux';
import shortid from 'shortid';
import clsx from 'clsx';
import propTypes from 'prop-types';

const TableForm = props => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allStatuses = useSelector(state => getAllStatuses(state));

  const id = props.id;
  const [status, setStatus] = useState(props.status);
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
  const [bill, setBill] = useState(props.bill);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changeTable({id, status, peopleAmount, maxPeopleAmount, bill}));
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Col md={5} sm={12}>
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
          <Col sm={2} className="d-inline">
            <Form.Control className={styles.input} min="0" max={maxPeopleAmount} type="number" value={peopleAmount} onChange={e => setPeopleAmount(e.target.value) }/>
          </Col>
          <Col sm={1} className={clsx("p-0", styles.text)}>/</Col>
          <Col sm={2} className="d-inline">
            <Form.Control  className={styles.input} type="number" value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value) }/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            <span>Bill:</span>
          </Form.Label>
          <Col sm={1} className="pt-1 pr-0 text-center">$</Col>
          <Col sm={2} className="p-0">
            <Form.Control  className={styles.input} type="text" value={bill} onChange={e => setBill(e.target.value) }/>
          </Col>
        </Form.Group>
      </Col>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  )
}

TableForm.propTypes = {
  id: propTypes.string.isRequired,
  status: propTypes.string.isRequired,
  peopleAmount: propTypes.number.isRequired,
  maxPeopleAmount: propTypes.number.isRequired,
  bill: propTypes.number.isRequired
}

export default TableForm;