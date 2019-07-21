import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import { Card, Row, Col, Icon } from 'antd'
import PropTypes from 'prop-types'

const OpenCollection = (props) => (
    <Route render={({ history}) => (
      <p>
      <a onClick={() => { history.push('/collection/'+ props.id)}}>Abrir coleção<Icon type='arrow-right' /></a>
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
        <OpenCollection id={props.id }/>
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

    render() {    
        let collections = this.state.collections
        return(
            <Row>
                {collections.map(collection => <CardBuilder key={collection.id} id={collection.id} name={collection.name} />)}
            </Row>
        )
    }
} 

CardBuilder.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
}

export default Collections
