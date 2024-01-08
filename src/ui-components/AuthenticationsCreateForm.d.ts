/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AuthenticationsCreateFormInputValues = {
    Square?: boolean;
    Stripe?: boolean;
};
export declare type AuthenticationsCreateFormValidationValues = {
    Square?: ValidationFunction<boolean>;
    Stripe?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthenticationsCreateFormOverridesProps = {
    AuthenticationsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Square?: PrimitiveOverrideProps<SwitchFieldProps>;
    Stripe?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AuthenticationsCreateFormProps = React.PropsWithChildren<{
    overrides?: AuthenticationsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AuthenticationsCreateFormInputValues) => AuthenticationsCreateFormInputValues;
    onSuccess?: (fields: AuthenticationsCreateFormInputValues) => void;
    onError?: (fields: AuthenticationsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthenticationsCreateFormInputValues) => AuthenticationsCreateFormInputValues;
    onValidate?: AuthenticationsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AuthenticationsCreateForm(props: AuthenticationsCreateFormProps): React.ReactElement;
