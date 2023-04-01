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

  console.log('confirmation page', order);
  return (
    <S.TopBox className={isMobile ? 'mobile' : 'desktop'}>
      <Title text={order.paypalEmail === 'check' ? 'Megaband Registration' : 'Megaband Confirmation'} />
      <Receipt order={order} />
    </S.TopBox>
  );
}
