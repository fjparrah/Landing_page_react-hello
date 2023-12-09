import React from "react";

const cards = [
     { imageUrl: "1", title: "John Doe", description: "johndoe@example.com" , buttonUrl: "johndoe@example.com", buttonLabel: "johndoe@example.com"},
     { imageUrl: "1", title: "John 2", description: "johndoe@example.com" , buttonUrl: "johndoe@example.com", buttonLabel: "johndoe@example.com"},
     { imageUrl: "1", title: "John 3", description: "johndoe@example.com" , buttonUrl: "johndoe@example.com", buttonLabel: "johndoe@example.com"},
     { imageUrl: "1", title: "John 4", description: "johndoe@example.com" , buttonUrl: "johndoe@example.com", buttonLabel: "johndoe@example.com"},
   ];

const cardArray = cards;

//create your first component
const Card = () => {
	return (
          
                    <>
                    {cards.map(function(card){
                        return (
                        
                                        <div classNameName="card" style={{width: "18rem"}}>
                                                    <img src={card.imageUrl} classNameName="card-img-top" alt="..."/>
                                                    <div classNameName="card-body">
                                                        <h5 classNameName="card-title">{card.title}</h5>
                                                        <p classNameName="card-text">{card.description}</p>
                                                        <a href={card.buttonUrl} classNameName="btn btn-primary">{card.buttonLabel}</a>
                                                    </div>
                                        </div>
                                                    
                            

                    )})}
                    </>

       


	);
};

export default Card;