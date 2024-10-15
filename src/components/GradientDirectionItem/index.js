import {GradientTabButton, GradientTabItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {activeGradient, gradientItem, onClickGradientTab} = props
  const {directionId, displayText} = gradientItem

  const onClickGradientTabItem = () => {
    onClickGradientTab(directionId)
  }

  return (
    <GradientTabItem>
      <GradientTabButton
        gradient={activeGradient}
        type="button"
        onClick={onClickGradientTabItem}
      >
        {displayText}
      </GradientTabButton>
    </GradientTabItem>
  )
}

export default GradientDirectionItem
