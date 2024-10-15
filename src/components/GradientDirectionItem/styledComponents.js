import styled from 'styled-components'

export const GradientTabItem = styled.li`
  @media screen and (max-width: 577px) {
    width: 48%;
  }
`

export const GradientTabButton = styled.button`
  width: 100px;
  height: 37px;
  color: #334155;
  font-size: 15px;
  font-weight: 600;
  border-width: 0;
  border-radius: 6px;
  background-color: #ededed;
  opacity: ${props => (props.gradient ? '1' : '0.5')};

  @media screen and (max-width: 577px) {
    height: 42px;
    width: 100%;
  }
`
