import {ViewStyle, TextStyle} from "react-native";

export interface ItemTemplateProps {
    item: CurrencyItem,
    name: string,
    style?: Style,
    onPress?: (arg: any) => any,
}

export interface ListHeaderComponentProps {
  currencies: CurrencyItem[],
  lang: string,
  onPress: (item: CurrencyItem) => void,
}

export interface CurrencyItem {
    name: {[key: string]: string},
    country_code: string,
    currency_code: string,
    currency_symbol: string,
    flag: string
}

export interface Style {
    backdrop?: ViewStyle,
    modal?: ViewStyle,
    line?: ViewStyle,
    searchMessageText?: TextStyle,
    itemsList?: ViewStyle,
    modalInner?: ViewStyle,
    currencyMessageContainer?: ViewStyle,
    textInput?: TextStyle,
    currencyButtonStyles?: ViewStyle,
    flag?: TextStyle,
    currencySymbol?: TextStyle,
    currencyName?: TextStyle
}
