import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Card, Row, Col, Icon, Button } from 'antd'
import { Route } from 'react-router-dom'


const ButtonAdd = (props) => (
    <Route render={({ history}) => (
      <button
        type='button'
        onClick={() => { history.push('/disc/', props.collectionId)}}
      >
        Adicionar disco
      </button>
    )} />
)

const ButtonEdit = (props) => {
    return(
    <Route render={({ history}) => (
      <button
        type='button'
        onClick={() => { history.push('/disc/'+props.id, props.collectionId) }}
      >
        Editar
      </button>
    )} />
)}

const CardBuilder = (props) =>
    <Col className='card-box' span={6}>
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
    </Col>

class Collection extends Component {

    constructor (props) {
        super(props)
        this.state = {
            collectionId: this.props.match.params.id,
            discs: []
        }
    }

    componentDidMount(){
        //faz a busca
        console.log(this.state.collectionId)
        if(!this.state.collectionId){
            // <Route render={history.replace('/'}/>
            this.props.history.replace({
                pathname: '/',
              })
        }

        this.setState(
            {discs: [{ "id": "1"}]}
        )
    }

    render() {
        let discs = this.state.discs
        let collectionId = this.setState.collectionId
        return (
            <div>
                <h2>NOME DA COLECAO</h2>
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