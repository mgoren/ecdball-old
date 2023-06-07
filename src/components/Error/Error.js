import { useEffect } from 'react';
import { scrollToTop } from 'utils';

export default function Error({ error }) {
  useEffect(() => { scrollToTop() },[]);
  return (
    {error}
  );
}