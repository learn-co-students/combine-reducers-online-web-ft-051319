import React, { Component } from 'react';
import { connect } from 'react-redux';

class Authors extends Component {

  render() {
   // debugger
  //  let authors = this.props.authors.map(author => <li key={author.id}>{author.authorName}</li>);
  //  if(this.props.authors.length > 0){
    //  let authors = this.props.authors.map(author => (<li key={author.id}>{author.authorName}</li>));
      return (
        <div>
          <ul>
            {this.props.authors.map(author => <li key={author.id}>{author.authorName}</li>)}
          </ul>
        </div>
      )
   // }else{
   //   return ( <div></div> )
   // }
  }
};

const mapStateToProps = state => {
  return { authors: state.authors }
}

export default connect(mapStateToProps)(Authors);
