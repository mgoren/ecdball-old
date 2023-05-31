import * as S from './Title-styles';
import { TITLE } from 'config';

export default function Title({ text = TITLE, classes }) {
  const classNames = 'S.Title ' + classes;

  return (
    <>
      <S.Title className={classNames}>{text}</S.Title>
      <hr />
    </>
  );
}