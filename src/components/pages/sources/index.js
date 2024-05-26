import React from 'react';
import api from '../../../api';

import MainLayout from '../../layouts/MainLayout';
import ResultsContent from '../../modules/ui/ResultsContent';
import { getRouteParams } from '../../../helpers';

import '../../../css/sources';

const { fetchData } = api;

class Sources extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const params = getRouteParams(this);

    fetchData.call(this, { endpoint: 'sources', sourceId: params.id });
  }

  render() {
    const { data } = this.state;
    const sources = (data && data.sources) || [];

    return (
      <MainLayout>
        <ResultsContent contentType="sources" sources={sources} />
      </MainLayout>
    );
  }
}

export default Sources;
