import React, { Component } from 'react';


class Peep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMine: false,
      userId: sessionStorage.getItem('user_id')
    };
  };

  
  // componentDidMount(){
  //   if(this.props.peep.user.id.toString(10)=== this.state.user_id) {
  //     this.setState({isMine:true})
  //   }
  // }
  render() {
    const peep = this.props.peep
    const handle = this.props.handle
    const createdAt = this.props.createdAt
    const body = this.props.body
    return (
      <div>
        <h2>{handle}</h2>
        <h5>{createdAt}</h5>
        <h3>{body}</h3>
      </div>
    )
  }
};

export default Peep;