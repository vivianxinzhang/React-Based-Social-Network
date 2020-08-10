import React, {Component} from 'react';
import { Modal, Button } from 'antd';

class CreatePostButton extends Component {
    // 通过 state 来决定 modal 是否可见
    state = { visible: false};
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        // 解构
        const { visible } = this.state;
        return (
            <div>
                <Button type = "primary" onClick={this.showModal}>
                    Create New Post
                </Button>
                <Modal title="Create New Post"
                       visible={visible}
                       onOk = {this.handleOk}
                       onCancel={this.handleCancel}
                >
                    Hello
                </Modal>
            </div>
        );
    }
}

export default CreatePostButton;