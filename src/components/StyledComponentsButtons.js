import React from "react"
import Grid from "material-ui/Grid"
import Button from "material-ui/Button"
import styled from "styled-components"

const Container = styled.div`
  width: 50%;
`

const StyledButton = styled(Button)`
  && {
    color: #fff;
    width: 50%;
    background-color: palevioletred;
    min-height: 55px;
  }
`

const StyledComponentsButtons = () => {
  return (
    <Container>
      <Grid container spacing={24} justify="center">
        <Grid item xs={12}>
          <h2>styled-components example</h2>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button>Material-UI</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledButton>Styled-Components</StyledButton>
        </Grid>
      </Grid>
    </Container>
  )
}

export default StyledComponentsButtons
