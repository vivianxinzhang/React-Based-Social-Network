import React, {Component} from 'react';
import { Tabs, Button } from 'antd';
const { TabPane } = Tabs;

class Home extends Component {
    render() {
        const operations = <Button type = "primary">Create New Post</Button>;
        return (
            <Tabs tabBarExtraContent={operations}
                  className = "main-tabs"
            >
                <TabPane tab="Image Post" key="1">
                    Content of tab 1
                </TabPane>
                <TabPane tab="Video Post" key="2">
                    Content of tab 2
                </TabPane>
                <TabPane tab="Map" key="3">
                    Content of tab 3
                </TabPane>
            </Tabs>
        );
    }
}

export default Home;