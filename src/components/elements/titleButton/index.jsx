import React from 'react'
import { Container } from 'react-bootstrap'

const TitleButton = ({ title }) => {
    return (
        <Container style={{
            borderRadius: '0.4em',
            padding: '1em',
            boxShadow: '0px 0px 4px 0px #00000040',
            fontWeight: '700',
            color: '#040B4A',
            marginBottom: '1em'
        }}>
            {title}
        </Container>
    )
}

export default TitleButton