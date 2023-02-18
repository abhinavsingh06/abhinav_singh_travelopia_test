import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import Header from './utils/Header';


const List = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get('http://localhost:3000/api/v1/submissions');
      setData(result.data)
    })()
  }, [])

  return (
    <>
      <Header/>
      <Table data={ data } />
    </>
  )
};

export default List;