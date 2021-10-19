import React from 'react';
import { Accordion, Card, CardGroup } from 'react-bootstrap';
import banner from "../../images/banner/banner2.jpg";
import services5 from "../../images/services/5.jpg";
import services4 from "../../images/services/4.jpg";
import services3 from "../../images/services/3.jpg";

const Home = () => {
    return (
        <>
        <Card className="bg-dark text-white">
        <Card.Img src={banner} alt="Card image" />
        </Card>
        <h2 className='text-success'>Our Top Services</h2>
        <CardGroup>
        <Card>
            <Card.Img className="w-100" variant="top" src={services5} />
            <Card.Body>
            <Card.Title>Marriage and family counseling</Card.Title>
            <Card.Text>
            Couples therapists and marriage counselors treat some of the same issues as other psychologists, such as depression and anxiety, substance abuse, and PTSD. Some common issues that family counselors encounter are marital conflicts, adolescent behavior problems, domestic violence and issues related to infertility.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={services4}/>
            <Card.Body>
            <Card.Title>Educational Counselling</Card.Title>
            <Card.Text>
            School Psychologists help students work through issues such as bullying, disabilities, low self-esteem, poor academic performance, social anxiety, problems with authority or problems at home.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={services3} />
            <Card.Body>
            <Card.Title>Mental health counseling</Card.Title>
            <Card.Text>
            Psychologists help People work through issues such as bullying, disabilities, low self-esteem, poor academic performance, social anxiety, problems with authority or problems at home.
            </Card.Text>
            </Card.Body>
        </Card>
        </CardGroup>
        <h1 className="text-success">Frequently Asked Questions (FAQs)</h1>
        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header> What is mental health?</Accordion.Header>
            <Accordion.Body>
            We all have mental health which is made up of our beliefs, thoughts, feelings and behaviours.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>What do I do if the support doesn’t help?</Accordion.Header>
            <Accordion.Body>
            It can be difficult to find the things that will help you, as different things help different people. It’s important to be open to a range of approaches and to be committed to finding the right help and to continue to be hopeful, even when some things don’t work out.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Can you prevent mental health problems?</Accordion.Header>
            <Accordion.Body>
            We can all suffer from mental health challenges, but developing our wellbeing, resilience, and seeking help early can help prevent challenges becoming serious.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header> Are there cures for mental health problems?</Accordion.Header>
            <Accordion.Body>
            It is often more realistic and helpful to find out what helps with the issues you face. Talking, counselling, medication, friendships, exercise, good sleep and nutrition, and meaningful occupation can all help.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header> What causes mental health problems?</Accordion.Header>
            <Accordion.Body>
            Challenges or problems with your mental health can arise from psychological, biological, and social, issues, as well as life events.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
            <Accordion.Header>How do I know if I’m unwell?</Accordion.Header>
            <Accordion.Body>
            If your beliefs , thoughts , feelings or behaviours have a significant impact on your ability to function in what might be considered a normal or ordinary way, it would be important to seek help.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </>
    );
};

export default Home;