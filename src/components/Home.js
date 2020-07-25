import React, {Component} from 'react';
import { Tabs, Button } from 'antd';
import { GEO_OPTIONS } from "../constants";

const { TabPane } = Tabs;   // 解构必须写在 import 之后

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

    componentDidMount() {
        // fetch geo-location
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(

                this.onSuccessLoadGeoLocation,  // 成功的回调函数
                this.onFailedLoadGeoLocation,  // 失败的回调函数
                GEO_OPTIONS
            )
        }
    }

    onSuccessLoadGeoLocation = () => {

    }

    onFailedLoadGeoLocation = () => {

    }
}

export default Home;