'use strict';
import React, { PureComponent } from "react";
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, Vibration, View } from "react-native";
import Camera,{ RNCamera } from "react-native-camera";
import T from "src/style/T";
// import HeaderNormalWithRightButtonComponent from "src/component/HeaderNormalWithRightButtonComponent";

export default class ScanScreen extends PureComponent {
    initData() {
        this.code1 = '1';
        this.code2Lateast = '2';

    }


    constructor(props) {
        super(props);
        this.initData();


        this.camera = null;

        this.state = {
            camera : {
                type : RNCamera.Constants.Type.back,
                flashMode : RNCamera.Constants.FlashMode.off,
            },
            isRecording : false,
            qrCode : '',
            init : (mCurScan = 'qrCode') => {
                this.setState({
                    curScan : mCurScan,
                    qrCode : '',
                    barCode : '',
                });
            },
        };

        this.takePicture = this.takePicture.bind(this);
        this.switchType = this.switchType.bind(this);
        this.switchFlash = this.switchFlash.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps, this.props);

        const newState = nextProps.navigation.state;
        const oldState = this.props.navigation.state;
        const curScanOld = oldState.params.curScan;
        const curScanNew = newState.params.curScan;

        //todo

        if (curScanOld != curScanNew) {
            this.state.init(curScanNew);

        }
    }

    takePicture() {
        if (this.camera) {
            alert('takePicture');
            this.camera.takePictureAsync()
                .then((data) => console.log(data))
                .catch(err => console.error(err));
        }
    }

    switchType() {
        let newType;
        const { back, front } = RNCamera.Constants.Type;

        if (this.state.camera.type === back) {
            newType = front;
        } else if (this.state.camera.type === front) {
            newType = back;
        }

        this.setState({
            camera : {
                ...this.state.camera,
                type : newType,
            },
        });
    }

    get typeIcon() {
        let icon;
        const { back, front } = RNCamera.Constants.Type;

        if (this.state.camera.type === back) {
            icon = require('src/assets/camera/ic_camera_rear_white.png');
        } else if (this.state.camera.type === front) {
            icon = require('src/assets/camera/ic_camera_front_white.png');
        }

        return icon;
    }

    switchFlash() {
        let newFlashMode;
        const { auto, torch, off } = RNCamera.Constants.FlashMode;

        if (this.state.camera.flashMode === auto) {
            newFlashMode = torch;
        } else if (this.state.camera.flashMode === torch) {
            newFlashMode = off;
        } else if (this.state.camera.flashMode === off) {
            newFlashMode = torch;
        }

        this.setState({
            camera : {
                ...this.state.camera,
                flashMode : newFlashMode,
            },
        });
    }

    get flashIcon() {
        let icon;
        const { auto, torch, off } = RNCamera.Constants.FlashMode;

        if (this.state.camera.flashMode === auto) {
            icon = require('src/assets/camera/ic_flash_auto_white.png');
        } else if (this.state.camera.flashMode === torch) {
            icon = require('src/assets/camera/ic_flash_on_white.png');
        } else if (this.state.camera.flashMode === off) {
            icon = require('src/assets/camera/ic_flash_off_white.png');
        }

        return icon;
    }

    onBarCodeRead(e) {
        console.log('onBarCodeRead',e.data);
        alert('onBarCodeRead');

        let code = e.data;

        if (code == this.code2Lateast) {
            return;
        }
        Vibration.vibrate();

        // alert(e.data);

        this.code1 = this.code2Lateast;
        this.code2Lateast = code;

        const { state } = this.props.navigation;
        state.params
        && state.params.onReadData
        && state.params.onReadData(code);
        this.onBackPress();

    }

    render() {

        let listHeight = 100;
        let string_title = 'qrcode';

        const { mainReducer } = this.props;

        let centerBox = styles.centerBox;
        let centerBoxBorderColor = T.centerBoxBorderColor;
        let centerBoxAboveText = string_title;

        let v_rn_camera = (
            <RNCamera
                ref={(cam) => {
                    this.camera = cam;
                }}
                barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                style={styles.preview}
                type={this.state.camera.type}
                flashMode={this.state.camera.flashMode}
                defaultTouchToFocus
                mirrorImage={false}
                // onBarCodeRead={(e) => {
                //     console.log('onBarCodeRead',e);
                //     this.onBarCodeRead(e);
                // }}
                onBarCodeRead={(d)=>{
                    console.log('onTextRecognized',d);
                    alert('onTextRecognized');

                }}
            >
                <Text style={[ styles.centerBoxAboveText, { color : centerBoxBorderColor } ]}>
                    {centerBoxAboveText}
                </Text>
                <Text style={[ centerBox, { borderColor : centerBoxBorderColor } ]}/>
                <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
            </RNCamera>
        );


        let v_camera = (
            <Camera
                ref={(cam) => {
                    this.camera = cam;
                }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}
                // onBarCodeRead={(e) => {
                //     console.log('onBarCodeRead',e);
                //     this.onBarCodeRead(e);
                // }}
                onBarCodeRead={(d)=>{
                    console.log('onTextRecognized',d);
                    alert('onTextRecognized');

                }}
            >
                {/*<Text style={[ styles.centerBoxAboveText, { color : centerBoxBorderColor } ]}>*/}
                    {/*{centerBoxAboveText}*/}
                {/*</Text>*/}
                {/*<Text style={[ centerBox, { borderColor : centerBoxBorderColor } ]}/>*/}
            </Camera>
        );

        return v_rn_camera;

        let v = (<View

            style={[ { backgroundColor : 'transparent', flex : 1, } ]}>
            {/*<HeaderNormalWithRightButtonComponent*/}
                {/*textCenter={string_title}*/}
                {/*onBackPress={this.onBackPress}*/}
            {/*/>*/}

            <View style={styles.container}>

                {v_camera}

                <View style={[ styles.overlay, styles.topOverlay, { display : 'none' } ]}>
                    <TouchableOpacity
                        style={styles.flashButton}
                        onPress={
                            () => {
                                this.switchFlash();
                            }
                        }
                    >
                        <Image
                            source={this.flashIcon}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </View>);
        if (Platform.OS == 'android') {
            return v;
        } else {
            return (
                <KeyboardAvoidingView
                    behavior="padding"
                    style={[ { backgroundColor : 'transparent', flex : 1, } ]}
                >
                    {v}
                </KeyboardAvoidingView>
            );
        }
    }

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
        backgroundColor : 'transparent',
    },
    preview : {
        flex : 1,
        alignItems : 'center'
    },
    capture : {
        flex : 0,
        backgroundColor : '#fff',
        borderRadius : 5,
        color : '#000',
        padding : 10,
        margin : 40
    },
    centerBoxAboveText : {
        position : 'absolute',
        top : '10%',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'rgba(0,0,0,0.0)',
        color : 'white'
    },
    centerBox : {
        position : 'absolute',
        top : '10%',
        width : 200,
        height : 200,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 2,
        borderColor : '#29B6F6',
        backgroundColor : 'rgba(0,0,0,0.0)',
    },
    centerBoxBarCode : {
        position : 'absolute',
        top : '10%',
        width : 200,
        height : 130,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 2,
        borderColor : '#29B6F6',
        backgroundColor : 'rgba(0,0,0,0.0)',
    },
    overlay : {
        position : 'absolute',
        padding : 16,
        right : 0,
        left : 0,
        alignItems : 'center',
    },
    topOverlay : {
        top : 0,
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    bottomOverlay : {
        bottom : 0,
        backgroundColor : 'rgba(255,255,255,1.0)',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
    },
    captureButton : {
        padding : 15,
        backgroundColor : 'white',
        borderRadius : 40,
    },
    typeButton : {
        padding : 5,
    },
    flashButton : {
        padding : 5,
    },
    buttonsSpace : {
        width : 10,
    },
});

