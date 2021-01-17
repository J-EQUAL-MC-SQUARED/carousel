import React from 'react';
import axios from 'axios';
import Controller from './Controller';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // for now, productId is randomly generated
      id: Math.floor(Math.random() * 100),
      items: [],
    };
    this.getRelatedItems = this.getRelatedItems.bind(this);
  }

  componentDidMount() {
    this.getRelatedItems();
  }

  getRelatedItems() {
    const { id } = this.state;
    axios.get(`/api/products/${id}/images`)
      .then((response) => {
        const { relatedItems } = response.data[0];
        this.setState({ items: relatedItems });
      });
  }

  // eventually, wrap Carousel in another <div> with style prop left:
  // manipulate left: using buttons to simulate scrolling

  render() {
    const { items } = this.state;
    return (
      <div id="carousel-main">
        <h2 id="carousel-title">Carousel List of Similar Items:</h2>
        <Controller items={items} />
      </div>
    );
  }
}

export default App;
