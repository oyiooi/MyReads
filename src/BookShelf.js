import React,{ Component } from 'react'
import BookAndChanger from './BookAndChanger'

class BookShelf extends Component {
  render(){
      return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelf}</h2>
            <div className="bookshelf-books">
              <BookAndChanger books={this.props.books} updatebook={this.props.updateshelf} />
           </div>
         </div>);
   }}

export default BookShelf