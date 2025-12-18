import {ViewStyle, TextStyle} from "react-native";

export interface ButtonProps {
    item: CountryList,
    name: string,
    style?: Style,
    type?: string,
    onPress?: (arg: any) => any,
}

export interface ListHeaderComponentProps {
    countries: CountryList[],
    onPress: (item: CountryList) => void,
}

export interface CountryList {
    name: string,
    alpha2: string,
    alpha3: string,
    calling_code: string,
    currency_code: string,
    currency_name: string,
    symbol: string,
    emoji: string,
}

export interface Style {
    backdrop?: ViewStyle,
    modal?: ViewStyle,
    line?: ViewStyle,
    searchMessageText?: TextStyle,
    itemsList?: ViewStyle,
    modalInner?: ViewStyle,
    messageContainer?: ViewStyle,
    textInput?: TextStyle,
    buttonStyles?: ViewStyle,
    name: TextStyle,
    alpha2: TextStyle,
    alpha3: TextStyle,
    callingCode: TextStyle,
    currencyCode: TextStyle,
    symbol: TextStyle,
    emoji: TextStyle,
}
