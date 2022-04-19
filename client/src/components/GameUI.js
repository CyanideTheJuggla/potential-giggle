import React from "react";

const GameUI = () => {
    return (
        <>
            <div className='gameUI-Left'>
                <div className="character-info">
                    <img src="http://placekitten.com/200/200" alt="kitten" />
                    <div className="info">
                        <p>Name: Fluffins</p>
                        <p>Class: Mage</p>
                        <p>Status: Cute</p>
                        <p>Level: Millions</p>
                    </div>
                    
                </div>
                <div className="attribute-list wrap">
                    <ul className="attribute-list ">
                        <li className="health" > Health: 100 </li>
                        <li className="stamina" > Stamina: 100 </li>
                        <li className="magic" > Magic: 100 </li>
                    </ul>
                    <ul className="attribute-list" >
                        <li className="attack" > Attack: 30 </li>
                        <li className="defense" > Defense: 40 </li>
                        <li className="focus" > Focus: 85 </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default GameUI;
