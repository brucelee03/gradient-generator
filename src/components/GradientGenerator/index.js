import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  Heading,
  Instruction,
  GradientTabItemList,
  SelectColor,
  GradientColorsPlateContainer,
  GradientColorsPlate,
  ColorGradientValue,
  ColorInputPlate,
  GenerateGradientButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    colorPlate1: '#8ae323',
    colorPlate2: '#014f7b',
    generatedGradientColor: '',
  }

  onChangeColorOfPlate1 = event => {
    this.setState({colorPlate1: event.target.value})
  }

  onChangeColorOfPlate2 = event => {
    this.setState({colorPlate2: event.target.value})
  }

  onClickGradientTab = id => {
    const newGradientDirection = gradientDirectionsList.find(
      eachDirection => eachDirection.directionId === id,
    )
    this.setState({activeGradientDirection: newGradientDirection.value})
  }

  onClickGenerateGradient = () => {
    const {activeGradientDirection, colorPlate1, colorPlate2} = this.state
    const generatedGradientColor = `linear-gradient(to ${activeGradientDirection}, ${colorPlate1}, ${colorPlate2})`
    this.setState({generatedGradientColor})
  }

  render() {
    const {
      activeGradientDirection,
      colorPlate1,
      colorPlate2,
      generatedGradientColor,
    } = this.state
    return (
      <GradientGeneratorContainer
        bgGradientColor={generatedGradientColor}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Instruction>Choose Direction</Instruction>
        <GradientTabItemList>
          {gradientDirectionsList.map(direction => (
            <GradientDirectionItem
              key={direction.directionId}
              gradientItem={direction}
              onClickGradientTab={this.onClickGradientTab}
              activeGradient={activeGradientDirection === direction.value}
            />
          ))}
        </GradientTabItemList>
        <SelectColor>Pick the Colors</SelectColor>
        <GradientColorsPlateContainer>
          <GradientColorsPlate>
            <ColorGradientValue>{colorPlate1}</ColorGradientValue>
            <ColorInputPlate
              type="color"
              value={colorPlate1}
              onChange={this.onChangeColorOfPlate1}
            />
          </GradientColorsPlate>
          <GradientColorsPlate>
            <ColorGradientValue>{colorPlate2}</ColorGradientValue>
            <ColorInputPlate
              type="color"
              value={colorPlate2}
              onChange={this.onChangeColorOfPlate2}
            />
          </GradientColorsPlate>
        </GradientColorsPlateContainer>
        <GenerateGradientButton
          type="button"
          onClick={this.onClickGenerateGradient}
        >
          Generate
        </GenerateGradientButton>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
