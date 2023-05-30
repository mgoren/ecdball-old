import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { NUM_PAGES } from 'config';

export default function LocationMonitor({ currentPage, setCurrentPage }) {
  // const location = useLocation();
  // useEffect(() => {
  //   console.log('location changed')
  //   switch(location.pathname) {
  //     case '/':
  //       if (currentPage === 'checkout') {
  //         setCurrentPage(NUM_PAGES);
  //       } else if (isFinite(currentPage) && currentPage > 1) {
  //         setCurrentPage(currentPage - 1);
  //       }
  //       break;
  //     case '/checkout':
  //       if (currentPage === NUM_PAGES) {
  //         setCurrentPage('checkout');
  //       }
  //       break;
  //   }
  // }, [location]);

  return null;
}
