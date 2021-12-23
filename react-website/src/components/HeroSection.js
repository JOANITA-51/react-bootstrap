import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
            <h1>THE TIME IS NOW</h1>
            <p>Do you have plans for tomorrow?</p>
            <div className="hero-btn">
                <Button className='btns' buttonSize = 'btn--large' buttonStyle = 'btn--outline'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonSize = 'btn--large' buttonStyle = 'btn--primary'>
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
