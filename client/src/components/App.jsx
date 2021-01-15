import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div>
        <h2>List of Similar Items:</h2>
      </div>
    );
  }
}

export default App;
