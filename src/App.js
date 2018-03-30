import React, { Component } from "react"
import ThemeProviderButtons from "./components/ThemeProviderButtons"
import WithStyleButtons from "./components/WithStylesButtons"
import StyledComponentsButtons from "./components/StyledComponentsButtons"
import "./App.css"

class App extends Component {
  render() {
    return (
      <center>
        <ThemeProviderButtons />
        <WithStyleButtons />
        <StyledComponentsButtons />
      </center>
    )
  }
}

export default App
