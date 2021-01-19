import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = ({ items }) => items.map((item) => (
  <Item
    key={item.name}
    name={item.name}
    price={item.price}
    stars={item.stars}
    imageUrl={item.imageUrl}
    description={item.description}
  />
));

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
