import React, {Component} from 'react';
import { Form, Upload, Input, Icon } from "antd";

class NormalCreatePostForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };

        return (
            <Form {...formItemLayout}>
                <Form.Item label="Message">
                    {
                        getFieldDecorator('message', {
                            rules: [{
                                required: true,
                                message: 'Please input your message'
                            }]
                        })(<Input />)
                    }
                </Form.Item>
                <Form.Item label="Image/Video">
                    {
                        getFieldDecorator('image', {
                            rules: [{
                                required: true,
                                message: 'Please upload your image'
                            }]
                        })(
                            <Upload.Dragger>

                            </Upload.Dragger>
                            )
                    }
                </Form.Item>
            </Form>
        );
    }
}
// HOC to get form object
const CreatePostForm = Form.create()(NormalCreatePostForm);
export default CreatePostForm;