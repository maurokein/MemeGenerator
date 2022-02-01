import React from 'react'
import memesData from '../memesData'

export default function Meme(){
    const [memeImageUrl, setMemeImageUrl] = React.useState("");
    function getRandomMeme() {
        const memesArray = memesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        setMemeImageUrl(memesArray[randomIndex].url);
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
            <img src={memeImageUrl} alt='meme' className='form--image' />
        </main>
    )
}