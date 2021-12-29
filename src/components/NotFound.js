import { Button, Container } from "./Styles"
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    const navigate = useNavigate()

    return (
        <>
            <Container
                weight='700'
                size='20em'
                align='center'
                color='#3d3d5c'
            >
                404
            </Container>
            <Container
                weight='700'
                size='3em'
                align='center'
                color='lightslategray'
                padding='0'
            >
                NOT FOUND
            </Container>
            <Container align='center'>
                <Button onClick={() => navigate('/search')}>
                    GO HOME
                </Button>
            </Container>
        </>
    )
}