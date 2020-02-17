import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Delete extends Component {

  handleDelete = event => {
    event.preventDefault();
    this.props.delete()
   
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleDelete.bind(this)}
          type="submit"
          variant="contained"
          color="secondary"
        >
          Delete
       </Button>
      </div>
    )
  };
};
export default Delete;