import * as s from './button.module.scss';

export const button = ({
  className,
  type = 'button',
  inner,
  onClick,
} = {}) => {
  const button = document.createElement('button');
  button.type = type;
  button.classList.add(s.button);

  if (inner) {
    if (typeof inner === 'string') {
      button.innerHTML = inner;
    } else {
      button.appendChild(inner);
    }
  }

  if (onClick) {
    button.addEventListener('click', onClick);
  }

  if (className) {
    button.classList.add(className);
  }

  return button;
};
