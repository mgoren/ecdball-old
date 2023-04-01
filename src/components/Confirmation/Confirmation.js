import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { scrollToTop } from 'utils';
import * as S from './Confirmation-styles';
import Receipt from 'components/Receipt';
import Title from 'components/Title';

export default function Confirmation({ order }) {
  if (sessionStorage.getItem('lastCompletedOrder') === null) {
    window.location.replace('/');
  }

  if (order.fullName === '') {
    order = JSON.parse(sessionStorage.getItem('lastCompletedOrder'));
  }

  useEffect(() => { scrollToTop(); },[])

  return (
    <S.TopBox className={isMobile ? 'mobile' : 'desktop'}>
      <Title text={order.paypalEmail === 'check' ? 'Megaband Registration' : 'Megaband Confirmation'} />
      <Receipt order={order} />
      <hr />
      <S.Text><p><em>A receipt containing this information is being sent to {order.email}.</em></p></S.Text>
    </S.TopBox>
  );
}
