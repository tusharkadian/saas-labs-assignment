import './index.css';

import React, { useEffect, useState } from 'react';

import Pagination from './components/Pagination';
import Table from './components/Table';
import { fetchProjects } from './utils/api';

const App = () => {
  const MAX_RECORDS_PER_PAGE = 5;
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch project data
    const loadProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    loadProjects();
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(projects.length / MAX_RECORDS_PER_PAGE);
  const startIndex = (currentPage - 1) * MAX_RECORDS_PER_PAGE; // [0...4], [5...9]
  const currentProjects = projects.slice(startIndex, startIndex + MAX_RECORDS_PER_PAGE);

  const handleNextClick = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePreviousClick = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='main'>
      <h1 className='title'>SaaS Labs Frontend Assignment</h1>
      <div className='container'>
        <h1>Kickstarter Projects</h1>
        <Table projects={currentProjects} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNextClick}
          onPrevious={handlePreviousClick}
          onPageChange={handlePageClick}
        />
      </div>
    </div>
  );
};

export default App;
