import React from 'react'
import  { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from  './ListBooks'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: 不要使用这个状态变量跟踪我们所在的页面
     * 而是使用浏览器地址栏中的URL。
     * 这将确保用户可以使用浏览器的后退和前进按钮进行页面导航
     * 同时提供一个可以收藏为书签和分享的好的网址。
     */
    
    books:[]
  }

  
   componentDidMount () {
    BooksAPI.getAll().then((res)=>{console.log(res);
      this.setState({
        books:res
      })
    })
  }

 changeShelf =(book,shelf) => {
    BooksAPI.update(book,shelf).then(()=>{
      let books=this.state.books,length=books.length,standard=false;
      
      for(let i=0;i<length;i++){ standard=standard||(books[i].id===book.id) };
       
      if(standard){
         for(let i=0;i<length;i++){if(books[i].id===book.id){books[i].shelf=shelf}};console.log(books);
       }else{ book.shelf=shelf; books.push(book)}
      
      this.setState({books:books})
     }
   )   
  }
 
  render() {
    return (
      <div className="app">
        <Route  exact  path='/search' render={({history})=>(<SearchBook addedBooks={this.state.books} changeshelf={(book,shelf)=>{this.changeShelf(book,shelf);history.push('/')}} /> )} />
        <Route exact path='/' render={()=>(<ListBooks books={this.state.books} changeshelf={this.changeShelf} />)} />
      </div>
    )
  }
}

export default BooksApp
