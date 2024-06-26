import React from 'react';
import api from '../../../api';

import MainLayout from '../../layouts/MainLayout';
import ResultsContent from '../../modules/ui/ResultsContent';
import { getRouteParams } from '../../../helpers';

import '../../../css/news';

const { fetchData } = api;

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const params = getRouteParams(this);

    fetchData.call(this, { sourceId: params.id });
  }

  render() {
    const { data } = this.state;
    const articles = (data && data.articles) || [];

    return (
      <MainLayout>
        <ResultsContent contentType="articles" articles={articles} />
      </MainLayout>
    );
  }
}

export default News;
