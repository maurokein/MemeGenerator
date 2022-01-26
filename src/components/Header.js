import React from 'react'

export default function Header(){
    return(
        <div className='header'>
            <img src='smileyface.jpg' alt='logo' className='header--logo'/>
            <h1 className='header--title'>Meme Generator</h1>
            <h4 className='header--slogan'>Do Memes By Yourself</h4>
        </div>
    )
}