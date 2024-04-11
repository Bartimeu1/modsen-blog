import React, { ComponentType, useEffect, useState } from 'react';
import { FC } from 'react';

import { useIntersectionObserver } from '@root/hooks';

export const WithLazyLoad = <P extends object>(
  WrappedComponent: ComponentType<P>,
  threshold = 1,
): FC<P> => {
  const WithLazyLoadComponent = (props: P) => {
    const [isInView, ref] = useIntersectionObserver(threshold);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
      if (isInView && !hasLoaded) {
        setHasLoaded(true);
      }
    }, [isInView, hasLoaded]);

    return (
      <section ref={ref}>
        {hasLoaded ? <WrappedComponent {...props} /> : <div>Loading...</div>}
      </section>
    );
  };
  return WithLazyLoadComponent;
};
