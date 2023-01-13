import React from "react";
import scrollIntoView from "../utils/scrollIntoView.util";

export default function useAnchorNavigate() {
  return React.useCallback(
    (path: string) => {
      const [pathname, hash] = path.split("#");
      const { pathname: currentPathname } = window.location;

      if (pathname === currentPathname) {
        if (!hash) {
          // scroll to top
          return scrollIntoView();
        }
        // scroll to element with has
        return scrollIntoView(hash);
      } else {
        // change location
        window.location.href = path;
        return;
      }
    },
    [window.location]
  );
}
