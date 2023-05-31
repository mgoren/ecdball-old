import { useEffect } from 'react';
import { scrollToTop } from 'utils';
import * as S from './Error-styles';

export default function Error({ error }) {
  useEffect(() => { scrollToTop() },[]);
  return (
    <S.ErrorBox className='box-error'>
      <S.Text>{error}</S.Text>
    </S.ErrorBox>
  );
}