import { clearCache } from 'utils';
import ButtonRow from 'components/ButtonRow';
import { DEFAULTS } from 'config';

export default function Confirmation({ order, setOrder, setCurrentPage }) {  
  function startOver() {
    clearCache();
    setOrder(DEFAULTS);
    setCurrentPage(1);
  }

  return (
    <ButtonRow centerButtonProps = {{ onClick: startOver, text: 'Start another registration' }} />
  );
}
