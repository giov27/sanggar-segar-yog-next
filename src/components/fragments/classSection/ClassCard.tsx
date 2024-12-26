import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Desc, SubTitle, Title } from '@/app/page.styled';
import { Col } from 'react-bootstrap';


interface ClassCardProps {
    image_url: string;
    name: string;
    price: string;
    desc: string;
}

const ClassCard: React.FC<ClassCardProps> = ({ image_url, name, price, desc }) => {
    return (
        <Col md={6}>
            <Card style={{ width: '100%', marginBlockEnd: '3em' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body
                    style={{
                        backgroundColor: '#040B4A',
                        borderBottomRightRadius: '1em',
                        borderBottomLeftRadius: '1em',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Card.Title style={{ color: 'white' }}>
                        <SubTitle $color='#3AD6AB'>{price}</SubTitle>
                        <Title style={{ textAlign: 'center' }}>{name}</Title>
                    </Card.Title>
                    <hr style={{ border: '2px solid white' }} />
                    <Card.Text style={{ color: 'white', textAlign: 'center' }}>
                        {desc}
                    </Card.Text>
                    <Button style={{ backgroundColor: '#3AD6AB', color: '#040B4A' }} variant="primary">Lihat Selengkapnya</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ClassCard