import React, {Component} from 'react'
import { Button, Modal, Form, Input, Icon } from 'antd';
import PropTypes from 'prop-types'

let index = 0

const DiscCreateForm = Form.create({ name: 'form_in_modal' })(

    class extends React.Component {
        remove = k => {
            const { form } = this.props;
            const keys = form.getFieldValue('keys');

            if (keys.length === 0) {
            return;
            }
        
            form.setFieldsValue({
            keys: keys.filter(key => key !== k),
            });
        };
        
        add = () => {
            const { form } = this.props;
            const keys = form.getFieldValue('keys');
            console.log("Key no ADD"+ keys)
            const nextKeys = keys.concat(index++);
            console.log("Next Key no ADD"+ nextKeys)

            form.setFieldsValue({
                keys: nextKeys,
            });
        };

        render() {
            const { visible, onCancel, onCreate, form, name, band, songs } = this.props;
            const { getFieldDecorator, getFieldValue } = form;

            console.log("render do props: name "+name+" band "+band+ " songs "+songs)
            console.log("song 0" + songs[0])

            getFieldDecorator('keys', { initialValue: songs });
            const keys = getFieldValue('keys');
            const formSongs = keys.map((k, index) => (
            <Form.Item
                label={index === 0 ? 'Músicas' : ''}
                required={false}
                key={k}
            >
                {getFieldDecorator(`songs[${k}]`,{initialValue:k})(<Input style={{ width: '60%', marginRight: 8 }} />)}
                {keys.length > 1 ? (
                <Icon
                    className="dynamic-delete-button"
                    type="minus-circle-o"
                    onClick={() => this.remove(k)}
                />
                ) : null}
            </Form.Item>));

            return (
            <Modal
                visible={visible}
                title="Create a new collection"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                <Form.Item label="Nome do disco">
                    {getFieldDecorator('name', {initialValue:name,
                    rules: [{ required: true, message: 'Por favor insira o nome do disco!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Banda">
                    {getFieldDecorator('band',{initialValue:band})(<Input type="textarea" />)}
                </Form.Item>
                
                {formSongs}
                
                <Form.Item>
                    <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                    <Icon type="plus" /> Adicionar música
                    </Button>
                </Form.Item>
                </Form>
            </Modal>
            );
        }
    },
);

class DiscForm extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
            name: this.props.name || 'q',
            band: this.props.band || 'w',
            songs: this.props.songs || ["a", "b"],
          visible: false,
          success: undefined,
          id: this.props.id || '',
          collectionId: this.props.collectionId || '',
        }
        // this.addDisc = this.addDisc.bind(this)
    }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
        if (err) {
            return;
        }

        const { keys, songs } = values;
        console.log('Received values of form: ', values);
        console.log('Merged values:', keys.map(key => songs[key]));

        form.resetFields();
        this.setState({ visible: false });
        this.props.fetchData()
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    console.log("id: "+this.state.id)
    console.log("collectionid: "+this.state.collectionId)

    let name = this.state.name
    let band = this.state.band
    let songs = this.state.songs

    console.log("render: name "+name+" band "+band+ " songs "+songs)

    var message
    if(this.state.id){
        message = "Editar"      
    }else{
        message = "Adicionar disco a coleção"
    }
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          {message}
        </Button>
        <DiscCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          name={name}
          band={band}
          songs={songs}
        />
      </div>
    );
  }
}

DiscCreateForm.propTypes = {
    name: PropTypes.string,
    band: PropTypes.string,
    songs: PropTypes.array,
}

export default DiscForm

// ReactDOM.render(<CollectionsPage />, mountNode);