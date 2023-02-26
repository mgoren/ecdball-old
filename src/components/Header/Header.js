import * as S from './Header-styles';

export default function Header() {
  return (
    <S.HeaderBox className='S.HeaderBox'>
      <S.Title className='S.Title'>Portland Megaband Dance 2023</S.Title>
      <hr />
      <S.Text>The dance will take place on Saturday, March 11 at 7:30 pm (doors at 6:30, beginner lesson at 7:00). It will take place at the Oaks Park Dance Pavilion, 7805 SE Oaks Park Way in Portland. Parking is $3/car. Cost is a sliding scale from $15-30 per person.</S.Text>
      <S.Text><strong>Covid policy:</strong> Everyone must be vaccinated, including at least one booster if eligible. A well-fitted mask covering nose and mouth is required for attendees. PCDC's full Covid policy is available <a href="https://pcdc.fun/covid19" target="_blank" rel="noreferrer">here</a>.</S.Text>
      <S.Text><strong>Note on payment by check:</strong> If you are paying by check, please do not fill out this form. Instead, send a check made out to PCDC, and mail it by the end of February to Sue Songer, 4405 SW Redondo Ave, Portland OR 97239. Please include with your check a note including your name, email, phone, and the name of anyone else you're registering. The cost is a sliding scale from $15-30 per person.</S.Text>
      <S.Text>Questions? Email <a href="mailto:contra@portlandcountrydance.org">contra@portlandcountrydance.org</a>.</S.Text>
    </S.HeaderBox>
  );
}