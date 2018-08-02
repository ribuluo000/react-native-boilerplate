/**
 * Created by nick on 2018/7/22.
 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import YImageComponent from "src/component/YImageComponent";
import MySvgComponent from "src/lib/svg_uri/MySvgComponent";
import * as Progress from "react-native-progress";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress/Bar";
import y_string_util from "src/util/y_string_util";
import y_icon_util from "src/util/y_icon_util";
import y_image_picker_util from "src/util/y_image_picker_util";
import YShowPictureAndAddComponent from "src/component/YShowPictureAndAddComponent";
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'stretch',
        backgroundColor : '#F5FCFF',
    },
    welcome : {
        fontSize : 20,
        textAlign : 'center',
        margin : 10,
    },
});

class ImageScreen extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            value : '',
            setState : (state) => {
                this.setState(state);
            },
        };

    }

    componentDidMount() {

    }

    get_value = () => {

    };

    render() {
        console.log('ImageScreen', this.props);
        const img_url = 'https://unsplash.it/400/400?image=15';
        const img_url_2 = 'https://unsplash.it/400/400?image=16';
        const svg_url = 'https://www.yoopard.com/download/bft/icons/shoukuan.svg';
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    ImageScreen
                </Text>
                <ScrollView>

                    <Text style={styles.welcome}
                          onPress={() => {
                              y_image_picker_util.openCamera();
                          }}
                    >
                        openCamera
                    </Text>
                    <Text style={styles.welcome}
                          onPress={() => {
                              y_image_picker_util.openCropper();
                          }}
                    >
                        openCropper
                    </Text>
                    <Text style={styles.welcome}
                          onPress={() => {
                              y_image_picker_util.openPicker();
                          }}
                    >
                        openPicker
                    </Text>
                    <Text style={styles.welcome}
                          onPress={() => {
                              y_image_picker_util.selectVideoTapped();
                          }}
                    >
                        selectVideoTapped
                    </Text>
                    <Text style={styles.welcome}
                          onPress={() => {
                              y_image_picker_util.openPickerCropping();
                          }}
                    >
                        openPickerCropping
                    </Text>
                    <Text style={styles.welcome}
                          onPress={() => {
                              y_image_picker_util.openPickerMultiple();
                          }}
                    >
                        openPickerMultiple
                    </Text>

                    {y_icon_util.getIcon(img_url, { width : 30, height : 30, backgroundColor : 'red' }, y_icon_util.TYPE_ICON.IMG_NET)}
                    {y_icon_util.getIcon(require('src/assets/image/test.jpg'), { width : 30, height : 30 }, y_icon_util.TYPE_ICON.IMG_LOCAL)}
                    {y_icon_util.getIcon(svg_url, { width : 30, height : 30, backgroundColor : 'red' }, y_icon_util.TYPE_ICON.SVG_NET)}
                    {y_icon_util.getIcon(require('src/assets/svg/left.svg'), { width : 30, height : 30 }, y_icon_util.TYPE_ICON.SVG_LOCAL)}

                    <MySvgComponent
                        style={{ width : 50, height : 50 }}
                        source={require('src/assets/svg/left.svg')}
                    />
                    <MySvgComponent
                        key={y_string_util.hashcode(svg_url)}
                        style={{ width : 200, height : 200 }}
                        source={{
                            uri : svg_url,
                        }}
                    />

                    <YImageComponent
                        style={{ width : 50, height : 50 }}
                        source={require('src/assets/image/test.jpg')}
                    />

                    <YImageComponent
                        key={y_string_util.hashcode(img_url)}
                        style={{ width : 200, height : 200 }}
                        source={{
                            uri : img_url,
                        }}
                    />
                    <Image
                        key={y_string_util.hashcode(img_url_2)}
                        source={{ uri : img_url_2 }}
                        indicator={ProgressBar}
                        style={{
                            width : 320,
                            height : 240,
                        }}/>
                    <Progress.Bar progress={0.3} width={200}/>
                    <Progress.Pie progress={0.4} size={50}/>
                    <Progress.Circle size={30} indeterminate={true}/>
                    <Progress.CircleSnail color={[ 'red', 'green', 'blue' ]}/>

                    <YShowPictureAndAddComponent
                        editable={true}
                        show_img_swiper={(img_list, index_selected) => {
                            // alert('i='+index_selected);
                            const { dispatch } = this.props.navigation;
                            dispatch({ type : 'ShowSwiperContainer', payload : { img_list, index_selected } });

                        }}
                        onPress_remove_img={(img_list, index_selected) => {
                            alert('Long i=' + index_selected);

                        }}
                        img_list={
                            [
                                { image_url : 'https://avatars3.githubusercontent.com/u/533360?v=3&s=466', },
                                { image_url : 'https://assets-cdn.github.com/images/modules/site/business-hero.jpg', },
                                { image_url : 'https://unsplash.it/400/400?image=151', },
                                { image_url : 'https://unsplash.it/400/400?image=152', },
                                { image_url : 'https://unsplash.it/400/400?image=153', },
                                { image_url : 'https://unsplash.it/400/400?image=154', },
                                { image_url : 'https://unsplash.it/400/400?image=155', },
                                { image_url : 'https://unsplash.it/400/400?image=150', },
                            ]
                        }
                    />

                    <Button
                        onPress={() => {
                        }}
                        title=""
                    />
                </ScrollView>
            </View>
        );
    }

}

ImageScreen.propTypes = {
    navigation : PropTypes.object.isRequired,
};

ImageScreen.navigationOptions = {
    title : 'ImageScreen',
};

export default ImageScreen;