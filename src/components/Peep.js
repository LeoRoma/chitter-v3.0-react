import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import Like from './Like';
import Delete from './Delete';

class Peep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: sessionStorage.getItem('user_id'),
      isMine: false
    };
  };

  componentDidMount() {
    if (this.props.userId.toString(10) === this.state.userId) {
      this.setState({
        isMine: true
      })
    }
  };

  deletePeep = (id) => {
    this.props.deletePeep(id)
  };

  likePeep = (id) => {
    this.props.likePeep(id)
  };

  unlikePeep = (id) => {
    this.props.unlikePeep(id)
  };

  render() {
    const handle = this.props.handle
    const createdAt = this.props.createdAt
    const body = this.props.body
    const likesCount = this.props.likesCount

    const styles = {
      // fontFamily: "digital",
      color: "white", 
    }


    return (
      <div>

        <Grid xs={9}>
          <CardActionArea>
            <Card className="special-card" style={{ backgroundColor: "transparent", borderColor: 'white' }}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <div >
                    <CardContent style={styles}>
                      <Typography component="h3" variant="h3" style={styles}>
                        {handle}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" style={styles}>
                        {createdAt}
                      </Typography>
                      <Typography variant="subtitle1" paragraph style={styles}>
                        {body}
                      </Typography>
                      <Typography variant="subtitle2" paragraph style={styles}>
                        Likes: {likesCount}
                      </Typography>
                      <Like
                        userId={this.props.userId}
                        likePeep={this.props.likePeep.bind(this)}
                        unlikePeep={this.props.unlikePeep.bind(this)}
                        likes={this.props.likes}
                      />
                      {this.state.isMine ? <Delete deletePeep={this.deletePeep.bind(this)} /> : null}
                    </CardContent>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </CardActionArea>
        </Grid>
      </div>

    )
  }
};



export default Peep;