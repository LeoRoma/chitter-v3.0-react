import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Delete extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHidden: true,
    }
  };

  

  handleDelete = event => {
    event.preventDefault();
    this.props.delete()
  };

  render() {
    // console.log(this.props.thisUserId)
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