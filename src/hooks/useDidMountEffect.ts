/*
Eсть много ситуаций, когда обычный useEffect не подходит. В случае, когда  не нужно что-то вызывать при первом рендеринге компонента, а только при изменении входных параметров. 
Этот хук вызывается так же, как и классический useEffect, только функции, которые вы в него закладываете, будут работать только в том случае, если вы измените параметры,
 которые вы задали этому хуку.
The useDidMountEffect work only when props changed.
*/


import { useEffect, useRef } from 'react';

export const useDidMountEffect = (fn: () => any, inputs: Array<any>) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      fn();
    } else {
      didMountRef.current = true;
    }
  }, inputs);
};


/**
 * Usage:
 * import { useDidMountEffect } from "../hooks/useDidMountEffect";
 * const [value,setValue] = useState(0);
 *
 * // The useDidMountEffect work only when props changed.
 *  useDidMountEffect(() => {
 *   alert("useDidMountEffect worked only when props changed.");
 *  }, [value]);
 *
 * const handleClick = () => {
 *  setValue(prev => prev + 1)
 * }
 * return(
 *  <>
 *  <button onClick={handleClick}>Click to increase</button>
 *  <p>Value {value}</p>
 * </>
 * )
 */
