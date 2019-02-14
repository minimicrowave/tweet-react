class Tweets extends React.Component {
  render() {
    let tweetlist = this.props.tweetlist.map(tweet => {
        return (<React.Fragment>{tweet.user.name} | {tweet.user.screen_name}<li>{tweet.text}</li><br/></React.Fragment>)
    })

    return(
      <ul>{tweetlist}</ul>
    )
  }
}

ReactDOM.render(
  <Tweets tweetlist = {tweets} />, 
  document.getElementById('root')
);

console.log("ho");