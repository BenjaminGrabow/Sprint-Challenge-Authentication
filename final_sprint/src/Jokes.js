import React from 'react';
import { connect } from 'react-redux';
import { fetchJokes } from './Store/actions'

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount = () => {
  this.props.fetchJokes();
  }

  render() { 
    return ( this.props.jokes ? (this.props.jokes.map(joke => <p>{joke.joke}</p>)) : null );
  }
}

const mapStateToProps = state => {
  return {
    jokes: state.jokes
  }
};
 
export default connect(mapStateToProps, { fetchJokes })(Jokes);