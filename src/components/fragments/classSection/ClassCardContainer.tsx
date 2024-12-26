import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ClassCard from './ClassCard'

interface ClassCardProps {
    image_url: string;
    name: string;
    price: string;
    desc: string;
}

interface ClassCardContainerProps {
    classItems: ClassCardProps[];
}

const ClassCardContainer: React.FC<ClassCardContainerProps> = ({ classItems }) => {
    return (
        <Container>
            <Row>
                {
                    classItems &&
                    classItems.map((classItem: any, j: number) => {
                        return (
                            <ClassCard
                                key={`${classItem.name}_${j}`}
                                name={classItem.name}
                                price={classItem.price}
                                image_url={classItem.image_url}
                                desc={classItem.desc}
                            />
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default ClassCardContainer