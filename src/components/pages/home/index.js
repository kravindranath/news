import React from 'react';
import api from '../../../api';

import MainLayout from '../../layouts/MainLayout';
import ResultsContent from '../../modules/ui/ResultsContent';
import SearchBox from '../../modules/ui/SearchBox';

import '../../../css/news';

const { fetchData } = api;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchTerm: '',
    };
    this.inpRef = React.createRef();
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.debTimer = null;
  }

  componentDidMount() {
    fetchData.call(this, { q: '', endpoint: 'top-headlines' });
  }

  onChangeHandler(evt) {
    const me = this;
    const searchTerm = me.inpRef.current.value;
    this.setState({
      searchTerm,
    });
    fetchData.call(me, { q: searchTerm, endpoint: 'everything' });
  }

  render() {
    const { searchTerm } = this.state;
    const { data } = this.state;
    const articles = (data && data.articles) || [];

    return (
      <MainLayout>
        <SearchBox
          inpRef={this.inpRef}
          onChangeHandler={this.onChangeHandler}
          totalarticles={articles.length}
          searchTerm={searchTerm}
        />
        <ResultsContent contentType="articles" articles={articles} />
      </MainLayout>
    );
  }
}

export default Home;
