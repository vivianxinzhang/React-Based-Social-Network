import React, {Component} from 'react';
import { Modal, Button } from 'antd';
import CreatePostForm from "./CreatePostForm";

class CreatePostButton extends Component {
    /* Method 1 to use Ref */
    // constructor(props) {
    //     super(props);
    //     this.myRef = React.createRef();
    // }

    // 通过 state 来决定 modal 是否可见
    state = {
        visible: false,
        confirmLoading: false,
    };
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
        const { visible, confirmLoading } = this.state;
        return (
            <div>
                {/*<div ref={this.myRef}> Method 1 to use Ref </div>*/}
                {/*<div ref="haha"> Method 2 to use Ref </div>*/}
                <Button type = "primary" onClick={this.showModal}>
                    Create New Post
                </Button>
                <Modal title="Create New Post"
                       visible={visible}
                       onOk = {this.handleOk}
                       onCancel={this.handleCancel}
                       confirmLoading={confirmLoading}
                       okText="Create"
                >
                    {/*Method 3 to use Ref*/}
                    {/*<CreatePostForm ref={() => {}}/>*/}
                    {/*<CreatePostForm ref={(formObj) => {this.form = formObj}}/>*/}
                    <CreatePostForm ref={this.getRefForm}/>
                </Modal>
            </div>
        );
    }
    getRefForm = (formObj) => {
        console.log(formObj);
    }
}

export default CreatePostButton;