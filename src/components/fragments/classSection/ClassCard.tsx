import React from 'react'
import Card from 'react-bootstrap/Card';

interface ClassCardProps {
    image_url: string;
    name: string;
    price: string;
    desc: string;
}

const ClassCard : React.FC<ClassCardProps> = ({ image_url, name, price, desc }) => {
    return (
        <Card className="bg-dark text-white mb-2">
            <Card.Img src={image_url} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <Card.Text>
                    {desc}
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default ClassCard