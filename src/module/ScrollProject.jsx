import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const cards = [
  { id: 1, title: 'Card One' },
  { id: 2, title: 'Card Two' },
  { id: 3, title: 'Card Three' },
  { id: 4, title: 'Card Four' },
  { id: 5, title: 'Card Five' },
];

const ScrollProject = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  // Function to add refs to cards array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const totalWidth = cardsRef.current.reduce(
      (acc, card) => acc + card.offsetWidth + 16, // 16px marginRight
      0
    );

    // Duplicate the cards container content width for seamless scroll
    // Animate x from 0 to -totalWidth / 2 continuously
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        x: `-=${totalWidth / 2}`, // scroll left by half the duplicated width
        ease: 'none',
        duration: 20, // adjust speed here (seconds)
        repeat: -1, // infinite
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2) * 1), 
          // keeps x within 0 to -totalWidth/2 range for seamless loop
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
        border: '1px solid #ddd',
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          cursor: 'grab',
        }}
      >
        {/* Duplicate cards twice for seamless looping */}
        {[...cards, ...cards].map((card, i) => (
          <div
            key={i}
            ref={addToRefs}
            style={{
              flex: '0 0 auto',
              width: 600,
              height: 320,
              marginRight: 16,
              backgroundColor: '#2c7be5',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              fontWeight: 'bold',
              fontSize: 18,
              userSelect: 'none',
            }}
          >
            {card.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollProject;
