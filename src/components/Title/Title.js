import * as S from './Title-styles';

export default function Title({ text = 'Test Registration Site', classes }) {
  const classNames = 'S.Title ' + classes;

  return (
    <>
      <S.Title className={classNames}>{text}</S.Title>
      <hr />
    </>
  );
}