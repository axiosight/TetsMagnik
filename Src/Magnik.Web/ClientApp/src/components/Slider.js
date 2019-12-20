import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import imgOne from './slide1.jpg';
import imgSecond from './slide2.jpg';
import imgThird from './slide3.jpg';

export class Slider extends Component {
    render() {
        return (
            <Carousel className="border" style={{boxShadow: '7px 7px 12px #cccccc'}}>
                <Carousel.Item>
                    <img className="d-block w-100" src={imgSecond} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Get paid to play with dogs</h3>
                        <p>Our app makes it easy and promotes you to the nation’s largest network of pet parents.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className="d-block w-100" src={imgOne} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Your perfect pet sitter is also your perfect house sitter</h3>
                        <p>Doggy day care that fits your dog's needs, your schedule, and your lifestyle</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className="d-block w-100" src={imgThird} alt="Third slide"/>
                    <Carousel.Caption>
                        <h3>Personalized care for your pet—without breaking the bank</h3>
                        <p>No more kennels—the next level of dog boarding is here</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}