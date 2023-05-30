import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { cached, isEmptyOrder, scrollToTop } from 'utils';
import * as S from './Confirmation-styles';
import Receipt from 'components/Receipt';
import Title from 'components/Title';

export default function Confirmation({ order }) {
  useEffect(() => { scrollToTop() }, []);

  order = isEmptyOrder(order) ? cached('lastCompletedOrder') : order;

  return (
    <S.TopBox className={isMobile ? 'mobile' : 'desktop'}>
      <Title text={order.paypalEmail === 'check' ? 'Megaband Registration' : 'Megaband Confirmation'} />
      <Receipt order={order} />
      <hr />
      <p><small>A receipt containing this information is being sent to {order.people[0].email}.</small></p>
    </S.TopBox>
  );
}
