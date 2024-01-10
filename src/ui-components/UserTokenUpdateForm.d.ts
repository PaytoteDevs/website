/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UserTokenUpdateFormInputValues = {
    userID?: string;
    access_token?: string;
    refresh_token?: string;
};
export declare type UserTokenUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    access_token?: ValidationFunction<string>;
    refresh_token?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserTokenUpdateFormOverridesProps = {
    UserTokenUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    access_token?: PrimitiveOverrideProps<TextFieldProps>;
    refresh_token?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserTokenUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserTokenUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userToken?: any;
    onSubmit?: (fields: UserTokenUpdateFormInputValues) => UserTokenUpdateFormInputValues;
    onSuccess?: (fields: UserTokenUpdateFormInputValues) => void;
    onError?: (fields: UserTokenUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserTokenUpdateFormInputValues) => UserTokenUpdateFormInputValues;
    onValidate?: UserTokenUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserTokenUpdateForm(props: UserTokenUpdateFormProps): React.ReactElement;
