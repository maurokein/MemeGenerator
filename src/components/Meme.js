import React from 'react'

export default function Meme(){
    return(
        <main className='form'>
            <div className='form--input'>
                <input type='text' name='input' id='setup' placeholder='Top text' required className='form--firstinput'></input>
                <input type='text' name='input' id='punchline' placeholder='Bottom text' required className='form--secondinput'></input>
            </div>
            <div className='form--submit'>
                <button type='submit' className='form--submit__input'>Get a new meme image<i class="fa fa-picture-o" aria-hidden="true"></i></button>
            </div>
        </main>
    )
}