import React, { Component } from "react";
import { Button, Modal, Form, Input } from "antd";
import PropTypes from "prop-types";
import DiscService from "../Service/DiscService";

const DiscCreateForm = Form.create({ name: "form_in_modal" })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, name, band } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          visible={visible}
          title="Disco"
          okText="Salvar"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Nome do disco">
              {getFieldDecorator("name", {
                initialValue: name,
                rules: [
                  {
                    required: true,
                    message: "Por favor insira o nome do disco!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Banda">
              {getFieldDecorator("band", { initialValue: band })(
                <Input type="textarea" />
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class DiscForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      success: undefined,
      id: this.props.id || undefined,
      collectionId: this.props.collectionId || undefined
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
      const { name, band } = values;

      if (this.state.id) {
        await DiscService.updateDisc({
          id: this.state.id,
          name,
          band,
          collectionId: this.state.collectionId
        });
      } else {
        await DiscService.createDisc({
          name,
          band,
          collectionId: this.state.collectionId
        });
      }

      form.resetFields();
      this.setState({ visible: false });
      this.props.fetchData();
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    let name = this.props.name || "";
    let band = this.props.band || "";

    var message;
    if (this.state.id) {
      message = "Editar";
    } else {
      message = "Adicionar disco a coleção";
    }
    return (
      <React.Fragment>
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
        />
      </React.Fragment>
    );
  }
}

DiscCreateForm.propTypes = {
  name: PropTypes.string,
  band: PropTypes.string
};

export default DiscForm;
