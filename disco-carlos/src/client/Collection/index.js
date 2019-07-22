import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Row, Col, Button, Select } from "antd";
import DiscForm from "../DiscForm";
import CollectionService from "../Service/CollectionService";
import DiscService from "../Service/DiscService";
import lodash from "lodash";

const CardBuilder = props => {
  const remover = async function() {
    props.deleteDisc(props.id);
  };
  return (
    <Col className="card-box" span={6}>
      <Card title={props.name}>{props.band}</Card>
      <div className="icons-list">
        <Row>
          <Col span={12}>
            <DiscForm
              fetchData={props.fetchData}
              id={props.id}
              name={props.name}
              band={props.band}
              collectionId={props.collectionId}
            />{" "}
          </Col>
          <Col span={12}>
            <Button type="primary" onClick={remover}>
              Deletar
            </Button>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionId: parseInt(this.props.match.params.id),
      collectionName: this.props.history.location.state
        ? this.props.history.location.state.collectionName
        : undefined,
      discs: [],
      filteredDiscs: undefined,
      value: ""
    };
  }

  async componentDidMount() {
    if (!this.state.collectionName || !this.state.collectionId) {
      this.props.history.replace({
        pathname: "/"
      });
    }
    await this.fetchData();
  }

  fetchData = async () => {
    const discs = await CollectionService.fetchAllDiscsFromCollection({
      id: this.props.match.params.id
    });

    this.setState({
      discs: discs || [],
      filteredDiscs: undefined
    });
  };

  deleteDisc = async id => {
    await DiscService.deleteDisc({ id });

    this.fetchData();
  };

  fetchOnCollection = value => {
    const filteredDisc = lodash.filter(this.state.discs, function(disc) {
      return (
        disc.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        disc.band.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    });

    this.setState({
      filteredDiscs: filteredDisc
    });
  };

  render() {
    let discs;

    if (this.state.filteredDiscs) {
      discs = this.state.filteredDiscs;
    } else {
      discs = this.state.discs;
    }

    let collectionId = this.state.collectionId;
    let collectionName = this.state.collectionName;
    return (
      <React.Fragment>
        <h2>{collectionName}</h2>
        <Select
          showSearch
          value={this.state.value}
          placeholder={"Buscar Disco"}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          onSearch={this.fetchOnCollection}
          notFoundContent={null}
          style={{ width: 200 }}
        />
        <Row>
          <div>
            {discs.map(disc => (
              <CardBuilder
                key={disc.id}
                id={disc.id}
                name={disc.name}
                band={disc.band}
                collectionId={collectionId}
                fetchData={() => this.fetchData()}
                deleteDisc={() => this.deleteDisc(disc.id)}
              />
            ))}
          </div>
        </Row>
        <DiscForm
          fetchData={() => this.fetchData()}
          collectionId={collectionId}
        />
      </React.Fragment>
    );
  }
}

CardBuilder.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  band: PropTypes.string,
  collectionId: PropTypes.number,
  fetchData: PropTypes.func,
  deleteDisc: PropTypes.func
};

export default Collection;
