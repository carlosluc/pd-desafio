import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Card, Row, Col, Icon, Button } from 'antd'
import { Route } from 'react-router-dom'
import DiscForm from '../DiscForm'



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
                <Col span={12}><DiscForm fetchData={props.fetchData} id={props.id} name={props.name} band={props.band} songs={props.songs} collectionId={props.collectionId}/> </Col>
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

    fetchData = () => {
        console.log("fetchhh")
        this.setState(
            
                {discs:[{"id":"1"},{"id":"2"}]}
            
        )
    }

    render() {
        let discs = this.state.discs
        let collectionId = this.state.collectionId
        let collectionName= this.state.collectionName
        return (
            <React.Fragment>
                <h2>{collectionName}</h2>
                <Row>
                    <div>
                        {discs.map(disc => <CardBuilder key={disc.id} id={disc.id} name={disc.name} band={disc.band} songs={disc.songs} collectionId={collectionId} fetchData={() => this.fetchData()}/>)}
                    </div>
                </Row>        
            <DiscForm fetchData={() => this.fetchData()} collectionId={collectionId}/>             
            </React.Fragment>
        )
    }

}

CardBuilder.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    band: PropTypes.string,
    songs: PropTypes.array,
    collectionId: PropTypes.string,
    fetchData: PropTypes.func
}

export default Collection