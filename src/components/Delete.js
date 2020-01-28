import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Delete extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     id = ''
  //   }
  // };

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
          color="primary"
        >
          Delete
       </Button>
      </div>
    )
  };
};
export default Delete;