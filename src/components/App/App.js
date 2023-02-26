import * as S from './App-styles';
import Header from '../Header';
import Form from '../Form';

export default function App() {
  return (
    <S.Body className='S.Body'>
      <S.Container className='S.Container'>
        <Header />
        <Form />
      </S.Container>
    </S.Body>
  );
}
