import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Card, Row, Col, Icon, Button } from 'antd'
import { Route } from 'react-router-dom'


const ButtonAdd = (props) => (
    <Route render={({ history}) => (
      <button
        type='button'
        onClick={() => { history.push({pathname:'/disc/', state:{collectionId:props.collectionId}})}}
      >
        Adicionar disco
      </button>
    )} />
)

const ButtonEdit = (props) => {
    console.log("porps do edit "+props)
    return(
    <Route render={({ history}) => (
      <button
        type='button'
        onClick={() => { history.push({pathname:'/disc/'+props.id, state:{collectionId:props.collectionId} })}}
      >
        Editar
      </button>
    )} />
)}

const CardBuilder = (props) => {
    console.log("collectionId no cardBuild: "+props.collectionId)

    return (<Col className='card-box' span={6}>
        <Card title={props.name+" - "+props.band}>
            <p>LISTA DAS MUSICAS</p>
        </Card>
        <div className='icons-list'>
            <p>
                <Row >
                <Col span={12}><ButtonEdit id={props.id} collectionId={props.collectionId}/></Col>
                <Col span={12}><Icon type='dollar' /> REMOVER </Col>
                </Row>
            </p>
        </div>
    </Col>)
}

class Collection extends Component {

    constructor (props) {
        super(props)
        this.state = {
            collectionId: this.props.match.params.id,
            collectionName: this.props.history.location.state? this.props.history.location.state.collectionName:undefined,
            discs: []
        }
    }

    componentDidMount(){
        if(!this.state.collectionName || !this.state.collectionId){
            this.props.history.replace({
                pathname: '/',
              })
        }
    
        //faz a busca

        this.setState(
            {discs: [{ "id": "1"}]}
        )
    }

    render() {
        let discs = this.state.discs
        let collectionId = this.state.collectionId
        let collectionName= this.state.collectionName
        return (
            <div>
                <h2>{collectionName}</h2>
                <Row>
                    <div>
                        {discs.map(disc => <CardBuilder key={disc.id} id={disc.id} name={disc.name} band={disc.band} collectionId={collectionId}/>)}
                    </div>
                </Row>        
            <ButtonAdd collectionId={collectionId}/> 
            </div>
        )
    }

}

Collection.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      })
    })
  }

CardBuilder.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    band: PropTypes.string,
    collectionId: PropTypes.string
}

export default Collection