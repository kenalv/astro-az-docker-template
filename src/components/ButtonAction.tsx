import React from 'react';
import Button from './Button';
import { actions } from 'astro:actions'

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function ButtonApi({ children, variant = 'primary' }: ButtonProps) {


  const handleClick = async () => {

    const {data,error} = await actions.rickandmorty.getCharacter({})

    let outText = '';
    outText = data.text || data.error || JSON.stringify(data);
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
