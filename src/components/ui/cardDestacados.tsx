import React from 'react';
import { Button } from "@/src/components/ui/button";

interface CardProps {
  title: string;
  copy: string;
  button: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, copy, button, imageUrl }) => (
  <div className="relative flex flex-col overflow-hidden w-[350px] h-[350px] bg-white shadow-lg group">
    <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="font-serif text-lg italic">{copy}</p>
      <Button>{button}</Button>
    </div>
    <style jsx>{`
      .relative::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${imageUrl});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    `}</style>
  </div>
);

export default Card;
