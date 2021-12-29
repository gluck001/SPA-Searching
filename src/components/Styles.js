import styled from '@emotion/styled'

export const Button = styled.button`
  padding: 1rem 5rem;
  background-color: #037bfc;
  font-size: 24px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
`
export const Container = styled.div`
  display: flex;
  padding: ${({ padding }) => padding || '40px'};
  padding-bottom: 0;
  justify-content:  ${({ align }) => align};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
`

export const Input = styled.input`
  padding: 10px 20px;
  width: 100%;
  border-radius: 4px;
  margin-right: 40px;
`

export const SearchResult = styled.div`
  padding: 10px 40px;
  font-weight: 500;
  font-size: 20px;
  width: fit-content;
`