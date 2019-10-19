import { useEffect, useRef } from "react";

export function useDidMount(fn) {
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    fn();
  }, []);
  return mounted.current;
}
export function useDidUpdate(fn, deps) {
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      fn();
    }
  }, deps);
  return mounted.current;
}

export function useWillUnmount(fn) {
  useEffect(() => {
    return fn();
  }, []);
}
