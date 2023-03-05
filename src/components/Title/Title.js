import * as S from './Title-styles';

export default function Title({ text = 'Portland Megaband Dance 2023', classes }) {
  const classNames = 'S.Title ' + classes;

  return (
    <>
      <S.Title className={classNames}>{text}</S.Title>
      <hr />
    </>
  );
}