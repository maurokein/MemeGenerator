import React from 'react'
import memesData from '../memesData'

export default function Meme(){
    function getRandomMeme() {
        const memesArray = memesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomIndex].url;
        console.log(url);
    }   
    return(
        <main className='form'>
            <div className='form--input'>
                <input type='text' name='input' id='setup' placeholder='Top text' required className='form--firstinput'></input>
                <input type='text' name='input' id='punchline' placeholder='Bottom text' required className='form--secondinput'></input>
            </div>
            <div className='form--submit'>
                <button type='submit' className='form--submit__input' onClick={getRandomMeme}>Get a new meme image<i class="fa fa-picture-o" aria-hidden="true"></i></button>
            </div>
        </main>
    )
}