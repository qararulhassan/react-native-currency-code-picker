import {currencyCodes} from "../constants/currencyCodes";
import {CurrencyItem} from "../types/Types";

export const currenciesRemover = (excludedCurrencies: string[]|undefined): CurrencyItem[] => {
    return currencyCodes?.filter(currency => {
        return !(excludedCurrencies?.find(short => currency?.code === short?.toUpperCase()));
    });
};
