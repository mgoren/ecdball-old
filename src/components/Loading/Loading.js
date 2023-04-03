import { TailSpin } from 'react-loading-icons'
import * as S from './Loading-styles.js';

export default function Loading({ text, isHeading=true}) {
  return (
    <>
      <S.Spacer />
      <S.Spacer />
      <div className='text-center loading-icon-container'>
        <TailSpin stroke='black' strokeWidth='2.5' />
      </div>
      <S.Spacer />
      {isHeading ? 
        <S.Subhead className='text-center text-danger'>{text}</S.Subhead>
        :
        <S.Text className='text-center'>{text}</S.Text>
      }
      <S.Spacer />
      <S.Spacer />
    </>
  );
}
