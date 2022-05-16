import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import SingleTable from './components/pages/SingleTable/SingleTable';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesRedux';
import { fetchStatuses } from './redux/statusRedux';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTables());
    dispatch(fetchStatuses())
  }, [dispatch]);
  
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<SingleTable />} />
        <Route path="*" element={"404 Not Found"}/>
        </Routes>
      <Footer />
    </Container>
  );
}

export default App;
