/**
 * 参考：
 * https://github.com/ivpusic/react-native-image-crop-picker
 */
import React from "react";

import ImagePicker from 'react-native-image-crop-picker';
// import y_i18n_util from "./y_i18n_util";

export default class ImagePickerUtil {

    /**
     *

     Error: Cannot run camera on simulator
     Error: User cancelled image selection
     Error: Can't find the image at the specified path


     */

    static selectPhotoTapped(callback, _onlyCanUseCamera = false) {

        let quality = {};
        quality = {
            quality : 0.6,
            // maxWidth : parseInt(WindowUtil.size.width * WindowUtil.size.scale),
            // maxHeight : parseInt(WindowUtil.size.height * WindowUtil.size.scale),
        };
        const options = {
            mediaType : 'photo',
            ...quality,
            storageOptions : {
                skipBackup : true
            }
        };

        if (_onlyCanUseCamera) {
            ImagePickerUtil.openCamera(options, callback);
            return;
        }

        //todo custom view

        // let titles = [ y_i18n_util.t('open_camera'), y_i18n_util.t('open_album') ];
        // let titlesOnPress = [
        //     () => {
        //         ImagePickerUtil.openCamera(options, callback);
        //     },
        //     () => {
        //         ImagePickerUtil.openPicker(options, callback);
        //     },
        // ];
        // MyDialog._showActionSheet(titles, titlesOnPress, 'photoSelect');

    }

    /**
     * Select video only from gallery
     * @param callback
     */
    static selectVideoTapped(callback) {
        ImagePicker.openPicker({
            mediaType: "video",
        }).then((video) => {
            console.log(video);
        }).catch(e=>{
            console.log(e);
        });
    }

    static openPickerCropping(options, callback) {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            ImagePickerUtil.photoPickerCallback(image, callback);
        }).catch(e=>{
            console.log(e);
        });
    }
    static openPickerMultiple(options, callback) {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            //[image,image,image]
            console.log(images);
        }).catch(e=>{
            console.log(e);
        });
    }

    static openPicker(options, callback) {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
        }).then(image => {
            console.log(image);
            ImagePickerUtil.photoPickerCallback(image, callback);
        }).catch(e=>{
            console.log(e);
        });
    }

    static openCamera(options, callback) {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            ImagePickerUtil.photoPickerCallback(image, callback);
        }).catch(e=>{
            console.log(e);
        });

    }
    static openCropper(options, callback) {

        ImagePicker.openCropper({
            path: 'my-file-path.jpg',
            width: 300,
            height: 400
        }).then(image => {
            console.log(image);
            ImagePickerUtil.photoPickerCallback(image, callback);
        }).catch(e=>{
            console.log(e);
        });

    }

    static photoPickerCallback(response, callback) {
        console.log('Response = ', response);
    }

    static clean(callback) {

        ImagePicker.clean().then(() => {
            console.log('removed all tmp images from tmp directory');
        }).catch(e => {
            alert(e);
        });

    }

}

