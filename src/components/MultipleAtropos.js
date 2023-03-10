import Atropos from 'atropos/react';

export const MultipleAtropos = (props) => {
  const { className } = props;
  return (
    <div className={`atropos-multiple ${className || ''}`}>
      {Array.from({ length: 9 }).map((_, index) => {
        const row = Math.floor(index / 3);
        const col = index - row * 3;
        return (
          <Atropos
            // eslint-disable-next-line
            key={index}
            eventsEl=".atropos-multiple"
            rotateTouch="scroll-y"
            rotateXMax={10}
            rotateYMax={10}
            rotateXInvert
            rotateYInvert
            stretchX={20}
            stretchY={30}
            duration={400}
            alwaysActive
          >
            <div
              data-atropos-offset="10"
              className="atropos-multiple-bg"
              style={{ backgroundPosition: `${-col * 105}% ${-row * 105}%` }}
            />
          </Atropos>
        );
      })}
    </div>
  );
};
