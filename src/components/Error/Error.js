import { useEffect } from 'react';
import * as S from './Error-styles';

export default function Error({ error }) {
  useEffect(() => { window.scrollTo(0,0); },[])
  return (
    <S.ErrorBox className='box-error'>
      <S.Text>{error}</S.Text>
    </S.ErrorBox>
  );
}