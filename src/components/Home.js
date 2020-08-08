import React, {Component} from 'react';
import { Tabs, Button, Spin } from 'antd';
import Gallery from "./Gallery";
import {GEO_OPTIONS,
    POS_KEY,
    TOKEN_KEY,
    AUTH_HEADER,
    API_ROOT,
    POST_TYPE_IMAGE,
    POST_TYPE_VIDEO,
    POST_TYPE_UNKNOWN
} from "../constants";
import CreatePostButton from "./CreatePostButton";

const { TabPane } = Tabs;   // 解构必须写在 import 之后

class Home extends Component {
    state = {
        isLoadingGeoLocation: false,
        isLoadingPosts: false,
        error: '',
        posts: []
    }
    render() {
        const operations = <CreatePostButton />;
            // <Button type = "primary">Create New Post</Button>;

        return (
            <Tabs tabBarExtraContent={operations}
                  className = "main-tabs"
            >
                <TabPane tab="Image Post" key="1">
                    { this.renderPosts(POST_TYPE_IMAGE) }
                </TabPane>
                <TabPane tab="Video Post" key="2">
                    { this.renderPosts(POST_TYPE_VIDEO) }
                </TabPane>
                <TabPane tab="Map" key="3">
                    Content of tab 3
                </TabPane>
            </Tabs>
        );
    }

    // When the component is rendered to the DOM for the first time such as page load
    // we call the Geolocation API to determine a latitude and longitude for the browser
    componentDidMount() {
        // fetch geo-location
        console.log(navigator.geolocation);
        if ("geolocation" in navigator) {
            this.setState({
                isLoadingGeoLocation: true, // 后续根据是否loading进行spinning的操作
                error: '', // 清空处理 避免error依然为之前的message
            })
            navigator.geolocation.getCurrentPosition(
                this.onSuccessLoadGeoLocation,  // 成功的回调函数
                this.onFailedLoadGeoLocation,  // 失败的回调函数
                GEO_OPTIONS
            )
        } else {
            this.setState({
                error: 'Geolocation location is not supported.'
            })
        }
    }

    // 此处可以拿到位置信息
    onSuccessLoadGeoLocation = (position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        localStorage.setItem(POS_KEY, JSON.stringify({lat: latitude, lon: longitude}));
        this.setState({
            isLoadingGeoLocation: false,
            error: ''
        });
        this.loadNearByPost();
    }

    // 获取位置信息 根据位置信息从后端拿数据
    loadNearByPost = () => {
        const { lat, lon } = JSON.parse(localStorage.getItem(POS_KEY));
        const token = localStorage.getItem(TOKEN_KEY);
        this.setState( {
                isLoadingPosts: true,
                error: ''
        });
        fetch( `${API_ROOT}/search?lat=${lat}&lon=${lon}&range=20000`, {
            method: 'GET',
            headers: {
                Authorization: `${AUTH_HEADER} ${token}`
            }
        })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Loading post error')
            })
            .then(data => {
                console.log(data);
                this.setState({
                    posts : data ? data : [],   // 把fetch到的数据记录到state中
                    isLoadingPosts: false
                });
            })
            .catch((e) => {
                console.error(e);
                this.setState({ isLoadingPosts: false, error: e.message });
            });
    }

    renderPosts = (postType) => {
        const { isLoadingPosts, error, isLoadingGeoLocation, posts } = this.state;
        // Case 1: has error
        if (error) {
            return error;
        }
        // Case 2: loading geo-location
        else if (isLoadingGeoLocation) {
            return <Spin tip = "Loading geolocation ... "/>
        }
        // Case 3: loading posts
        else if ( isLoadingPosts ) {
            return  <Spin tip = "Loading posts ... "/>
        }
        // Case 4: have posts ready
        else if (posts.length > 0) {
            console.log('postType -> ', postType);
            // case 1: image
            // case 2: video
            return postType === POST_TYPE_IMAGE ?
                this.renderImagePosts() : this.renderVideoPost();
            // console.log('posts -> ', imageArr)
            // return <Gallery images={imageArr}/>;
        } else {
            return "No data";
        }
    }

    renderImagePosts = () => {
        const { isLoadingPosts, error, isLoadingGeoLocation, posts } = this.state;
        // Case 1: has error
        if (error) {
            return error;
        }
        // Case 2: loading geo-location
        else if (isLoadingGeoLocation) {
            return <Spin tip = "Loading geolocation ... "/>
        }
        // Case 3: loading posts
        else if ( isLoadingPosts ) {
            return  <Spin tip = "Loading posts ... "/>
        }
        // Case 4: have posts ready
        else if (posts.length > 0) {
            console.log(posts);
            const imageArr = posts.map( post => {
                return {
                    user: post.user,
                    src: post.url,
                    caption: post.message,
                    thumbnail: post.url,
                    thumbnailWidth: 400,
                    thumbnailHeight: 300
                }
            });
            console.log('posts -> ', imageArr)
            return <Gallery images={imageArr}/>;
        } else {
            return "No data";
        }
    }

    renderVideoPost = () => {
        // video
        console.log('video posts');
    }

    onFailedLoadGeoLocation = (err) => {
        console.log(err);
        this.setState({
            isLoadingGeoLocation: false,
            error: 'Failed to load geolocation.'
        })
    }
}

export default Home;