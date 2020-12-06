import React from 'react';
import {Button, Icon, Grid,  Segment, Container, Divider, Message,} from "semantic-ui-react";
import ContactForm from "./ContactForm";
import axios from "axios";



const ContactUs = () => {
    const onSubmit = ({email,firstname,lastname,subject,message}) => {

        axios.post('http://127.0.0.1:8000/api/contact/',{firstname,lastname,email,subject,message})
            .then(res=>(
                console.log(res)
            ))
    }
    return (
        <Container>
            <Segment style={{padding: '2em 0'}} vertical>
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <ContactForm onSubmit={onSubmit}/>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Message
                                attached
                            >
                                <Message.Header>
                                    Off Kisumu Road ,Mbale town
                                    Opp. District HeadQuarters
                                </Message.Header>
                                <Message.List>Email:vihigahospital@gmail.com</Message.List>
                                <Message.List>Phone +254-723103564</Message.List>
                            </Message>

                            <Message
                                attached>
                                <Message.Header>
                                    Ward Visiting Hours
                                </Message.Header>
                                <Message.List>Morning 11:00AM-12:00PM</Message.List>
                                <Message.List>Evening 2:00PM-4:00PM</Message.List>
                            </Message>
                            <Segment attached vertcal>
                                 <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8145209611534!2d34.720198214269104!3d0.0790710643630134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17800f191afc41e5%3A0x2d6f057f3b4d5228!2sVihiga%20County%20Referral%20Hospital!5e0!3m2!1sen!2ske!4v1594462871150!5m2!1sen!2ske"
                                    frameBorder="0" style={{border: '0'}} allowFullScreen={true}
                                    aria-hidden="false" tabIndex="0" title='map'>
                                </iframe>
                                 <Divider hidden/>
                                <Button animated attached='bottom'>
                                    <Button.Content visible> <a
                                        href="https://www.google.com/maps/place/Vihiga+County+Referral+Hospital/@0.079066,34.722387,15z/data=!4m5!3m4!1s0x0:0x2d6f057f3b4d5228!8m2!3d0.0790657!4d34.7223869?hl=en">Get
                                        Directions here</a>
                                    </Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' color='red'/>
                                    </Button.Content>
                                </Button>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    );
};


export default ContactUs