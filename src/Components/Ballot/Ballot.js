import React, { useEffect, useState } from 'react';
import api from '../../Api/Api';
import { MapBallot } from '../../Api/ApiMapper';
import Category  from '../BallotCategory/Category';
import Modal, { ModalContext } from '../Modal/Modal';
import BallotResult from './BallotResult';

const Ballot = () => {

  const [ballot, setBallot] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [selectionResult, setSelectionResult] = useState({});

  useEffect(() => {
    const fetchBallot = async () => {
      const res = await api.getBallotData();
      const mapped = MapBallot(res);
      setBallot(mapped);
      const initialSelection = {};
      mapped?.ballotCategories?.forEach(c => {
        initialSelection[c.title] = null;
      });
      
      setSelectionResult(initialSelection);
    }

   

    fetchBallot().catch(console.error);
  }, []);

  const setPartialSelection = (res, id) => {
    setSelectionResult(prev => {
        prev[id] = res;
        return prev;
    });
  }

  return (
    <ModalContext.Provider value={{show: showResult, onClose: () => setShowResult(false)}}>
      <div className='ballot'>
        {
          ballot?.ballotCategories?.map(category => {
            return <Category key={category.id} category={category} onSetSelection={(res) => setPartialSelection(res, category.title)}/>
          })
        }
        <Modal>
          <BallotResult selection={selectionResult}/>
        </Modal>
        <div className='submit-button' onClick={() => setShowResult(true)}>Submit ballot</div>
      </div>
    </ModalContext.Provider>
  );
}

export default Ballot;