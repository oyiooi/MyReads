import React ,{ Component } from 'react'

class BookAndChanger extends Component {

  render(){
    let books=this.props.books;
    
    return  (<ol className='books-grid' >
                 { books.map((book)=>(<li key={book.id}>
                     <div className="book">
                       <div className="book-top">
                         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks?book.imageLinks.thumbnail:"https://books.google.com/googlebooks/images/no_cover_thumb.gif" })` }}></div>
                         <div className="book-shelf-changer">
                           <select  value={(book.shelf)?book.shelf:'none'} onChange={(event)=>{ let selectedOption=event.target.options[event.target.selectedIndex],
                                                 shelf=selectedOption.value;
                                                    this.props.updatebook(book,shelf)}}>
                             <option value="none0" disabled>Move to...</option>
                             <option value="currentlyReading">Currently Reading</option>
                             <option value="wantToRead">Want to Read</option>
                             <option value="read">Read</option>
                             <option value="none">None</option>
                          </select>
                         </div>  
                       </div>
                       <div className="book-title">{book.title?book.title:'匿名'}</div>
                       <div className="book-authors">{book.authors?book.authors.toString():'佚名'}</div>
                     </div>
                  </li>))}
                </ol>)
       }
  }

export default BookAndChanger 

