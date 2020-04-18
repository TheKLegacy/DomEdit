import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

let bookList = [
  {
    "title": "The Sun Also Rises"
    , "author": "Ernest Hemingway"
    , "pages": 260
  }
  ,{
    "title": "The Sun Also Rises1"
    , "author": "Ernest Hemingway1"
    , "pages": 2601
  }
  ,{
    "title": "The Sun Also Rises2"
    , "author": "Ernest Hemingway2"
    , "pages": 2602
  }
  ,{
    "title": "The Sun Also Rises3"
    , "author": "Ernest Hemingway3"
    , "pages": 2603
  }
]

class Library extends React.Component
{
  state = {
    open : true
    , freeBookmark : true
  }

  toggleOpenClosed = () =>
  {
    this.setState( prevState => (
      {
        open: !prevState.open
      }
    ))
  }

  render(){
  const {books} = this.props
  return (
  <div>
    {books.map(
      (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages} freeBookmark={this.state.freeBookmark}/>
    )}
  </div>
  )
}
}

const Book = ({title, author, pages, freeBookmark}) => {
  return (
    <section>
      <h2>t={title}</h2>
      <h2>a={author}</h2>
      <h2>p={pages}</h2>
  <h4>Free Bookmark Today: {freeBookmark ? 'yes': 'no'}</h4>
    </section>
  )
}

let skiData = 
{
    total: 50
    , powder: 20
    , backC: 10
    , goal: 100
}

const SkiDayCounter = ({total, powder, backC, goal}) => 
{

    return (
        <section>
            Ski Days

            <div>
                <p>Total days: {total}</p>
            </div>
            <div>
                <p>Powder days: {powder}</p>
            </div>
            <div>
                <p>Backcountry days: {backC}</p>
            </div>
            <div>
                <p>goal left: {calcGoalProgress(total, goal)}</p>
            </div>
        </section>
    )
}

class SkiCounter extends Component
{
   

    render()
    {
        

        return (
         SkiDayCounter(this.props)
        )
    }
}

const getPercent = decimal => 
    {
        return decimal * 100 + '%';
    }

    const calcGoalProgress = (total, goal) =>
    {
        return getPercent(total/goal);
    }


class Message extends Component 
{
    render ()
    {
        return (
            <div>
                
                <h1>
                    {this.props.msg}
                </h1>
                <h2 style={{color: this.props.color}}>
                    {this.props.age}
                </h2>
                <p>
                    I'll check back in {this.props.minutes} minutes
                </p>
            </div>
        )
    }
}

render(
    <div>
    <Library books={bookList}/>
    <SkiCounter total={skiData.total} powder = {skiData.powder} backC={skiData.backC} goal={skiData.goal}/>
    <Message color="blue" age="20" msg="how are you buddy?" minutes={26}/></div>
    , document.getElementById('root')
)