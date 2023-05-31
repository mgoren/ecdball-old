import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { cached, clearCache, isEmptyOrder, scrollToTop } from 'utils';
import * as S from './Confirmation-styles';
import Receipt from 'components/Receipt';
import Title from 'components/Title';
import ButtonRow from 'components/ButtonRow';
import { DEFAULTS } from 'config';

export default function Confirmation({ order, setOrder, setCurrentPage }) {
  useEffect(() => { scrollToTop() },[]);
  
  order = isEmptyOrder(order) ? cached('lastCompletedOrder') : order;

  function startOver() {
    clearCache();
    setOrder(DEFAULTS);
    setCurrentPage(1);
  }

  return (
    <section className='confirmation'>
      <S.TopBox className={isMobile ? 'mobile' : 'desktop'}>
        <Title text={order.paypalEmail === 'check' ? 'Megaband Registration' : 'Megaband Confirmation'} />
        <Receipt order={order} />
        <hr />
        <p><small>A receipt containing this information is being sent to {order.people[0].email}.</small></p>
      </S.TopBox>
      <ButtonRow centerButtonProps = {{ onClick: startOver, text: 'Start another registration' }} />
    </section>
  );
}
