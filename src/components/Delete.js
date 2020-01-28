import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Delete extends Component {

  handleDelete = event => {
    event.preventDefault();
    this.props.delete("hello")
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