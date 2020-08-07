import React, {Component} from 'react';
import PropTypes from 'prop-types'; // 数据类型校验 typechecking-with-proptypes
import GridGallery from 'react-grid-gallery';

class Gallery extends Component {
    // 对图片数据类型进行校验
    static propTypes = {
        images: PropTypes.arrayOf(
            PropTypes.shape({
                user: PropTypes.string.isRequired,
                src: PropTypes.string.isRequired,
                caption: PropTypes.string.isRequired,
                thumbnail: PropTypes.string,
                thumbnailWidth: PropTypes.number.isRequired,
                thumbnailHeight: PropTypes.number.isRequired
            })
        )
    }

    render() {
        const { images } = this.props;
        console.log(images);
        const imageArr = images.map( image => {
            return {
                // ... 表示其它属性不变
                ...image,
                // 增加一个 customOverlay 的属性
                customOverlay: (
                    <div>
                        <div>
                            {`${image.user}: ${image.caption}`}
                        </div>
                    </div>
                )
            }
        })
        return (
            <div >
                <GridGallery images={ images } />
                <GridGallery images={ imageArr } />
            </div>
        );
    }
}

export default Gallery;