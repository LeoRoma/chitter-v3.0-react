import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    }
  };

  handleDelete = (event) => {
    // event.preventDefault();
    this.props.deletePeep()
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleDelete.bind(this)}
          userId={this.props.userId}
          type="submit"
          variant="contained"
          color="secondary"
        >
          Delete
         </Button>
      </div>
    )
  }

};

export default Delete;