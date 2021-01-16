import { useRef, useEffect, useCallback, RefObject } from "react";

const useClickOutside = <T extends HTMLElement, R extends HTMLElement = HTMLElement>(
  onClose: VoidFunction,
  toggleRef?: RefObject<any>
): RefObject<R> => {
  const ref = useRef<T>(null);

  const mouseListener = useCallback(
    (e) => {
      if (!ref.current?.contains(e.target) && !toggleRef.current?.contains(e.target)) {
        onClose();
      }
    },
    [onClose, toggleRef]
  );
  const keyboardListener = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("click", mouseListener);
    document.addEventListener("keyup", keyboardListener);

    return (): void => {
      document.removeEventListener("click", mouseListener);
      document.removeEventListener("keyup", keyboardListener);
    };
  }, [mouseListener, keyboardListener]);

  return ref;
};

export default useClickOutside;
