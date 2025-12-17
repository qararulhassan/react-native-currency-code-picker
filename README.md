# react-native-currency-codes-picker

:zap: :zap: :zap: This lib. provide multi lang. currency picker or currency list with search functionality. Fully crossplatform and supported on React-native and expo.
Didn't find your currency ? Just add the required currencies or locales and make a PR. :zap: :zap: :zap:

## :exclamation: Before you start! :exclamation:

I'm looking to enhance this library and would love to hear your thoughts on what features you'd like to see in the next version. Currently, I'm drafting a roadmap for the upcoming release of react-native-currency-codes-picker.

Considering whether the next version should be based on reanimated v3 for improved performance or if it's better to introduce a flexible hook instead of a new component. Your input is crucial in guiding the development, so please share your ideas on the most valuable additions or changes you'd like to see.

## Coming soon :muscle: :pray:

1. Custom search input rendering.
2. Docs update/improve for the best user experience.
3. Animation improvements.

If you have something interesting ! Just write to us :)

# :grey_exclamation: Installation :grey_exclamation:

expo: `expo install react-native-currency-codes-picker`  
npm: `npm i react-native-currency-codes-picker`  
yarn: `yarn add react-native-currency-codes-picker`

# Example

<!-- ![ezgif com-gif-maker](https://user-images.githubusercontent.com/47904385/195978433-29982bec-b5cc-4d2a-ba01-4eb686005567.gif) -->

# Basic usage

### Modal

```JS
import {CurrencyPicker} from "react-native-currency-codes-picker";

export default function App() {
  const [show, setShow] = useState(false);
  const [currencyCode, setCurrencyCode] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
            width: '80%',
            height: 60,
            backgroundColor: 'black',
            padding: 10,
        }}
      >
        <Text style={{
            color: 'white',
            fontSize: 20
        }}>
            {currencyCode}
        </Text>
      </TouchableOpacity>

      // For showing picker just put show state to show prop
      <CurrencyPicker
        show={show}
        // when picker button press you will get the currency object with country code
        pickerButtonOnPress={(item) => {
          setCurrencyCode(item.country_code);
          setShow(false);
        }}
      />
    </View>
  );
}
```

### Modal with list header
```JS
import {CurrencyPicker} from "react-native-currency-codes-picker";

function ListHeaderComponent({currencies, lang, onPress}) {
    return (
        <View
            style={{
                paddingBottom: 20,
            }}
        >
            <Text>
                Popular currencies
            </Text>
            {currencies?.map((currency, index) => {
                return (
                    <CurrencyButton key={index} item={currency} name={currency?.name?.[lang || 'en']} onPress={() => onPress(currency)} />
                )
            })}
        </View>
    )
}

export default function App() {
  const [show, setShow] = useState(false);
  const [currencyCode, setCurrencyCode] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
            width: '80%',
            height: 60,
            backgroundColor: 'black',
            padding: 10,
        }}
      >
        <Text style={{
            color: 'white',
            fontSize: 20
        }}>
            {currencyCode}
        </Text>
      </TouchableOpacity>

      // For showing picker just put show state to show prop
      <CurrencyPicker
        show={show}
        // when picker button press you will get the currency object with dial code
        pickerButtonOnPress={(item) => {
          setCurrencyCode(item.country_code);
          setShow(false);
        }}
        ListHeaderComponent={ListHeaderComponent}
        popularCurrencies={['en', 'ua', 'pl']}
      />
    </View>
  );
}
```

### List

```js
import {CurrencyList} from "react-native-currency-codes-picker";

export default function App() {
  const [currencyCode, setCurrencyCode] = useState('');

  return (
    <View style={styles.container}>
      <View        
        style={{
            width: '80%',
            height: 60,
            backgroundColor: 'black',
            padding: 10,
        }}
      >
        <Text style={{
            color: 'white',
            fontSize: 20
        }}>
            {currencyCode}
        </Text>
      </TouchableOpacity>

      // All props the same as for picker
       <CurrencyList
          lang={'pl'}
          pickerButtonOnPress={(item) => {
              setCurrencyCode(item.dial_code);
          }}
       />
    </View>
  );
}
```

# Props

Below are the props you can pass to the React Component.

| Prop                       | Type      | Default | Example                                    | Description                                                                                                                                                               |
| -------------------------- | --------- | ------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| show                       | boolean   |         |                                            | This prop using for displaying the modal. Put your show state here.                                                                                                       |
| pickerButtonOnPress        | function  |         | (currency) => setCode(currency.dial_code)    | Put your function/functions here for getting currency data from picker.                                                                                                    |
| inputPlaceholder           | string    |         | inputPlaceholder={'Your placeholder'}      | If you need a custom placeholder for your input you may need this prop.                                                                                                   |
| searchMessage              | string    |         | searchMessage={'Some search message here'} | If you want to customize search message just use this prop.                                                                                                               |
| lang                       | string    | 'en'    | lang={'pl'}                                | If you need to change the lang. just put one of supported lang. Or if you didn't find required lang just add them and make a PR :)                                        |
| enableModalAvoiding        | boolean   | false   | enableModalAvoiding={true}                 | Is modal should avoid keyboard ? On android to work required to use with androidWindowSoftInputMode with value pan, by default android will avoid keyboard by itself      |
| androidWindowSoftInputMode | string    |         | androidWindowSoftInputMode={'pan'}         | Basicaly android avoid keyboard by itself, if you want to use custom avoiding you may use this prop                                                                       |
| itemTemplate               | ReactNode |    CurrencyButton     | itemTemplate={YourTemplateComponentsHere}  | This parameter gets a React Node element to render it as a template for each item of the list. These properties are sent to the item: key, item, style, name, and onPress |
| style                      | Object    |         | style={{yoursStylesHere}}                  | If you want to change styles for component you probably need this props. You can check the styling part below.                                                            |
| disableBackdrop                      | boolean    |     false    | disableBackdrop   | if you don't wanna show modal backdrop pass this prop.|
| onBackdropPress                      | function    |     null    | onBackdropPress={() => setShow(false)}  | If you want to close modal when user taps on the modal background. |
| initialState  | string    |         | initialState={'+380'}  | Sometimes you need to pre-select currency for example by user current location so you may use this prop. |
| excludedCurrencies  | array    |         | excludedCurrencies={['RU', 'BY']}  | In this prop you can define list of currencies which you want to remove by adding their codes. |
| showOnly  | array    |         | showOnly={['UA', 'EN']}  | This prop allow you to configure which currencies you want to show. |
| popularCurrencies  | array    |         | popularCurrencies={['UA', 'EN']}  | This prop allow you to send popular currencies array to your ListHeaderComponent. |
| ListHeaderComponent  | JSX.Element    |         | ListHeaderComponent={ListHeaderComponent}  | This prop allow you to create header component to show popular currencies on top of list! Check example section with ListHeaderComponent  |

:grey_exclamation: Also you can use all other FlatList and TextInput props if you need. :grey_exclamation:

# Styling

```JS
<CurrencyPicker
    show={show}
    lang={'cz'}
    style={{
        // Styles for whole modal [View]
        modal: {
            height: 500,
            backgroundColor: 'red'
        },
        // Styles for modal backdrop [View]
        backdrop: {
        
        },
        // Styles for bottom input line [View]
        line: {
        
        },
        // Styles for list of currencies [FlatList]
        itemsList: {
        
        },
        // Styles for input [TextInput]
        textInput: {
              height: 80,
              borderRadius: 0,
        },
        // Styles for currency button [TouchableOpacity]
        currencyButtonStyles: {
              height: 80
        },
        // Styles for search message [Text]
        searchMessageText: {

        },
        // Styles for search message container [View]
        currencyMessageContainer: {
        
        },
        // Flag styles [Text]
        flag: {

        },
        // Dial code styles [Text]
        dialCode: {

        },
        // Currency name styles [Text]
        currencyName: {

        }
    }}
    pickerButtonOnPress={(item) => {
        setCurrencyCode(item.dial_code);
        setShow(false);
    }}
/>
```

# :crossed_flags: Supported langs. :crossed_flags:

```JS 
  "name": {
    "en": "English",
    "ru": "Russian",
    "pl": "Polish",
    "ua": "Ukrainian",
    "cz": "Czech",
    "by": "Belarusian",
    "pt": "Portuguese",
    "es": "Espanol",
    "ro": "Romanian",
    "bg": "Bulgarian",
    "de": "German",
    "fr": "French",
    "nl": "Dutch",
    "it": "Italian",
    "cn": "Chinese",
    "ee": "Estonian",
    "jp": "Japanese",
    "he": "Hebrew",
    "tr": "Turkish"
  },
```

You can add your lang. if you need !!! But after that make a PR please, it will help other people.

# Testing

If you are using this package and need to target one of the components in your automated tests, we currently do provide a `testID` for the following components:
- The wrapping `FlatList` component: 'currencyCodesPickerFlatList'
- The currency search `TextInput` component: 'currencyCodesPickerSearchInput'
- The currency button (`TouchableOpacity`) component: 'currencyCodesPickerCurrencyButton'
