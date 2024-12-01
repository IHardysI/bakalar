import { useLocation } from 'react-router-dom';

export const useBreadcrumbItems = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Map pathnames to labels and hrefs
  return pathnames.map((value, index) => {
    const href = `/${pathnames.slice(0, index + 1).join('/')}`;
    const label = value.charAt(0).toUpperCase() + value.slice(1);
    return { label, href };
  });
};
