import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class PostPeep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: sessionStorage.getItem('user_id'),
      session_key: sessionStorage.getItem('session_key'),
      peep: ""
    };
  };
  
  handlePeep = event => {
    this.setState({ peep: event.target.value })
  }

  handlePostPeep = event => {
    let data = {
      peep: {
        user_id: this.state.user_id,
        body: this.state.peep,
      }
    };
    
    event.preventDefault();
    fetch('https://chitter-backend-api.herokuapp.com/peeps', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Token token=${this.state.session_key}`,
      },
      body: JSON.stringify(data)
    })
      .then((response) => console.log(response.json(), "After login:" + this.state.session_key + "ID:" + this.state.user_id))
      .then((data) => {
        // console.log(response)
        console.log("success:", data);
      })
      .catch((error) => {
        console.error('Error:', error);
        
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