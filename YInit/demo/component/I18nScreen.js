/**
 * Created by nick on 2018/7/22.
 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";
import I18n from 'src/constant/i18n/i18n';
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

class I18nScreen extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            value : I18n.t('greeting'),
            setState:(state)=>{
                this.setState(state);
            },
        };

    }

    componentDidMount() {

    }

    get_value = () => {
        console.log(I18n);
        if(I18n.locale === "chi_sim"){
            I18n.locale = "en";
        }else {
            I18n.locale = "chi_sim";
        }
        this.state.setState(
            {
                value:I18n.t('greeting'),
            }
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    I18nScreen
                </Text>
                <Text style={styles.instructions}>
                    {this.state.value}
                </Text>
                <Button
                    onPress={() => {
                        this.get_value();
                    }}
                    title="change language"
                />
            </View>
        );
    }

}

I18nScreen.propTypes = {
    navigation : PropTypes.object.isRequired,
};

I18nScreen.navigationOptions = {
    title : 'I18nScreen',
};

export default I18nScreen;