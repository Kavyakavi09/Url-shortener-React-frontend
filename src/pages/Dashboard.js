import React from 'react';

function Dashboard() {
  return (
    <div>
      <div className='row pt-5'>
        <div className='col-lg-10 mx-auto mt-5'>
          <div className='table-responsive'>
            <table className='table table-primary table-striped table-hover'>
              <thead className='table-dark'>
                <tr>
                  <th scope='col'>Long url</th>
                  <th scope='col'>Short url</th>
                  <th scope='col'>Click Counts</th>
                  <th scope='col'>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'></th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope='row'></th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope='row'></th>
                  <td colspan='2'>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
