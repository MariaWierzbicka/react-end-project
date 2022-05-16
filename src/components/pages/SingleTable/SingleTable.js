import TableForm from '../TableForm/TableForm';
import { useParams } from 'react-router';

const SingleTable = () => {
  const { id } = useParams();

  return (
    <>
    <h1 className="my-3">Table {id}</h1>
    <TableForm id={id}/>
    </>
  )
};
export default SingleTable;