import React from 'react';
import api from '../../../api';

import MainLayout from '../../layouts/MainLayout';
import NewsContent from '../../modules/ui/NewsContent';
import SearchBox from '../../modules/ui/SearchBox';

import '../../../css/news';

const fetchData = api.fetchData;

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            searchTerm: ''
        }
        this.inpRef = React.createRef();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.debTimer = null;
    }

    componentDidMount(){
        fetchData.call(this, '')
    }

    onChangeHandler(evt){
        var me = this;
        var searchTerm = me.inpRef.current.value;
        this.setState({
            searchTerm: searchTerm
        });
        fetchData.call(me, searchTerm)
    }

    render() {
        let searchTerm = this.state.searchTerm; 
        let articles = this.state.articles;

        return(
            <MainLayout>
                <SearchBox
                    inpRef={this.inpRef}
                    onChangeHandler={this.onChangeHandler}
                    totalarticles={articles.length}
                    searchTerm={searchTerm}
                />
                <NewsContent articles={articles} />
            </MainLayout>
        );
    }
}

export default Home;
