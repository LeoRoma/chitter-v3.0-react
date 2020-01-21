import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class PostPeep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peep: ""
    };
  };
  
  handlePeep = event => {
    this.setState({ peep: event.target.value })
  }

  handlePostPeep = event => {
    event.preventDefault();
    this.props.sendPeep(this.state)
    this.setState({
      peep: this.state.peep
    }) 
  }

  render() {
    return (
      <div className="container">
        <form>
          <TextField
            variant="outlined"
            required
            // fullWidth
            name="peep"
            label="Write your peep"
            id="peep"
            autoComplete="current-password"
            onChange={this.handlePeep}
          /><br />

          {/* send peep button  */}
          <Button onClick={this.handlePostPeep.bind(this)}
            type="submit"
            variant="contained"
            color="primary"
          >
            Send Peep
          </Button><br />
        </form>

      </div>

    )
  }
}

export default PostPeep