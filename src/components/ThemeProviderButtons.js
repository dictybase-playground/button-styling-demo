import React from "react"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
import Grid from "material-ui/Grid"
import Button from "material-ui/Button"

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        width: "50%",
        backgroundColor: "palevioletred",
        color: "#fff"
      }
    }
  }
})

const ThemeProviderButtons = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container spacing={24} justify="center">
        <Grid item xs={12}>
          <h2>ThemeProvider example</h2>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button>Using ThemeProvider</Button>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

export default ThemeProviderButtons
