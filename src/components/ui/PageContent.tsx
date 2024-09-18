import React from 'react';
import Card from './cardDestacados';

const cardsData = [
  { title: '50 años', copy: 'Cumple 50 años Maranatha, el movimiento peregrino que marcó a muchas generaciones de mendocinos', button: 'Ver Evento', imageUrl: 'https://imgs.search.brave.com/Bn9ESrWYvb4aKafewtoLAA75yNqFwRQvx3lQXzUC-Kg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9zYW5kZXMuY29t/LmFyL3Jlc2l6ZXIv/djIvRkRJVTQ3QTZK/VkVOTE1MUjZXSlVF/RzJRN1EuanBnP3F1/YWxpdHk9NzUmc21h/cnQ9dHJ1ZSZhdXRo/PTQwMTM2YzQyNjU4/NDQ3MDMxMzVhNmJm/ZTBiZjNmYjZiNmIx/ZWYwMGVlZWNhZjM4/Njg4MWFhNDlmMTcz/ZDA3MWQmd2lkdGg9/OTgwJmhlaWdodD02/NDA' },
  { title: 'To The Beach', copy: 'Plan your next beach trip with these fabulous destinations', button: 'Ver Evento', imageUrl: 'https://imgs.search.brave.com/dyfOQ7_ZbLvAx4voghAK5dDrv0PWPne7jMiCyoROgKE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9zYW5kZXMuY29t/LmFyL3Jlc2l6ZXIv/djIvWkZUQUk2VzUz/VkNTNUI3N05BNVJC/UlpCSVkuanBnP2F1/dGg9ZjA2NjVhM2Uw/OGM1MzcxNThhZDI2/MDU2MjQ0OWMyNDI3/YjE5NTVhNmU3OGZk/NGNjMjQ0YTM2Nzlm/MjJiZjkyYyZ3aWR0/aD0xMjgwJmhlaWdo/dD03MjA' },
  { title: 'Desert Destinations', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Ver Evento', imageUrl: 'https://imgs.search.brave.com/Bn9ESrWYvb4aKafewtoLAA75yNqFwRQvx3lQXzUC-Kg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9zYW5kZXMuY29t/LmFyL3Jlc2l6ZXIv/djIvRkRJVTQ3QTZK/VkVOTE1MUjZXSlVF/RzJRN1EuanBnP3F1/YWxpdHk9NzUmc21h/cnQ9dHJ1ZSZhdXRo/PTQwMTM2YzQyNjU4/NDQ3MDMxMzVhNmJm/ZTBiZjNmYjZiNmIx/ZWYwMGVlZWNhZjM4/Njg4MWFhNDlmMTcz/ZDA3MWQmd2lkdGg9/OTgwJmhlaWdodD02/NDA' },
  { title: 'Explore The Galaxy', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Ver Evento', imageUrl: 'https://imgs.search.brave.com/dyfOQ7_ZbLvAx4voghAK5dDrv0PWPne7jMiCyoROgKE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9zYW5kZXMuY29t/LmFyL3Jlc2l6ZXIv/djIvWkZUQUk2VzUz/VkNTNUI3N05BNVJC/UlpCSVkuanBnP2F1/dGg9ZjA2NjVhM2Uw/OGM1MzcxNThhZDI2/MDU2MjQ0OWMyNDI3/YjE5NTVhNmU3OGZk/NGNjMjQ0YTM2Nzlm/MjJiZjkyYyZ3aWR0/aD0xMjgwJmhlaWdo/dD03MjA' },
];

const CardContainer: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
    {cardsData.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        copy={card.copy}
        button={card.button}
        imageUrl={card.imageUrl}
      />
    ))}
  </div>
);

export default CardContainer;
