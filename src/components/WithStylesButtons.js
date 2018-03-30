import React, { Component } from "react"
import { withStyles } from "material-ui/styles"
import Grid from "material-ui/Grid"
import Button from "material-ui/Button"

const styles = {
  root: {
    width: "50%"
  },
  buttons: {
    backgroundColor: "palevioletred",
    color: "#fff",
    width: "50%"
  }
}

class WithStylesButtons extends Component {
  render() {
    return (
      <Grid
        container
        spacing={24}
        justify="center"
        className={this.props.classes.root}>
        <Grid item xs={12}>
          <h2>withStyles example</h2>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button>Regular</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button className={this.props.classes.buttons}>WithStyles</Button>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(WithStylesButtons)
