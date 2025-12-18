import {countryList} from "../constants/countryList";
import {CountryList} from "../types/Types";

export const countriesRemover = (excludedCountries: string[]|undefined): CountryList[] => {
    return countryList?.filter(country => {
        return !(excludedCountries?.find(short => country?.currency_code === short?.toUpperCase()));
    });
};
