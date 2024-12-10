import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Title } from '@/app/page.styled';


interface ClassCardProps {
    image_url: string;
    name: string;
    price: string;
    desc: string;
}

const ClassCard: React.FC<ClassCardProps> = ({ image_url, name, price, desc }) => {
    return (
        <Card style={{ width: '100%', marginBlockEnd: '3em' }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body
                style={{
                    backgroundColor: '#040B4A',
                    borderBottomRightRadius: '1em',
                    borderBottomLeftRadius: '1em'
                }}
            >
                <Card.Title style={{ color: 'white' }}>
                    <Title>{name}</Title>
                </Card.Title>
                <Card.Text style={{ color: 'white' }}>
                    {desc}
                </Card.Text>
                <Button style={{ backgroundColor: '#3AD6AB' }} variant="primary">Lihat Selengkapnya</Button>
            </Card.Body>
        </Card>
    )
}

export default ClassCard