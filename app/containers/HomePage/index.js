/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { Row, Col, Divider } from 'antd';
import { makeSelectFilter } from './selectors';
import { loadRepos } from '../App/actions';
import { setFilter , removeFilter} from './actions';
import reducer from './reducer';
import saga from './saga';
import { MainContainer, basicStyle } from './style';
import Cards from 'components/Cards';
import H1 from 'components/H1';
import { Input, Select, Tag } from 'antd';
const { Search } = Input;
const { Option } = Select;

const key = 'home';

export function HomePage({
  loading,
  error,
  repos,
  filter,
  fetchCartoonData,
  getSelectedFilter,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    fetchCartoonData();
  }, []);

  const { results = [] } = repos;

  const [resultArr, setResultArr] = useState(results);
  const [action, setAction] = useState('');

  useEffect(() => {
    // set the data
    setResultArr(results);
    if (action) {
      setResultArr(resultArr);
    }
  }, [results.length, action]);

  const spiecesContentData = [
    { title: 'Human', value: false },
    { title: 'Mytholog', value: false },
    { title: 'Alien', value: false },
    { title: 'Other Spieces', value: false },
  ];

  const genderContentData = [
    { title: 'Male', value: false },
    { title: 'Female', value: false },
  ];

  const originContentData = [
    { title: 'Unknown', value: false },
    { title: 'Post-Apocalyptic Earth', value: false },
    { title: 'Nuptia 4', value: false },
    { title: 'Other origins', value: false },
  ];

  const [spiecesContent, setSpiecesContent] = useState(spiecesContentData);
  const [genderContent, setGenderContent] = useState(genderContentData);
  const [originContent, setOriginContent] = useState(originContentData);

  const { rowStyle, colStyle, gutter } = basicStyle;

  function handleSorting(val) {
    setAction(val);
    const res = resultArr.sort(compareValues('name', val));
    setResultArr(res);
  }

  function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === 'desc' ? comparison * -1 : comparison;
    };
  }

  function removeFilterFunc(filterObj) {
    removeFilter({ ...filterObj });
    const {filterFor} = filterObj;
    const {filter} = filterObj;
    switch (filterFor) {
      case 'Spieces': {
        const index = spiecesContent.findIndex(i => i.title === filter);
        spiecesContent[index].value = false;
        setSpiecesContent(spiecesContent);
        break;
      }
      case 'Gender': {
        const index = genderContent.findIndex(i => i.title === filter);
        genderContent[index].value = false;
        setGenderContent(genderContent);
        break;
      }
      case 'Origin': {
        const index = originContent.findIndex(i => i.title === filter);
        originContent[index].value = false;
        setOriginContent(originContent);
        break;
      }
    }
  }

  function getSelectedFilterFunc(filter, filterFor) {
    getSelectedFilter({ filter, filterFor });

    switch (filterFor) {
      case 'Spieces': {
        const res = resultArr.filter(i => i.species == filter);
        setResultArr(res);
        const index = spiecesContent.findIndex(i => i.title === filter);
        spiecesContent[index].value = !spiecesContent[index].value;
        setSpiecesContent(spiecesContent);
        break;
      }
      case 'Gender': {
        resultArr.filter(i => i.gender == filter);
        setResultArr(resultArr);
        const index = genderContent.findIndex(i => i.title === filter);
        genderContent[index].value = !genderContent[index].value;
        setGenderContent(genderContent);
        break;
      }
      case 'Origin': {
        resultArr.filter(i => i.origin == filter);
        setResultArr(resultArr);
        const index = originContent.findIndex(i => i.title === filter);
        originContent[index].value = !originContent[index].value;
        setOriginContent(originContent);
        break;
      }
    }
  }

  function handleFilter(val) {
    setAction('search');
    if (val) {
      const res = resultArr.filter(i =>
        i.name.toLowerCase().includes(val.toLowerCase()),
      );
      setResultArr(res);
    } else {
      setResultArr(results);
    }
  }

  console.log('resultArr', resultArr);
  return (
    <MainContainer>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Sapient application homepage"
        />
      </Helmet>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={6} xs={24} style={colStyle}>
          <Row>
            <H1>Filters</H1>
          </Row>
          <Row>
            <Cards
              title="Spieces"
              content={spiecesContent}
              type="checkBoxFilter"
              getSelectedFilterProp={getSelectedFilterFunc}
            />
          </Row>
          <Row>
            <Cards
              title="Gender"
              content={genderContent}
              type="checkBoxFilter"
              getSelectedFilterProp={getSelectedFilterFunc}
            />
          </Row>
          <Row>
            <Cards
              title="Origin"
              content={originContent}
              type="checkBoxFilter"
              getSelectedFilterProp={getSelectedFilterFunc}
            />
          </Row>
        </Col>
        <Col md={18} xs={24} style={colStyle}>
          <Row>
            <H1>
                  Selected filters
            </H1>
          </Row>
          <Row style={{margin: '0 0 16px 0'}}>
            {filter.map((item, index) => <Tag closable key={`tag-${index}`} onClose={()=>removeFilterFunc(item)}>
                {item.filter}
                </Tag>)
            })}
          </Row>
          <Row justify="end">
            <Col xs={24} md={12} style={colStyle}>
              <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={handleFilter}
              />
            </Col>
            <Col xs={24} md={4} offset={8} style={colStyle}>
              <Select defaultValue={null} style={{ width: '100%' }} onChange={handleSorting}>
                <Option value={null}>Sort by Id</Option>
                <Option value="asc">Ascending</Option>
                <Option value="desc">Descending</Option>
              </Select>
            </Col>
          </Row>
          <Row style={{ background: '#57595D', padding: '8px'}}>
            {
              resultArr.length > 0 ? resultArr.map((item, index) => <Col md={6} xs={12} key={`cards-${index}`}>
                    <Cards content={item} type="imageWithContent" />
                  </Col>) : <div>no data found</div>
            )}
          </Row>
        </Col>
      </Row>
    </MainContainer>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.any,
  filter: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  fetchCartoonData: PropTypes.func,
  getSelectedFilter: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  filter: makeSelectFilter(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchCartoonData: () => {
      dispatch(loadRepos());
    },
    getSelectedFilter: type => {
      dispatch(setFilter(type));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
