import React from "react";

const cards = [
     { imageUrl: "https://placehold.co/300x200/EEE/31343C", title: "John Doe", description: "johndoe@example.com" , buttonUrl: "johndoe@example.com", buttonLabel: "johndoe@example.com"},
     { imageUrl: "https://placehold.co/300x200/EEE/31343C", title: "John 2", description: "johndoe@example.com" , buttonUrl: "johndoe@example.com", buttonLabel: "johndoe@example.com"},
     { imageUrl: "https://placehold.co/300x200/EEE/31343C", title: "John 3", description: "johndoe@example.com" , buttonUrl: "johndoe@example.com", buttonLabel: "johndoe@example.com"},
     { imageUrl: "https://placehold.co/300x200/EEE/31343C", title: "John 4", description: "johndoe@example.com" , buttonUrl: "johndoe@example.com", buttonLabel: "johndoe@example.com"},
   ];



//create your first component
const Card = () => {
	return (

        <div className="container my-5">
          <div className="row d-flex justify-content-center">
                    <>
                    {cards.map(function(card){
                        return (
                        
                                        <div className="card mx-2 my-2" style={{width: "18rem"}}>
                                                    <img src={card.imageUrl} className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{card.title}</h5>
                                                        <p className="card-text">{card.description}</p>
                                                        <a href={card.buttonUrl} className="btn btn-primary">{card.buttonLabel}</a>
                                                    </div>
                                        </div>
                                                    
                            

                    )})}
                    </>
            </div>
            </div>


	);
};

export default Card;