import * as S from './Check-styles';

export default function Check({ setCheckPayment, saveOrderToFirebase }) {
  return (
    <section className='Check text-center'>
      <S.Text>Instructions here on paying by check</S.Text>
      <S.Spacer />
      <button onClick={() => saveOrderToFirebase('check')} className='btn btn-warning'>Register and agree to send a check</button>
      <S.Spacer />
      <S.Text>(<S.Link onClick={() => setCheckPayment(false)}>or view electronic payment options</S.Link>)</S.Text>
    </section>
  );
}
