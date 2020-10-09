import React from 'react';
import helpers from '../../../api/helpers';

import MainLayout from '../../layouts/MainLayout';
import News from '../../../entities/News';

import '../../../css/news';

const stripSpecialRegex = /\W+/gi;
const stripHtmlRegex = /(<([^>]+)>)/gi;

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            searchTerm: ''
        }
        this.inpRef = React.createRef();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.debTimer = null;
    }

    fetchData(_searchTerm){
        let me = this;
        let searchTerm = _searchTerm || '';
        let cleanSearch = searchTerm.replace(stripHtmlRegex, "");
        cleanSearch = cleanSearch.replace(stripSpecialRegex, '+');
        let api_all = helpers.getAPIUrl('all', {q: cleanSearch});
        let api_top = helpers.getAPIUrl('top', {country: 'gb'});
        let apiUrl = cleanSearch.length > 0 ? api_all : api_top;

        if(this.debTimer !== null){
            clearTimeout(this.debTimer);
        }
        this.debTimer = setTimeout(function(){
            fetch(apiUrl).then((res)=>{
                return res.json();
            }).then((data)=>{
                me.setState({
                    articles: (data && data.articles) || []
                })
            })
        }, 1000)
    }

    componentDidMount(){
        this.fetchData()
    }

    onChangeHandler(evt){
        var me = this;
        var searchTerm = me.inpRef.current.value;
        this.setState({
            searchTerm: searchTerm
        });
        me.fetchData(searchTerm)
    }

    render() {
        var searchTerm = this.state.searchTerm;
        var hasKeyword =  (this.state.searchTerm.length > 0);

        var articles = this.state.articles || [];
        var totalarticles = articles.length;

        var renderMarkup = articles.map((item,k)=>{
            var news = new News(item);
                return (
                    <div className="news" key={`news-${k}`}>
                        
                        <div className="title-wrap">
                            <h3 className="title">{news.title}</h3>
                            <span className="author">by {news.author}</span>
                            <span className="source"> {news.source}</span>
                        </div>
                        <div className="img">
                            <img loading="lazy" alt={news.title} src={news.imageSrc} />
                        </div>
                        <div className="desc">
                            <p className="description">{news.description}</p>
                        </div>
                        <div className="clearBoth"></div>
                    </div>
                )
            }); 
        return(
            <MainLayout>
                <div className="SearchBox">
                    <input ref={this.inpRef} onChange={this.onChangeHandler} type="search" placeholder="Search for Latest News..." />
                </div>
                <div className="results">
                    { hasKeyword &&
                       <div className="res-msg">{`Showing ${totalarticles} results for '${searchTerm}'`}</div>
                    }
                    <div className="row">
                        {renderMarkup}
                    </div>
                </div>
            </MainLayout>
        );
    }
}

export default Home;


/*
var stripSpecialRegex = /\W+/gi;
var stripHtmlRegex = /(<([^>]+)>)/gi;

class BooksPage extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [],
            searchTerm: ''
        }
        this.inpRef = React.createRef();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.fetchBookData = this.fetchBookData.bind(this);
        this.debTimer = null;
    }

    fetchBookData(searchTerm){
        var me = this;
        var cleanSearch = searchTerm.replace(stripHtmlRegex, "");
        cleanSearch = cleanSearch.replace(stripSpecialRegex, '+');
        var apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${cleanSearch}&maxResults=40`

        if(this.debTimer !== null){
            clearTimeout(this.debTimer);
        }
        this.debTimer = setTimeout(function(){
            fetch(apiUrl).then((res)=>{
                return res.json();
            }).then((data)=>{
                me.setState({
                    items: (data && data.items) || []
                })
            })
        }, 1000)
    }

    onChangeHandler(evt){
        var me = this;
        var searchTerm = me.inpRef.current.value;
        this.setState({
            searchTerm: searchTerm
        });
        me.fetchBookData(searchTerm)
    }

    render() {
        var searchTerm = this.state.searchTerm;
        var hasKeyword =  (this.state.searchTerm.length > 0);

        var items = this.state.items || [];
        var totalItems = items.length;

        var renderMarkup = items.map((item)=>{
            var book = new Book(item);
                return (
                    <div className="book" key={book.isbn_10}>
                        <div className="img">
                            <img loading="lazy" alt={book.title} src={book.imageSrc} />
                        </div>
                        <div className="desc">
                            <p className="title">{book.title}</p>
                            <p className="publishInfo">{book.publishInfo}</p>
                        </div>
                    </div>
                )
            });   

        return (
            <div>
                <h1>Books</h1>
                <div className="SearchBox">
                    <input ref={this.inpRef} onChange={this.onChangeHandler} type="search" placeholder="ex: Harry Potter" />
                </div>
                <div className="results">
                    { hasKeyword &&
                       <div className="res-msg">{`Showing ${totalItems} results for '${searchTerm}'`}</div>
                    }
                    <div className="row">
                        {renderMarkup}
                    </div>
                </div>
            </div>
        );
    }
}
*/