import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Controller from './Controller';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // for now, productId is randomly generated
      // id: Math.floor(Math.random() * 100),
      items: [],
    };
    this.getRelatedItems = this.getRelatedItems.bind(this);
  }

  componentDidMount() {
    this.getRelatedItems();
  }

  getRelatedItems() {
    const { productId } = this.props;
    axios.get(`/api/products/${productId}/images`)
      .then((response) => {
        const { relatedItems } = response.data[0];
        this.setState({ items: relatedItems });
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div id="carousel-main" role="main">
        <h2 id="carousel-title">People Also Bought...</h2>
        <Controller items={items} />
      </div>
    );
  }
}

Carousel.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default Carousel;
