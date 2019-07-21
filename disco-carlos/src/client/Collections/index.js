import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import { Card, Row, Col, Icon } from 'antd'
import PropTypes from 'prop-types'
import CollectionsForm from '../CollectionForm'

const OpenCollection = (props) => (
    <Route render={({ history}) => (
      <p>
      <a onClick={() => { history.push({pathname:'/collection/'+props.id, state:{collectionName:props.name}})}}>Abrir coleção<Icon type='arrow-right' /></a>
      </p>
    )} />
)

const CardBuilder = (props) =>
    <Col className='card-box' span={6}>
        <Card title={props.name}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        <OpenCollection id={props.id} name={props.name}/>
    </Col>

class Collections extends Component {

    constructor (props) {
        super(props)
        this.state = {
          collections: []
        }
    }

    componentDidMount () {
        this.setState(
            {collections: [
                {id:"1", name:"POP"}, 
                {id:"2", name:"ROCK"},
                {id:"3", name:"SOUL"}, 
                {id:"4", name:"GOSPEL"}
            ]}
        )
    }

    fetchData = () => {
        this.setState(
            {collections: [
                {id:"5", name:"GOSPEL"}
            ]}
        )
    }

    render() {    
        let collections = this.state.collections
        console.log("RENDER!")
        return(
            <React.Fragment>
            <Row>
                {collections.map(collection => <CardBuilder key={collection.id} id={collection.id} name={collection.name} />)}
            </Row>
                <CollectionsForm fetchData={() => this.fetchData()}/>
            </React.Fragment>
        )
    }
} 

CardBuilder.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
}

export default Collections
