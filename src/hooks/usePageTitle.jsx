import { useEffect } from "react";
import { useLocation } from "react-router";

function usePageTitle(props) {
  const location = useLocation();

  const getTitleForRoute = (pathname) => {
    if (pathname === "/my-bookings") {
      return "My Bookings | Law.BD";
    }
    if (pathname.includes("/lawyers") && props?.lawyerName) {
      return `${props?.lawyerName} | Law.BD`;
    }
    if (pathname === "/blogs") {
      return "Blogs | Law.BD";
    }

    return "Law.BD";
  };

  useEffect(() => {
    const title = getTitleForRoute(location.pathname);

    document.title = title;
  }, [location]);

  return null;
}

export default usePageTitle;
