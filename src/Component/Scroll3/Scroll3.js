import React, { useState, useEffect, useRef } from 'react';

const Scroll3 = ({ targetCount, duration }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        startCounting();
      }
    }, { threshold: 0.1 });

    if (counterRef.current) {
      observerRef.current.observe(counterRef.current);
    }

    return () => {
      if (observerRef.current && counterRef.current) {
        observerRef.current.unobserve(counterRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    let start = 0;
    const increment = targetCount / (duration / 100);

    const updateCounter = () => {
      start += increment;
      if (start < targetCount) {
        setCount(Math.ceil(start));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(targetCount);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <div>
      <div ref={counterRef} style={{ minHeight: '100px' }}>
        <h1 style={{color: 'green', fontSize: '4rem'}}> {count}</h1>
        <p>Happy<br/>Customers</p>
      </div>
      {/* Add some content to allow scrolling */}
      <div></div>
    </div>
  );
};

export default Scroll3;