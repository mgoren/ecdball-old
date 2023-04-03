import { useState, useEffect } from 'react';
import Reaptcha from 'reaptcha';
import { wait } from 'utils';
import * as S from './Check-styles';
import { CAPTCHA_KEY } from 'config';

export default function Check({ saveOrderToFirebase, processing, setProcessing }) {
  const [initialized, setInitialized] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    wait(5000).then(() => {
      setInitialized(true);
    });
  }, [setInitialized]);

  const handleRegister = async () => {
    setProcessing(true);
    saveOrderToFirebase('check');
  }

  return (
    <section className='Check text-center d-flex flex-column'>

      {!processing &&
        <>
          <S.Text>Instructions here on paying by check</S.Text>

          <S.Spacer />

          {initialized &&
            <>
              <Reaptcha
                sitekey={CAPTCHA_KEY}
                onVerify={() => setVerified(true)}
                onExpire={() => setVerified(false)}
                className='mx-auto'
              />
            </>
          }
          <S.Spacer />
          <div>
            <button disabled={!initialized || !verified} onClick={handleRegister} className='btn btn-warning'>
              {initialized ? 'Register and agree to send a check' : 'Loading...'}
            </button>
          </div>
        </>
      }

    </section>
  );
}
