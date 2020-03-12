import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
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
    return (
      <div>

        <Grid xs={12}>
          <CardActionArea>
            <Card >
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <div >
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {handle}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {createdAt}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {body}
                      </Typography>
                      <Typography variant="subtitle2" paragraph>
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