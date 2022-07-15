import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [Links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const shortenLink = async () => {
    try {
      setLoading(true);
      let datas = await axios.get(
        'https://shortly-urlshorten.herokuapp.com/api/shortUrl'
      );

      setLinks(datas.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    shortenLink();
  }, []);

  if (loading) {
    return <p className='noData'>Loading...</p>;
  }
  if (error) {
    return <p className='noData'>Something went wrong :(</p>;
  }

  return (
    <div className='container'>
      <div className='row pt-5'>
        <div className='col-lg-10 mx-auto mt-5 col-12'>
          <div className='table-responsive'>
            <table className='table table-primary table-striped table-hover'>
              <thead className='table-dark text-center'>
                <tr>
                  <th>Long url</th>
                  <th>Short url</th>
                  <th>Click Counts</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {Links.map(
                  ({ longUrl, shortUrl, clickCount, createdAt, _id }) => {
                    return (
                      <tr key={_id}>
                        <td>
                          <a
                            href={longUrl}
                            target={'_blank'}
                            rel='noreferrer'
                            className='text-decoration-none'>
                            {longUrl}{' '}
                          </a>
                        </td>

                        <td>
                          <a
                            href={`https://shortly-urlshorten.herokuapp.com/api/${shortUrl}`}
                            target={'_blank'}
                            rel='noreferrer'
                            className='text-decoration-none'>
                            {' '}
                            {shortUrl}
                          </a>
                        </td>
                        <td>{clickCount}</td>
                        <td>{createdAt}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
