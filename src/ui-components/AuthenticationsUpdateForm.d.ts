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
export declare type AuthenticationsUpdateFormInputValues = {
    Square?: boolean;
    Stripe?: boolean;
};
export declare type AuthenticationsUpdateFormValidationValues = {
    Square?: ValidationFunction<boolean>;
    Stripe?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthenticationsUpdateFormOverridesProps = {
    AuthenticationsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Square?: PrimitiveOverrideProps<SwitchFieldProps>;
    Stripe?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AuthenticationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AuthenticationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    authentications?: any;
    onSubmit?: (fields: AuthenticationsUpdateFormInputValues) => AuthenticationsUpdateFormInputValues;
    onSuccess?: (fields: AuthenticationsUpdateFormInputValues) => void;
    onError?: (fields: AuthenticationsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthenticationsUpdateFormInputValues) => AuthenticationsUpdateFormInputValues;
    onValidate?: AuthenticationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AuthenticationsUpdateForm(props: AuthenticationsUpdateFormProps): React.ReactElement;
