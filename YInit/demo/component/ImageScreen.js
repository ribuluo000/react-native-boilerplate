/**
 * Created by nick on 2018/7/22.
 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import MyImageComponent from "src/component/MyImageComponent";
import * as Progress from "react-native-progress";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress/Bar";
import y_string_util from 'src/util/y_string_util';
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
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
        const img_url = 'https://unsplash.it/400/400?image=15';
        const img_url_2 = 'https://unsplash.it/400/400?image=16';
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    ImageScreen
                </Text>
                <ScrollView>
                    <MyImageComponent
                        style={{ width : 50, height : 50 }}
                        source={require('src/assets/image/test.jpg')}
                    />
                    <MyImageComponent
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