import React,{ Component } from 'react'
import BookAndChanger from './BookAndChanger'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {
  
  state={
    search:'',
    books:[]
  }

  updateSearch=(search)=>{
    this.setState({search:search})
  }


  onSearch=(search)=>{
    BooksAPI.search(search).then(
      (res)=>{
        let Result;
       if(res.error){
         Result=[];
       }else{
         Result=res;
       };
       this.setState({books:Result})
      })
  }

  render() {
    
    let searchResult=this.state.books,AddedBooks=this.props.addedBooks;
    for(let i=0;i<searchResult.length;i++){
      for(let y=0;y<AddedBooks.length;y++){
        if(searchResult[i].id===AddedBooks[y].id){
           searchResult[i].shelf=AddedBooks[y].shelf
        }
      }
    }
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
           <Link className="close-search"  to='/'>Close</Link>
             <div className="search-books-input-wrapper">
                {/*
                  注意: BooksAPI的搜索仅限于一些特定的词汇。
                  你可以在此找到它们:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  然而，请记住，BooksAPI.search方法可以通过标题或者作者搜索。所以，如果你没有找到一个具体的作者或者头衔也不用担心。每次搜索都受到 SEARCH_TERMS 的限制。
                */}
               <input type="text" placeholder='Search Book Or Author' value={this.state.search} onChange={(event)=>this.updateSearch(event.target.value)} onKeyDown={(e)=>{if(e.keyCode===13){console.log(1);this.onSearch(this.state.search)}}} />
             </div>
        </div>
          <div className="search-books-results">
              <BookAndChanger books={searchResult} updatebook={this.props.changeshelf} />
          </div>
      </div>)
  }
}

export default SearchBook