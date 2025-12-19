🌍 **react-native-country-data**A lightweight and customizable **Country Picker / Country List** for **React Native & Expo** with search functionality and country lookup by **Alpha-2 codes**.

✨ Emoji flags ✨ Searchable country list ✨ Alpha-2 & Alpha-3 country codes ✨ Calling codes & currency info ✨ Fully customizable styles ✨ Expo & React Native compatible 📦 **Installation**

**Expo**expo install react-native-country-data**NPM**npm install react-native-country-data**Yarn**yarn add react-native-country-data

🚀 **Features**🔍 Search countries by name🏳️ Country flags using emojis🌐 Alpha-2 (US) & Alpha-3 (USA) codes☎️ International calling codes💰 Currency details🎨 Fully customizable UI styles⚡ Lightweight & fast📱 Works seamlessly with Expo & React Native

📖 **Example Country Data**Each country object contains rich data:{ name: "Pakistan", alpha2: "PK", alpha3: "PAK", calling\_code: "+92", currency\_code: "PKR", currency\_name: "Pakistani Rupees", symbol: "₨", emoji: "🇵🇰"}🧩 **Components**

1️⃣ **CountriesList**Displays a searchable list of countries.

import { CountriesList } from "react-native-country-data"; { setShowModalBottom(false); setInputFieldValue(item.alpha2); }} searchValue={searchCountry} style={{ buttonStyles: {}, emoji: {}, callingCode: {}, name: {} }}/>

2️⃣ **CountriesPicker**Use this component as a picker or modal dropdown (same API as CountriesList)

import { CountriesPicker } from "react-native-country-data"; { setShowModalBottom(false); setInputFieldValue(item.alpha2); }} searchValue={searchCountry} style={{ container: {}, modal: {}, modalInner: {}, searchBar: {}, message: {}, countryMessage: {}, line: {}, buttonStyles: {}, emoji: {}, callingCode: {}, name: {} }}/>

🔎 **Search Country by Alpha-2 Code**You can quickly retrieve country data using countriesFilter.

import { countriesFilter } from "react-native-country-data";

countriesFilter\["PK"\]?.emoji; // 🇵🇰countriesFilter\["PK"\]?.calling\_code; // +92countriesFilter\["PK"\]?.currency\_code; // PKR**This is useful for**:Pre-selecting countriesShowing flags dynamicallyPhone number inputsLocalization features

🎨 **Styling Customization**You can customize the following styles:

backdropmodallinesearchMessageTextitemsListmodalInnermessageContainertextInputbuttonStylesnamecallingCodecurrencyCodesymbolemoji

**This allows easy integration with**:Tailwind / NativeWindCustom theme systemsInline styles

🛠️ **Common Use Cases**

✅ Phone number inputs✅ Country selection screens✅ Signup & onboarding flows✅ Payment & billing forms✅ Localization & internationalization

🤝 **Contributing**Contributions are welcome!

Fork the repositoryCreate a new branchCommit your changesOpen a Pull Request

⭐ **Support**If you find this package useful, please consider giving it a ⭐ on GitHub.It helps the community grow ❤️

📄 **License**MIT License© react-native-country-data