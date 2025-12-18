import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { ButtonProps } from "../types/Types";
import React from "react";


export const Button = ({ item, name, style, type, ...rest }: ButtonProps) => (
    <TouchableOpacity style={[
        styles.itemButton, 
        style?.buttonStyles
    ]} testID="countryInformationPickerButton" {...rest}>
        {type !== 'currency' && (
            <React.Fragment>
                <Text style={[{ flex: 0.2 }, style?.emoji]}>{item?.emoji}</Text>
                <Text style={[{ flex: 0.3 }, style?.callingCode]}>{item?.calling_code}</Text>
                <Text style={[{ flex: 1 }, style?.name]}>{name}</Text>
            </React.Fragment>
        )}
        {type === 'currency' && (
            <React.Fragment>
                <Text style={[{ flex: 0.2 }, style?.emoji]}>{item?.emoji}</Text>
                <Text style={[{ flex: 1 }, style?.name]}>{item?.currency_name}</Text>
                <Text style={[{ flex: 0.2 }, style?.symbol]}>{item?.symbol}</Text>
            </React.Fragment>
        )}
    </TouchableOpacity>
);

type StyleKeys = 'itemButton';

const styles: { [key in StyleKeys]: ViewStyle } = {
    itemButton: {
        paddingVertical: 10,
        backgroundColor: '#f5f5f5',
        width: '100%',
        height: 50,
        paddingHorizontal: 25,
        alignItems: 'center',
        marginVertical: 2,
        flexDirection: 'row',
        borderRadius: 10,
    },
};
