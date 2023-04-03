import { wait } from 'utils';
import * as S from './Check-styles';
import { useState, useEffect } from 'react';

export default function Check({ saveOrderToFirebase, processing, setProcessing }) {
  const [initialized, setInitialized] = useState(false);

  const handleRegister = async () => {
    setProcessing(true);
    saveOrderToFirebase('check');
  }

  useEffect(() => {
    wait(5000).then(() => {
      setInitialized(true);
    });
  }, [setInitialized]);

  return (
    <section className='Check text-center'>

      {!processing &&
        <>
          <S.Text>Instructions here on paying by check</S.Text>

          <S.Spacer />

          {initialized ?
            <button onClick={handleRegister} className='btn btn-warning'>Register and agree to send a check</button>
            :
            <button className='btn btn-warning' disabled>Please wait...</button>
          }
        </>
      }

    </section>
  );
}
