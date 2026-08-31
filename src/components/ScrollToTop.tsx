import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // `key` changes on every navigation, including a click on the link for the route
  // already on screen, which `pathname` alone would not catch.
  const { key } = useLocation();

  useEffect(() => {
    // Without this the browser restores the previous offset on back/forward, racing
    // the reset below.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // `html` carries scroll-behavior: smooth for in-page scrolling, which would turn
    // this jump into a long animated glide down the page.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [key]);

  return null;
}
