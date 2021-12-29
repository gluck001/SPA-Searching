import React from 'react'
import {
    Container,
    Button,
    Input,
    SearchResult,
} from './Styles'
import { useNavigate } from 'react-router-dom'

const Search = props => {

    const {
        onClick,
        onChange,
        data,
        inputValue,
    } = props

    const resultCount = data && data.length
    const navigate = useNavigate()

    const goTo = () => onClick(() => navigate(`/search?name=${inputValue}`))

    const onKeyDown = evt => {
        if (evt.key === 'Enter') goTo()
    }

    return (
        <>
            <Container padding='40px'>
                <Input
                    {...{ onKeyDown }}
                    {...{ onChange }}
                    value={inputValue || ''}
                />
                <Button onClick={goTo}>
                    Search
                </Button>
            </Container>
            <Container
                align='end'
                weight='700'
                size='22px'
            >
                Total: {resultCount}
            </Container>
            {Array.isArray(data) && data.map((key, idx) => (
                <SearchResult key={idx}>
                    {idx + 1}. {key}
                </SearchResult>
            ))}
        </>
    )
}

export default Search