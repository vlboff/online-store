import React, { useEffect, useState } from 'react';
import promocodes from '../data/promocodes.json';
import { IPromocode } from '../interfaces';

function PromocodeBlock() {
  const [enteredPromocode, setEnteredPromocode] = useState<IPromocode | null>();
  const [usedPromocodes, setUsedPromocodes] = useState<IPromocode[]>([]);

  useEffect(() => {
    window.addEventListener('storage', () => {
      setUsedPromocodes(JSON.parse(localStorage.getItem('usedPromocodes') || '[]'));
    });
    setUsedPromocodes(JSON.parse(localStorage.getItem('usedPromocodes') || '[]'));
  }, []);

  function addPromocodeToLocalStorage(enteredPromocode: IPromocode) {
    usedPromocodes.push(enteredPromocode);
    localStorage.setItem('usedPromocodes', JSON.stringify(usedPromocodes));
    window.dispatchEvent(new Event("storage"));
    setEnteredPromocode(null);
  }

  function removePromocodeFromLocalStorage(promocode: IPromocode) {
    usedPromocodes.splice(usedPromocodes.indexOf(promocode), 1);
    localStorage.setItem('usedPromocodes', JSON.stringify(usedPromocodes));
    window.dispatchEvent(new Event("storage"));
  }

  function checkPromocode(value: string) {
    const enteredPromocode = promocodes.find(promocode => promocode.id.toLowerCase() === value.toLowerCase());
    setEnteredPromocode(enteredPromocode);
  }

  return (
    <>
      {usedPromocodes.length !== 0 &&
        <div className='promocode__container'>
          Applied codes:
          {usedPromocodes.map(promocode => {
            return (
              <div className='promocode__applied' key={promocode.id}>{promocode.name} –{promocode.disc}%
                <button className='promocode__btn' onClick={() => removePromocodeFromLocalStorage(promocode)}>–</button>
              </div>
            )
          })}
        </div>
      }
      <label htmlFor="promocode">
        <span>Promocode:</span>
        <input type="text"
          name='promocode'
          placeholder='Enter your code'
          title='Ex: RSS, EPM'
          onChange={(e) => checkPromocode(e.target.value)}
        />
      </label>
      {enteredPromocode &&
        <div className='promocode__proposal'>
          {enteredPromocode.name} –{enteredPromocode.disc}%
          {!usedPromocodes.find(promocode => promocode.id === enteredPromocode.id) &&
            <button
              className='promocode__btn'
              onClick={() => addPromocodeToLocalStorage(enteredPromocode)}
            >+</button>}
        </div>}
    </>
  )
}

export default PromocodeBlock;
