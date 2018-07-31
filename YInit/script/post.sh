#!/bin/bash
echo "Creating project without FaceDetector"
if [ -e node_modules/react-native-camera/ios/FaceDetector ] ; then
  rm -rf node_modules/react-native-camera/ios/FaceDetector
fi
cp node_modules/react-native-camera/postinstall_project/projectWithoutFaceDetection.pbxproj node_modules/react-native-camera/ios/RNCamera.xcodeproj/project.pbxproj

echo "Creating project without FaceDetector ok"
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"

echo "Creating project with react-native-vector-icons without error: https://github.com/facebook/react-native/issues/17610"
if [ -e node_modules/react-native/local-cli/core/__fixtures__/files/package.json ] ; then
  rm -rf node_modules/react-native/local-cli/core/__fixtures__/files/package.json
fi
echo "Creating project with react-native-vector-icons without error ok"
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"





