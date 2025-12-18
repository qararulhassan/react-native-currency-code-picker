# react-native-country-data

:zap: :zap: :zap: This lib. provide multi lang. country picker or country list with search functionality. Fully crossplatform and supported on React-native and expo.
Didn't find your country ? Just add the required countries or locales and make a PR. :zap: :zap: :zap:

## :exclamation: Before you start! :exclamation:

I'm looking to enhance this library and would love to hear your thoughts on what features you'd like to see in the next version. Currently, I'm drafting a roadmap for the upcoming release of react-native-country-data.

Considering whether the next version should be based on reanimated v3 for improved performance or if it's better to introduce a flexible hook instead of a new component. Your input is crucial in guiding the development, so please share your ideas on the most valuable additions or changes you'd like to see.

## Coming soon :muscle: :pray:

1. Custom search input rendering.
2. Docs update/improve for the best user experience.
3. Animation improvements.

If you have something interesting ! Just write to us :)

# :grey_exclamation: Installation :grey_exclamation:

expo: `expo install react-native-country-data`  
npm: `npm i react-native-country-data`  
yarn: `yarn add react-native-country-data`

# Example

<!-- ![ezgif com-gif-maker](https://user-images.githubusercontent.com/47904385/195978433-29982bec-b5cc-4d2a-ba01-4eb686005567.gif) -->

# Basic usage

### Modal

```JS
import {CountriesPicker} from "react-native-country-data";

export default function App() {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');

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
            {countryCode}
        </Text>
      </TouchableOpacity>

      // For showing picker just put show state to show prop
      <CountriesPicker
        show={show}
        // when picker button press you will get the country object with country code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.alpha2);
          setShow(false);
        }}
      />
    </View>
  );
}
```

### Modal with list header
```JS
import {CountriesPicker} from "react-native-country-data";

function ListHeaderComponent({countries, lang, onPress}) {
    return (
        <View
            style={{
                paddingBottom: 20,
            }}
        >
            <Text>
                Popular countries
            </Text>
            {countries?.map((countries, index) => {
                return (
                    <Button key={index} item={countries} name={countries?.name} onPress={() => onPress(countries)} />
                )
            })}
        </View>
    )
}

export default function App() {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');

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
            {countryCode}
        </Text>
      </TouchableOpacity>

      // For showing picker just put show state to show prop
      <CountriesPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.country_code);
          setShow(false);
        }}
        ListHeaderComponent={ListHeaderComponent}
        popularCountries={['en', 'ua', 'pl']}
      />
    </View>
  );
}
```

### List

```js
import {CountriesList} from "react-native-country-data";

export default function App() {
  const [countryCode, setCountryCode] = useState('');

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
            {countryCode}
        </Text>
      </TouchableOpacity>

      // All props the same as for picker
       <CountriesList
          pickerButtonOnPress={(item) => {
              setCountryCode(item.calling_code);
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
| pickerButtonOnPress        | function  |         | (country) => setCode(country.dial_code)    | Put your function/functions here for getting country data from picker.                                                                                                    |
| inputPlaceholder           | string    |         | inputPlaceholder={'Your placeholder'}      | If you need a custom placeholder for your input you may need this prop.                                                                                                   |
| searchMessage              | string    |         | searchMessage={'Some search message here'} | If you want to customize search message just use this prop.                                                                                                               |
| enableModalAvoiding        | boolean   | false   | enableModalAvoiding={true}                 | Is modal should avoid keyboard ? On android to work required to use with androidWindowSoftInputMode with value pan, by default android will avoid keyboard by itself      |
| androidWindowSoftInputMode | string    |         | androidWindowSoftInputMode={'pan'}         | Basicaly android avoid keyboard by itself, if you want to use custom avoiding you may use this prop                                                                       |
| itemTemplate               | ReactNode |    CountryButton     | itemTemplate={YourTemplateComponentsHere}  | This parameter gets a React Node element to render it as a template for each item of the list. These properties are sent to the item: key, item, style, name, and onPress |
| style                      | Object    |         | style={{yoursStylesHere}}                  | If you want to change styles for component you probably need this props. You can check the styling part below.                                                            |
| disableBackdrop                      | boolean    |     false    | disableBackdrop   | if you don't wanna show modal backdrop pass this prop.|
| onBackdropPress                      | function    |     null    | onBackdropPress={() => setShow(false)}  | If you want to close modal when user taps on the modal background. |
| initialState  | string    |         | initialState={'+380'}  | Sometimes you need to pre-select country for example by user current location so you may use this prop. |
| excludedCountries  | array    |         | excludedCountries={['RU', 'BY']}  | In this prop you can define list of countries which you want to remove by adding their codes. |
| showOnly  | array    |         | showOnly={['UA', 'EN']}  | This prop allow you to configure which countries you want to show. |
| popularCountries  | array    |         | popularCountries={['UA', 'EN']}  | This prop allow you to send popular countries array to your ListHeaderComponent. |
| ListHeaderComponent  | JSX.Element    |         | ListHeaderComponent={ListHeaderComponent}  | This prop allow you to create header component to show popular countries on top of list! Check example section with ListHeaderComponent  |

:grey_exclamation: Also you can use all other FlatList and TextInput props if you need. :grey_exclamation:

# Styling

```JS
<CountriesPicker
    show={show}
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
        // Styles for list of countries [FlatList]
        itemsList: {
        
        },
        // Styles for input [TextInput]
        textInput: {
              height: 80,
              borderRadius: 0,
        },
        // Styles for button [TouchableOpacity]
        buttonStyles: {
              height: 80
        },
        // Styles for search message [Text]
        searchMessageText: {

        },
        // Styles for search message container [View]
        messageContainer: {
        
        },
        // Flag styles [Text]
        emoji: {

        },
        // Dial code styles [Text]
        callingCode: {

        },
        // name styles [Text]
        name: {

        }
    }}
    pickerButtonOnPress={(item) => {
        setCountryCode(item.calling_code);
        setShow(false);
    }}
/>

You can add your lang. if you need !!! But after that make a PR please, it will help other people.
