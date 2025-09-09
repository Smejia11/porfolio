/**
 * Credit to MUI team @ https://mui.com
 */
import * as React from 'react';
import { TransitionProps, Transition, TransitionStatus } from 'notistack';
    import {
    useForkRef,
    reflow,
    getTransitionProps,
    createTransition,
    } from './shared';

function getScale(value: number): string {
  return `scale(${value}, ${value ** 2})`;
}

const styles: Partial<Record<TransitionStatus, React.CSSProperties>> = {
  entering: {
    opacity: 1,
    transform: getScale(1),
  },
  entered: {
    opacity: 1,
    transform: 'none',
  },
};

const Grow = React.forwardRef<unknown, TransitionProps>((props, ref) => {
  const {
    children,
    in: inProp,
    style,
    timeout = 300,
    onEnter,
    onEntered,
    onExit,
    onExited,
    ...other
  } = props;

  const nodeRef = React.useRef<HTMLDivElement>(null);
  const handleRefIntermediary = useForkRef((children as any).ref, nodeRef);
  const handleRef = useForkRef(handleRefIntermediary, ref);

  const handleEnter: TransitionProps['onEnter'] = (node, isAppearing) => {
    reflow(node);

    const { duration, delay, easing } = getTransitionProps({
      style,
      timeout,
      mode: 'enter',
    });

    node.style.transition = [
      createTransition('opacity', { duration, delay }),
      createTransition('transform', {
        delay,
        easing,
        duration: duration * 0.666,
      }),
    ].join(',');

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };

  const handleExit: TransitionProps['onExit'] = (node) => {
    const { duration, delay, easing } = getTransitionProps({
      style,
      timeout,
      mode: 'exit',
    });

    node.style.transition = [
      createTransition('opacity', { duration, delay }),
      createTransition('transform', {
        easing,
        duration: duration * 0.666,
        delay: delay || duration * 0.333,
      }),
    ].join(',');

    node.style.opacity = '0';
    node.style.transform = getScale(0.75);

    if (onExit) {
      onExit(node);
    }
  };

  return (
    <Transition
      appear
      in={inProp}
      nodeRef={nodeRef}
      onEnter={handleEnter}
      onEntered={onEntered}
      onExit={handleExit}
      onExited={onExited}
      timeout={timeout}
      {...other}
    >
      {(state, childProps) =>
        React.cloneElement(children as any, {
          style: {
            opacity: 0,
            transform: getScale(0.75),
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...styles[state],
            ...style,
            ...(children as any).props.style,
          },
          ref: handleRef,
          ...childProps,
        })
      }
    </Transition>
  );
});

Grow.displayName = 'Grow';

export default Grow;
