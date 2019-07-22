import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Card, Row, Col, Icon } from "antd";
import PropTypes from "prop-types";
import CollectionsForm from "../CollectionForm";
import CollectionService from "../Service/CollectionService";

const OpenCollection = props => (
  <Route
    render={({ history }) => (
      <p>
        <a
          onClick={() => {
            history.push({
              pathname: "/collection/" + props.id,
              state: { collectionName: props.name }
            });
          }}
        >
          Abrir coleção
          <Icon type="arrow-right" />
        </a>
      </p>
    )}
  />
);

const CardBuilder = props => (
  <Col className="card-box" span={6}>
    <Card title={props.name} />
    <OpenCollection id={props.id} name={props.name} />
  </Col>
);

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
  }

  async componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const collections = await CollectionService.fetchAllCollection();

    this.setState({
      collections: collections || []
    });
  };

  render() {
    let collections = this.state.collections;
    return (
      <React.Fragment>
        <Row>
          {collections.map(collection => (
            <CardBuilder
              key={collection.id}
              id={collection.id}
              name={collection.name}
            />
          ))}
        </Row>
        <CollectionsForm fetchData={() => this.fetchData()} />
      </React.Fragment>
    );
  }
}

CardBuilder.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
};

export default Collections;
