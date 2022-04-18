// eslint-disable-next-line
import React, { useEffect, useRef } from 'react';

// Хук, определяющий первый рендер компонента
const useComponentDidMount = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current = true;
  }, []);
  return ref.current;
};

export default useComponentDidMount;
