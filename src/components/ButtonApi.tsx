import React from 'react';
import Button from './Button';
import { actions } from 'astro:actions'

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function ButtonApi({ children, variant = 'primary' }: ButtonProps) {


  const handleClick = async () => {
    const url = `/api/rym-character`;
    const data = await fetch(url).then(res => res.json()).then(data => data);

    let outText = '';
    outText = JSON.stringify(data);
    const outElem = document.getElementById('out');
    if (outElem) outElem.textContent = outText;
    
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
    >
      {children}
    </Button>
  );
}
