import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';


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
    // event.preventDefault();
    this.props.sendPeep(this.state)
    this.setState({
      peep: this.state.peep
    })
  }

  render() {
    
    return (
      <div className="sticky">
        <form className="form-group w-25">
          <textarea
            className="form-control"
            id="peep"
            label="Write your peep"
            rows="5"
            name="peep"
            placeholder="Write your peep"
            onChange={this.handlePeep}
          />

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

export default PostPeep;