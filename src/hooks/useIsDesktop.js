import { useEffect, useState } from "react";

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 1330
  );

  useEffect(() => {
    const onResize = () =>
      setIsDesktop(window.innerWidth >= 1330);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isDesktop;
}
