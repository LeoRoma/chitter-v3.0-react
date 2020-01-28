import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Delete extends Component {

  handleDelete() {
    console.log("hello")
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleDelete.bind(this)}
          type="submit"
          variant="contained"
          color="primary"
        >
          Delete
       </Button>
      </div>
    )
  }
}
export default Delete;