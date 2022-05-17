import TableForm from '../TableForm/TableForm';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from '../../../redux/tablesRedux';
import { fetchStatuses } from '../../../redux/statusRedux';
import { Spinner } from 'react-bootstrap';


const SingleTable = () => {
  const { id } = useParams();

  const tableData = useSelector(state => getTableById(state, id));

  const dispatch = useDispatch();

  useEffect(() => {
    if(!tableData){
    dispatch(fetchTables());
    dispatch(fetchStatuses())
    }}, [dispatch]);

  return (
    <>
      <h1 className="my-3">Table {id}</h1>
      {!tableData && <div className="text-center py-5 mb-5"><Spinner animation="border" variant="primary" /> </div> }

      {tableData && <TableForm 
      id={tableData.id}
      status={tableData.status}
      peopleAmount={tableData.peopleAmount}
      maxPeopleAmount={tableData.maxPeopleAmount}
      bill={tableData.bill}
      />}
    </>
  )
};
export default SingleTable;