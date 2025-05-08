import {useState} from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

export default function TaskHeader(props) {
    const [isMenuOpen, setIsMenuOpened] = useState(false);
    return(
        <div className="hd">
            <div className="hd">Tasks</div>
            <div className="opt">
                <button onClick={(b)=>{
                    let nextSib = b.target.parentElement.querySelector('.optBox');
                    isMenuOpen ?  nextSib.style.height='0px' : nextSib.style.height='170px' ;
                    setIsMenuOpened(!isMenuOpen)
                }}>Sort <FontAwesomeIcon icon={faSort}/> </button>
                <div className="optBox">
                    <div className="o" onClick={(b)=>{
                        props.ordr('newer');
                        isMenuOpen ? b.target.parentElement.style.height='0px' : alert('Warning!')
                        setIsMenuOpened(false)
                    }}>Newer First</div>
                    
                    <div className="o" onClick={(b)=>{
                        props.ordr('older');
                        isMenuOpen ? b.target.parentElement.style.height='0px' : alert('Warning!')
                        setIsMenuOpened(false)
                    }}>Older First</div>
                    
                    <div className="o" onClick={(b)=>{
                        props.ordr('alphaAZ');
                        isMenuOpen ? b.target.parentElement.style.height='0px' : alert('Warning!')
                        setIsMenuOpened(false)
                    }}>A to Z</div>
                    
                    <div className="o" onClick={(b)=>{
                        props.ordr('alphaZA');
                        isMenuOpen ? b.target.parentElement.style.height='0px' : alert('Warning!')
                        setIsMenuOpened(false)
                    }}>Z to A</div>
                    
                    <div className="o" onClick={(b)=>{
                        props.ordr('random');
                        isMenuOpen ? b.target.parentElement.style.height='0px' : alert('Warning!')
                        setIsMenuOpened(false)
                    }}>Shuffle</div>
                </div>
            </div>
        </div>
    )
}