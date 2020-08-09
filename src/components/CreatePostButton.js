import React, {Component} from 'react';
import { Modal, Button } from 'antd';

class CreatePostButton extends Component {
    state = { visible: false};
    showModal = () => {
        this.setState({
            visible: true,
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
                <Modal title="Create New Post" visible={visible}>
                    Hello
                </Modal>
            </div>
        );
    }
}

export default CreatePostButton;