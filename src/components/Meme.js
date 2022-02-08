import React from 'react'
import memesData from '../memesData'

export default function Meme(){
    const [meme, setMeme] = React.useState(
        {topText: "",
         bottomText: "",
         randomImage:"http://i.imgflip.com/1bij.jpg"          
        });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getRandomMeme() {
        const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        setMeme(
            {topText: "", 
            bottomText: "", 
            randomImage: memesArray[randomIndex].url}
        );
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
            <img src={meme.randomImage} alt='meme' className='form--image' />
        </main>
    )
}