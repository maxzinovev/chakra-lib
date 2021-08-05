import React from 'react';
interface SelectProps {
    name?: string;
    value?: string;
    options?: any[];
    isMulti?: boolean;
    isInvalid?: boolean;
    leftAddon?: React.ReactNode;
    label?: string;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<any>>;
export {};
