import React from 'react';

const Table = ({ projects }) => {
  const currencyMap = {
    usd: '$',
    eur: '€',
    gbp: '£',
    aud: 'A$',
    cad: 'C$',
    chf: 'CHF',
    dkk: 'DKK',
  };

  return (
    <table className='table' aria-label='Kickstarter Projects Table'>
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => {
          let currency = project['currency'];
          return (
            <tr key={project['s.no']}>
              <td>{project['s.no']}</td>
              
              <td>
                {project['percentage.funded']
                  ? `${project['percentage.funded']}%`
                  : 'N/A'}
              </td>

              <td>
                {currency && project['amt.pledged']
                  ? currencyMap[currency.toLowerCase()]
                    ? `${currencyMap[currency.toLowerCase()]} 
                       ${project['amt.pledged'].toLocaleString()}`
                    : `${currency.toUpperCase()} 
                       ${project['amt.pledged'].toLocaleString()}`
                  : 'N/A'}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
