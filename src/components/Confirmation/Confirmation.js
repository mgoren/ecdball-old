import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useNavigate, useLocation } from 'react-router-dom';
import { isAllowedNavigation, cachedLastCompletedOrder, isEmptyOrder, scrollToTop } from 'utils';
import * as S from './Confirmation-styles';
import Receipt from 'components/Receipt';
import Title from 'components/Title';

export default function Confirmation({ order }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAllowedNavigation(location, 'fromCheckout')) {
      scrollToTop();
    } else {
      console.log('direct navigation disallowed');
      navigate('/', { replace: true });
    }
  }, [navigate, location]);

  if (cachedLastCompletedOrder() === null) {
    window.location.replace('/');
  }

  order = isEmptyOrder(order) ? cachedLastCompletedOrder() : order;

  return (
    <S.TopBox className={isMobile ? 'mobile' : 'desktop'}>
      <Title text={order.paypalEmail === 'check' ? 'Megaband Registration' : 'Megaband Confirmation'} />
      <Receipt order={order} />
      <hr />
      <p><small>A receipt containing this information is being sent to {order.people[0].email}.</small></p>
    </S.TopBox>
  );
}
