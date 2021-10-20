import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from "../../images/banner/banner.png";

const About = () => {
    return (
        <div>
            

            <Card className="bg-dark text-white">
                <Card.Img src={banner} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Text className="text-primary text-center fw-bold fs-3">YOUR MENTAL AND PHYSICAL WELLBEING MATTER TO US</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <h1>ABOUT US</h1>
            <p>LifeSpring has been founded with the vision to be the nation’s leading community-based mental health institute dedicated to promoting mental health as a pivotal of overall wellness.

            Through advocacy, education, research, and assistance services we dream of a change as a beacon of hope for society.

            Believing in the social integration of mental health services and a gender-inclusive approach – our programs and strategies are committed to promote mental health awareness, to remove the social stigmas, and to ensure the accessibility of mental health services whenever and wherever needed.

            LifeSpring is committed to flourishing the overall mental health perspectives in Bangladesh. We hope and pursue to continue this journey witnessing the creation of thousands of beautiful narratives by healing hearts and transforming lives.</p>
            <br />
            <h2>Our MISSION</h2>
            <p>Our programs and initiatives fulfill our mission of promoting mental health, preventing mental disorders, and achieving victory over mental illness through advocacy, education, research, and services.</p>
            <br />
            <h3>Our VISION</h3>
            <p>Team LifeSpring hopes and pursues to continue its journey, witnessing the creation of thousands of beautiful narratives by healing hearts and transforming the lives of individuals of the nation.</p>
            <br />
            <h1>OUR TEAM</h1>
            <p>“WITH A TEAM OF EXPERTS BELIEVING IN INCLUSIVE WORK”

            LifeSpring is a multidisciplinary team of professionals with relevant training, specialization, and skills.

            To provide a holistic approach to mental health care services we proudly introduce our team of dedicated senior and junior Psychiatrists, Psychologists, Psychosocial workers, and Psychotherapists.

            Comprising more than 200 mental health professionals, with the vision to provide mental and behavioral health services to all – we believe in inclusive work and social integration of mental health care services.</p>
            <button className="btn btn-info m-3 p-2"><Link className="text-decoration-none fw-bolder text-dark" to='/services'>Please Explore Our All Services</Link></button>
        </div>
    );
};

export default About;