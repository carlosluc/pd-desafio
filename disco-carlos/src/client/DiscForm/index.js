import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'

class ResourceForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fields: {
        name: '',
        band: '',
        songs: []
      },
      success: undefined,
      id: this.props.match.params.id,
      collectionId: this.props.match.collectionId
    }
    this.addDisc = this.addDisc.bind(this)
  }

  componentDidMount () {
    if(!this.state.collectionId){
        // <Route render={history.replace('/'}/>
        this.props.history.replace({
            pathname: '/',
          })
    }

    if (this.state.id) {
      this.getDiscForEdit()
    }
  }

  getDiscForEdit () {
    this.setState({ fields: {"name": "Madame X", "band": "Madonna", "songs": ["1", "2", "3"]} })  
  }

  handleChange (key, value) {
    let resourceFields = { ...this.state.resourceFields }
    resourceFields[key] = value
    resourceFields.type = !(resourceFields.learningContent || resourceFields.teachingContent)
    this.setState({ resourceFields })
  }

  addDisc (resourceFields) {
    this.setState({ success: true })
//     if (this.state.paramsId != null) {
//         request.put(`/resources/${this.state.paramsId}`, { resource_fields: resourceFields })
//           .then(response => {
//             this.setState({ success: true })
//           })
//       } else {
//         request.post('/resources', { resource_fields: resourceFields })
//           .then(response => {
//             this.setState({ success: true })
//           })
//           .catch((error) => {
//             this.setState({ success: false })
//           })
//       }
  }

  render () {
    const fields = this.state.fields
    const { success, paramsId } = this.state
    const isParamsId = paramsId ? 'Adicionar disco a coleção' : 'Salvar disco'

    return (
        <div>
            {success !== undefined ? <h5>{success ? ':D' : '<o>'}</h5> : null}
            <div>
                <Form>
                    <Form.Item label='Nome do disco'>
                        <br />
                        <Input
                        name='name'
                        id='name'
                        onChange={e => this.handleChange(e.target.name, e.target.value)}
                        value={fields.name}
                        />
                    </Form.Item>
                
                    <Form.Item label='Banda'>
                        <br />
                        <Input.TextArea
                        name='band'
                        id='band'
                        onChange={e => this.handleChange(e.target.name, e.target.value)}
                        value={fields.band}
                        />
                    </Form.Item>

                    <Button id='sendDisc' className='submit-button' type='primary' onClick={() => this.addDisc(fields)}>{isParamsId}</Button>
                </Form>
            </div>
        </div>

    )
  }
}

export default ResourceForm
