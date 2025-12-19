# 🌍 **react-native-country-data**
A lightweight and customizable **Country Picker / Country List** for **React Native & Expo** with search functionality and country lookup by **Alpha-2 codes**.

✨ Emoji flags
<br />✨ Searchable country list 
<br />✨ Alpha-2 & Alpha-3 country codes 
<br />✨ Calling codes & currency info 
<br />✨ Fully customizable styles 
<br />✨ Expo & React Native compatible 

<br />

### 📦 **Installation**

#### **Expo**
```
bash

expo install react-native-country-data
```

#### **NPM**
```
bash

npm install react-native-country-data
```

#### **Yarn**
```
bash

yarn add react-native-country-data
```

<br />

### 🚀 **Features**

+ 🔍 Search countries by name
+ 🏳️ Country flags using emojis
+ 🌐 Alpha-2 (US) & Alpha-3 (USA) codes
+ ☎️ International calling codes
+ 💰 Currency details
+ 🎨 Fully customizable UI styles
+ ⚡ Lightweight & fast
+ 📱 Works seamlessly with Expo & React Native

<br />

### 📖 Example Country Data
Each country object contains rich data:

```
{ 
    name:            "Pakistan", 
    alpha2:          "PK", 
    alpha3:          "PAK", 
    calling_code:    "+92", 
    currency_code:   "PKR", 
    currency_name:   "Pakistani Rupees", 
    symbol:          "₨", 
    emoji:           "🇵🇰"
}
```

<br />

### 🧩 **Components**

#### 1️⃣ **CountriesList**
Displays a searchable list of countries.
```
import { CountriesList } from "react-native-country-data";

<CountriesList
    pickerButtonOnPress={(item) => {
        setShowModalBottom(false);
        setInputFieldValue(item.alpha2);
    }} 
    searchValue={searchCountry} 
    style={{ 
        buttonStyles: {}, 
        emoji: {}, 
        callingCode: {}, 
        name: {} 
    }}
/>
```

#### 2️⃣ **CountriesPicker**
Use this component as a picker or modal dropdown (same API as CountriesList)
```
import { CountriesPicker } from "react-native-country-data"; 

<CountriesPicker
    pickerButtonOnPress={(item) => {
        setShowModalBottom(false);
        setInputFieldValue(item.alpha2);
    }} 
    searchValue={searchCountry} 
    style={{ 
        container: {}, 
        modal: {}, 
        modalInner: {}, 
        searchBar: {}, 
        message: {}, 
        countryMessage: {}, 
        line: {}, 
        buttonStyles: {}, 
        emoji: {}, 
        callingCode: {}, 
        name: {} 
    }}
/>
```

🚨 **CurrencyList**
<br />Displays a searchable list of currencies.
```
bash

<CountriesList
    type="currency"
/>
```
**or**
```
bash

<CountriesPicker
    type="currency"
/>
```

<br />

#### 🔎 **Search Country by Alpha-2 Code**
Use `countriesFilter` to retrieve country data instantly.
```
import { countriesFilter } from "react-native-country-data";

countriesFilter["PK"]?.emoji; // 🇵🇰
countriesFilter["PK"]?.calling_code; // +92
countriesFilter["PK"]?.currency_code; // PKR
```
**This is useful for**:
+ Pre-selecting countries
+ Showing flags dynamically
+ Phone number inputs
+ Localization features

<br />

#### 🎨 **Styling Customization**
You can customize the following styles:
+ `backdrop`
+ `modal`
+ `line`
+ `searchMessageText`
+ `itemsList`
+ `modalInner`
+ `messageContainer`
+ `textInput`
+ `buttonStyles`
+ `name`
+ `alpha2`
+ `alpha3`
+ `callingCode`
+ `currencyCode`
+ `symbol`
+ `emoji`

#### **This allows easy integration with**:
+ Tailwind / NativeWind
+ Custom theme systems
+ Inline styles

<br />

### 🛠️ **Common Use Cases**
+ ✅ Phone number inputs
+ ✅ Country selection screens
+ ✅ Signup & onboarding flows
+ ✅ Payment & billing forms
+ ✅ Localization & internationalization

<br />

### 🤝 **Contributing**
Contributions are welcome!<br />
Fork the repositoryCreate a new branchCommit your changesOpen a Pull Request

<br />

### ⭐ **Support**
If you find this package useful, please consider giving it a ⭐ on GitHub.It helps the community grow ❤️

<br />

### 📄 **License**
MIT License<br/>
©react-native-country-data