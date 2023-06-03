import { useEffect } from 'react';
import { isMobile } from "react-device-detect";
import { scrollToTop } from 'utils.js';
import * as S from '../Form-styles.js';
import { Input } from '../Input';
import { CheckboxInput } from '../Input';

export default function MiscInfo() {
  useEffect(() => { scrollToTop(); },[])
  return (
    <section className='MiscInfo'>
      <S.Box className={isMobile ? 'mobile' : 'desktop'}>
      
        <S.Title className='S.Title'>Volunteering</S.Title>
        <CheckboxInput
          label='I would like to volunteer to help! I am available for:'
          name='volunteer'
          options={[
            { label: 'Airport pick-up/drop-off', value: 'airport' },
            { label: 'Friday pre-ball dance', value: 'friday' },
            { label: 'Saturday pre-workshop decorating', value: 'saturday-pre' },
            { label: 'Saturday evening post-ball', value: 'saturday-post' },
          ]}
        />

        <S.Spacer />

        <S.Title className='S.Title'>Contact Information Sharing</S.Title>
        <CheckboxInput
          name='share'
          options={[
            { label: 'YES! Please share my information with other organizers/events.', value: 'yes' },
          ]}
        />

        <S.Spacer />

        <S.Title className='S.Title'>Final Comments</S.Title>
        <S.Label>Please elaborate on any of the above questions or add any additional comments about your registration. Let us know if we missed anything, or there is something else we should know</S.Label>
        <Input name='comments' type='textarea' />

      </S.Box>
    </section>
  );
}
