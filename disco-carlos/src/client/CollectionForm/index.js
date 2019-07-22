import React, { Component } from "react";
import { Button, Modal, Form, Input } from "antd";
import CollectionService from "../Service/CollectionService";

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Nova coleção"
          okText="Salvar"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Nome da coleção">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Por favor insira o nome da coleção!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class CollectionsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }

      const { name } = values;

      await CollectionService.createCollection({ name });

      form.resetFields();
      this.setState({ visible: false });
      this.props.fetchData();
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <React.Fragment>
        <Button type="primary" onClick={this.showModal}>
          Adicionar nova coleção
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </React.Fragment>
    );
  }
}

export default CollectionsForm;
