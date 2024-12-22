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
              <td>{project['percentage.funded']}%</td>
              <td>
                {currencyMap[currency.toLowerCase()]
                  ? `${currencyMap[currency.toLowerCase()]} 
                     ${project['amt.pledged'].toLocaleString()}`
                  : `${currency.toUpperCase()}
                     ${project['amt.pledged'].toLocaleString()}`}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
