import React,{ Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  render(){
   let currentRead= this.props.books.filter((book)=>book.shelf==='currentlyReading'),
      wanttoread= this.props.books.filter((book)=>book.shelf==='wantToRead'),
      readed=this.props.books.filter((book)=>book.shelf==='read'),
      listData=[
        {title:'Currently Reading',books:currentRead},
        {title:'Want to Read',books:wanttoread},
        {title:'Read',books:readed} ];
    
    return (
       <div className="list-books">
         <div className="list-books-title">
           <h1>MyReads</h1>
         </div>
         <div className="list-books-content" >
           {listData.map((item)=>(<BookShelf books={item.books} shelf={item.title} updateshelf={this.props.changeshelf} key={item.title}/>))}
         </div>
         <div className="open-search">
           <Link to='/search'>Add a book</Link>
         </div>
      </div>);
  }
}

export default ListBooks