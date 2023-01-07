import React, { useEffect, useState } from 'react';
import api from '../../Api/Api';
import { MapBallot } from '../../Api/ApiMapper';
import Category  from '../BallotCategory/Category';

const Ballot = () => {

  const [ballot, setBallot] = useState(0);

  useEffect(() => {
    const fetchBallot = async () => {
      const res = await api.getBallotData();
      setBallot(MapBallot(res));
    }

    fetchBallot().catch(console.error);
  }, []);

  return (
    <div className='ballot'>
      {
        ballot?.ballotCategories?.map(category => {
          return <Category key={category.id} category={category}/>
        })
      }
    </div>
  )
}

export default Ballot;