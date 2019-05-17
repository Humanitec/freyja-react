import React, { useState } from 'react';
import Container from './layout/Container/Container';

function App() {
  const [page, setPage] = useState('button');
  return (
    <Container page={page} setPage={setPage} />
  );
}

export default App;
