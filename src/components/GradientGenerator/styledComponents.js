import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  background-image: ${props =>
    props.bgGradientColor || 'linear-gradient(to top, #8ae323, #014f7b)'};
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  color: #ffffff;

  @media screen and (max-width: 577px) {
    padding: 20px;
  }
`

export const Heading = styled.h1`
  font-size: 33px;
  font-weight: 500;

  @media screen and (max-width: 577px) {
    font-size: 25px;
    text-align: center;
  }
`

export const Instruction = styled.p`
  color: #ededed;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 24px;

  @media screen and (max-width: 577px) {
    font-size: 18px;
  }
`

export const GradientTabItemList = styled.ul`
  display: flex;
  list-style: none;
  margin-left: -40px;
  gap: 10px;

  @media screen and (max-width: 577px) {
    flex-wrap: wrap;
    width: 100%;
  }
`

export const SelectColor = styled.p`
  color: #ededed;
  font-size: 18px;
  font-weight: 500;
  margin-top: 24px;
`

export const GradientColorsPlateContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 68px;
`

export const GradientColorsPlate = styled.div`
  display: flex;
  flex-direction: column;
`

export const ColorGradientValue = styled.p`
  color: #ededed;
  font-size: 15px;
  font-weight: 500;
  align-self: center;
`

export const ColorInputPlate = styled.input`
  align-self: center;
  margin-top: 12px;
  border: 0;
  background-color: transparent;
  width: 90px;
  height: 38px;

  @media screen and (max-width: 577px) {
    height: 48px;
    margin-top: 7px;
  }
`

export const GenerateGradientButton = styled.button`
  background-color: #00c9b7;
  border-width: 0;
  border-radius: 6px;
  color: #1e293b;
  font-size: 14px;
  font-weight: 600;
  height: 38px;
  width: 100px;
  margin-top: 20px;
`
