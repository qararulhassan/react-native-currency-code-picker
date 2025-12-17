import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { ItemTemplateProps } from "../types/Types";


export const CurrencyButton = ({ item, name, style, ...rest }: ItemTemplateProps) => (
    <TouchableOpacity
        style={[styles.currencyButton, style?.currencyButtonStyles]}
        testID="currencyCodesPickerCurrencyButton"
        {...rest}
    >
        <Text style={[
            {
                flex: 0.2
            },
            style?.flag
        ]}>
            {item?.flag}
        </Text>
        <Text style={[{
            flex: 0.3,
        }, style?.currencySymbol]}>
            {item?.currency_symbol}
        </Text>
        <Text style={[{
            flex: 1
        }, style?.currencyName]}>
            {name}
        </Text>
    </TouchableOpacity>
);

type StyleKeys = 'currencyButton';

const styles: { [key in StyleKeys]: ViewStyle } = {
    currencyButton: {
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
