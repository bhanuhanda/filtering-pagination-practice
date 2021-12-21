import React from 'react'
import Pagination from './Pagination';
import FilterTableData from './SearchingFiltering';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from 'antd';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '1rem'}}>
        <Button type="primary" size={'large'}>
          <Link to="pagination">Pagination Example</Link>
        </Button>
        <Button type="primary" size={'large'}>
          <Link to="filtering">Searching Filtering Example</Link>
        </Button>
      </div>
      
      <Routes>
        <Route path="/pagination" element={<Pagination />}></Route>
        <Route path="/filtering" element={<FilterTableData />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
