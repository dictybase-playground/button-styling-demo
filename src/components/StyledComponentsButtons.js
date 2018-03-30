import React from "react"
import Button from "material-ui/Button"
import styled from "styled-components"

export const StyledButton = styled(Button)`
  && {
    color: #fff;
    width: 150px;
    background-color: palevioletred;
    min-height: 55px;
  }
`

const StyledComponentsButtons = () => {
  return (
    <div>
      <Button>Material-UI</Button>
      <StyledButton>Styled-Components</StyledButton>
    </div>
  )
}

export default StyledComponentsButtons
