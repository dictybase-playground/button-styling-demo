import React, { Component } from "react"
import ThemeProviderButtons from "./components/ThemeProviderButtons"
import WithStyleButtons from "./components/WithStylesButtons"
import StyledComponentsButtons from "./components/StyledComponentsButtons"
import "./App.css"

class App extends Component {
  render() {
    return (
      <center>
        <h2>ThemeProvider example</h2>
        <ThemeProviderButtons />
        <h2>withStyles example</h2>
        <WithStyleButtons />
        <h2>styled-components example</h2>
        <StyledComponentsButtons />
      </center>
    )
  }
}

export default App
