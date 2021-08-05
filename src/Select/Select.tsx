import React from 'react';
import ReactSelect from 'react-select';
import {Flex, FormControl, Icon, Spinner, useColorModeValue,} from '@chakra-ui/react';

import {ChevronDownIcon, SmallCloseIcon} from '@chakra-ui/icons';
import {FormLabel} from '../FormLabel';

interface SelectProps {
    name?: string;
    value?: string;
    options?: any[];
    isMulti?: boolean;
    isInvalid?: boolean;
    leftAddon?: React.ReactNode
    label?: string
}

export const Select = React.forwardRef<any, SelectProps>((
    {
        name,
        value,
        options = [],
        isMulti = false,
        isInvalid = false,
        leftAddon = undefined,
        label = '',
        ...props
    }, ref) => {

    const themeBgControl = useColorModeValue('#ffffff', 'inherit');
    const themeColorSingleValue = useColorModeValue('#000000', '#ffffff');
    const themeControlBorderColor = useColorModeValue('#E2E8F0', 'rgba(255, 255, 255, 0.16)');
    const themeControlBorderColorFocused = useColorModeValue('#3182ce', '#63b3ed');
    const themeControlBoxShadowFocused = useColorModeValue('0 0 0 1px #3182ce', '0 0 0 1px #63b3ed');
    const themeControlBorderColorHoverFocused = useColorModeValue('#3182ce', '#63b3ed');
    const themeControlBorderColorHover = useColorModeValue('#CBD5E0', 'rgba(255, 255, 255, 0.24)');
    const themeBgMenuList = useColorModeValue('#ffffff', '#2D3748');
    const themeBgOptionSelected = useColorModeValue('#3182ce', '#90cdf4');
    const themeBgOptionHoverSelected = useColorModeValue('#3182ce', '#90cdf4');
    const themeBgOptionHover = useColorModeValue('#EDF2F6', 'rgba(255, 255, 255, 0.06)');
    const themeColorOptionActiveSelected = useColorModeValue('#000000', '#000000');
    const themeColorOptionActive = useColorModeValue('#3182ce', 'rgba(255, 255, 255, 0.80)');
    const themeColorOption = useColorModeValue('#ffffff', '#000000');
    const themeColorOptionSelected = useColorModeValue('#000000', '#ffffff');
    const themePlaceholderColor = useColorModeValue('#A0AEC0', 'rgba(255, 255, 255, 0.24)');
    const themeColorNoOptionsMessage = useColorModeValue('#A0AEC0', 'rgba(255, 255, 255, 0.24)');
    const themeBgMultiValue = useColorModeValue('#EDF2F7', '#2D3748');
    const themeColorMultiValueLabel = useColorModeValue('#000000', '#fffff');
    const themeColorInput = useColorModeValue('#000000', '#ffffff');
    const themeColorInvalid = useColorModeValue('#e53e3e', '#FC8181');
    const themeShadowInvalid = useColorModeValue('0 0 0 1px #e53e3e', '0 0 0 1px #FC8181');

    const indicatorSeparatorStyle = {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        marginBottom: 8,
        marginTop: 8,
        width: 0
    };

    const IndicatorSeparator = ({innerProps}: any) => {
        return (
            <span style={indicatorSeparatorStyle} {...innerProps} />
        );
    };

    const LoadingIndicator = () => {
        return (
            <Spinner color="blue.500" size="xs"/>
        );
    };

    const DropdownIndicator = ({innerProps}: any) => {
        return (
            <Flex alignItems="center" alignContent="center" {...innerProps}>
                <Icon as={ChevronDownIcon} fontSize="1.5rem"/>
            </Flex>
        );
    };

    const ClearIndicator = ({innerProps}: any) => {
        return (
            <Flex alignItems="center" alignContent="center" width="20px" {...innerProps}>
                <Icon as={SmallCloseIcon} fontSize="1.1rem"/>
            </Flex>
        );
    };

    const LoadingMessage = (config: any) => (
        <div {...config.innerProps} style={config.getStyles('loadingMessage', config)}>
            Загрузка...
        </div>
    );

    const customStyles = {
        control: (provided: any, state: any) => {
            const {isFocused} = state;
            const {isSearchable} = state.selectProps;
            return (
                {
                    ...provided,
                    borderColor: isInvalid ? themeColorInvalid : isFocused ? themeControlBorderColorFocused : themeControlBorderColor,
                    boxShadow: isInvalid ? themeShadowInvalid : isFocused && themeControlBoxShadowFocused,
                    padding: isSearchable ? '0.063rem 0.5rem 0.063rem 0.34rem' : '0.313rem 0.5rem 0.313rem 0.3rem',
                    backgroundColor: themeBgControl,
                    transition: '0.3s',
                    borderRadius: '0.375rem',
                    '&:hover': {
                        borderColor: isInvalid ? themeColorInvalid : (isFocused ? themeControlBorderColorHoverFocused : themeControlBorderColorHover),
                        boxShadow: isInvalid && '0 0 0 1px #fffff'
                    }
                }
            )
        },
        menu: (provided: any) => ({
            ...provided,
            backgroundColor: 'inherit',
            zIndex: 999,
            borderWidth: '1px',
            //borderColor: '#E2E8F0',
            borderRadius: '0.375rem',
            boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)'
        }),
        menuList: (provided: any) => ({
            ...provided,
            backgroundColor: themeBgMenuList,
            transition: 'background-color 220ms,color 220ms',
            borderRadius: '0.25rem'
        }),
        option: (provided: any, state: any) => {
            const {isSelected} = state;
            return (
                {
                    ...provided,
                    backgroundColor: isSelected && themeBgOptionSelected,
                    color: isSelected ? themeColorOption : themeColorOptionSelected,
                    ':active': {
                        color: isSelected ? themeColorOptionActiveSelected : themeColorOptionActive
                    },
                    ':hover': {
                        ...provided[':hover'],
                        backgroundColor: isSelected ? themeBgOptionHoverSelected : themeBgOptionHover
                    }
                }
            )
        },
        multiValue: (provided: any) => ({
            ...provided,
            backgroundColor: themeBgMultiValue
        }),
        multiValueLabel: (base: any) => ({
            ...base,
            color: themeColorMultiValueLabel
        }),
        dropdownIndicator: (provided: any) => ({
            ...provided,
            color: '#1A202C',
            ':hover': '#1A202C'
        }),
        clearIndicator: (provided: any) => ({
            ...provided,
            color: '#1A202C',
            ':hover': '#1A202C'
        }),
        singleValue: (provided: any, state: any) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return {...provided, opacity, transition, color: themeColorSingleValue};
        },
        placeholder: (base: any) => ({
            ...base,
            fontSize: '1em',
            color: themePlaceholderColor
        }),
        noOptionsMessage: (base: any) => {
            return {
                ...base,
                color: themeColorNoOptionsMessage
            }
        },
        input: (base: any) => ({
            ...base,
            fontSize: '1em',
            color: themeColorInput
        }),
    }
    const customTheme = (theme: any) => ({
        ...theme,
        borderRadius: 4
    });

    const getValue = () => {
        if (!isMulti) {
            return options.find((item: any) => item.value === value)
        } else {
            return value
        }
    }

    return (
        <FormControl isInvalid={isInvalid}>
            {label && (
                <FormLabel>
                    {label}
                </FormLabel>
            )}
            <ReactSelect
                ref={ref}
                options={options}
                name={name}
                isMulti={isMulti}
                styles={customStyles}
                components={{IndicatorSeparator, LoadingIndicator, LoadingMessage, DropdownIndicator, ClearIndicator}}
                noOptionsMessage={() => 'Нет опций'}
                theme={customTheme}
                value={getValue()}
                {...props}
            />
        </FormControl>
    );
});
