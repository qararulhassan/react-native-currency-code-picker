import React from "react";
import { ButtonProps, CountryList, ListHeaderComponentProps, Style } from "../types/Types";
import { Button } from "./Button";
import { FlatList, Keyboard } from "react-native";
import { removeDiacritics } from "../helpers/diacriticsRemover";
import { countriesRemover } from "../helpers/countriesRemover";


interface CountriesListProps {
    type?: string,
    searchValue?: string,
    excludedCountries?: string[],
    popularCountries?: string[],
    showOnly?: string[],

    ListHeaderComponent?: (props: ListHeaderComponentProps) => JSX.Element,
    itemTemplate?: (props: ButtonProps) => JSX.Element,
    pickerButtonOnPress: (item: CountryList) => any,

    style?: Style,
}

export const CountriesList = ({
    showOnly,
    popularCountries,
    type,
    searchValue = '',
    excludedCountries,
    style,
    pickerButtonOnPress,
    ListHeaderComponent,
    itemTemplate: ItemTemplate = Button,
    ...rest
}: CountriesListProps) => {
    // ToDo refactor exclude and showOnly props to objects
    let filteredCodes = countriesRemover(excludedCountries);

    const preparedPopularCountries = React.useMemo(() => {
        return filteredCodes?.filter(country => {
            return (popularCountries?.find(short => country?.alpha2 === short?.toUpperCase()));
        });
    }, [popularCountries]);

    const codes = React.useMemo(() => {
        let newCodes = filteredCodes;

        if (showOnly?.length) {
            newCodes = filteredCodes?.filter(country => {
                return (showOnly?.find(short => country?.alpha2 === short?.toUpperCase()));
            });
        }

        return newCodes
    }, [showOnly, excludedCountries]);

    const resultCountries = React.useMemo(() => {
        const lowerSearchValue = searchValue.toLowerCase();

        return codes.filter((country) => {
            if (country?.alpha2.includes(searchValue) ||
                country?.name.toLowerCase().includes(lowerSearchValue.trim()) ||
                removeDiacritics(country?.name.toLowerCase()).includes(lowerSearchValue.trim())
            ) {
                return country;
            }
        });
    }, [searchValue]);

    const renderItem = ({ item, index }: { item: CountryList, index: number }) => {
        let itemName = item?.name;
        let checkName = itemName.length ? itemName : item?.name;

        return (
            <ItemTemplate
                key={index}
                item={item}
                style={style}
                type={type}
                name={checkName}
                onPress={() => {
                    Keyboard.dismiss();
                    typeof pickerButtonOnPress === 'function' && pickerButtonOnPress(item);
                }}
            />
        );
    };

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={(resultCountries || codes)}
            keyExtractor={(item, index) => '' + item + index}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            style={[style?.itemsList]}
            keyboardShouldPersistTaps={'handled'}
            renderItem={renderItem}
            ListHeaderComponent={(popularCountries && ListHeaderComponent) &&
                <ListHeaderComponent
                    countries={preparedPopularCountries}
                    onPress={(item: CountryList) => {
                        Keyboard.dismiss();
                        typeof pickerButtonOnPress === 'function' && pickerButtonOnPress(item);
                    }}
                />
            }

            {...rest}
        />
    )
};