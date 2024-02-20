import React from 'react';

const Card = ({ prompt }) => {
  return (
    <div className="box">
      <h2>{prompt.title}</h2>
      <p>{prompt.description}</p>
    </div>
  );
};

const CardList = () => {
  const prompts = [
    { title: 'Creative Studio', description: 'a collaborative space where professionals work together on brand creation and maintenance projects.' },
    { title: 'Pottery Studio', description: 'pottery made by professional and amateur artists or artisans working alone or in small groups, making unique items or short runs.' },
    { title: 'Artist’s Studio', description: 'a space where artists work and focus on developing their practice.' },
  ];

  return (
    <div className="page2">
      {prompts.map((prompt, index) => (
        <Card key={index} prompt={prompt} />
      ))}
    </div>
  );
};

export default CardList;
