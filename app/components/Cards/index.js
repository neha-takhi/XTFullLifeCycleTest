import React from 'react';
import PropTypes from 'prop-types';

import { Card, Col, Row } from 'antd';
import CheckBoxList from '../CheckBoxList';
import { CardWrapper } from './style';
import List from '../List';
import ListItem from '../ListItem';

function Cards(props) {
  const { title, content, type, getSelectedFilterProp } = props;
  const { Meta } = Card;
  let itemList = [];
  if (type === 'imageWithContent') {
    itemList = [
      { title: 'status', value: content.status || '' },
      { title: 'spieces', value: content.species || '' },
      { title: 'gender', value: content.gender || '' },
      { title: 'origin', value: content.origin.name || '' },
      { title: 'location', value: content.location.name || '' },
    ];
  }

  function diff_years(dt2, dt1) {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.abs(Math.round(diff / 365.25));
  }

  return (
    <CardWrapper className={type}>
      {
        type === 'checkBoxFilter' && <Card title={title} style={{ width: '320px', margin: '0 0 16px 0'}}>
          <CheckBoxList
            data={content}
            getSelectedFilterFunc={getSelectedFilterProp}
            filterFor={title}
          />
        </Card>
      }
      {type === 'imageWithContent' && (
        <Card
          hoverable
          style={{ margin: '8px' }}
          bordered={false}
          cover={<img
alt="example" src={content.image} />}
        >
          <Meta
            title={content.name}
            description={`id:${content.id} - created ${diff_years(
              new Date(content.created),
              new Date(),
            )} years ago`}
          />
          <List items={itemList} component={ListItem} className="card-list" />
        </Card>
      )}
    </CardWrapper>
  );
}

Cards.propTypes = {
  title: PropTypes.string,
  content: PropTypes.any,
};

export default Cards;
