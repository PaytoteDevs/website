/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getAuthentications } from "../graphql/queries";
import { updateAuthentications } from "../graphql/mutations";
const client = generateClient();
export default function AuthenticationsUpdateForm(props) {
  const {
    id: idProp,
    authentications: authenticationsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Square: false,
    Stripe: false,
    userID: "",
  };
  const [Square, setSquare] = React.useState(initialValues.Square);
  const [Stripe, setStripe] = React.useState(initialValues.Stripe);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = authenticationsRecord
      ? { ...initialValues, ...authenticationsRecord }
      : initialValues;
    setSquare(cleanValues.Square);
    setStripe(cleanValues.Stripe);
    setUserID(cleanValues.userID);
    setErrors({});
  };
  const [authenticationsRecord, setAuthenticationsRecord] = React.useState(
    authenticationsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAuthentications.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAuthentications
        : authenticationsModelProp;
      setAuthenticationsRecord(record);
    };
    queryData();
  }, [idProp, authenticationsModelProp]);
  React.useEffect(resetStateValues, [authenticationsRecord]);
  const validations = {
    Square: [],
    Stripe: [],
    userID: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Square: Square ?? null,
          Stripe: Stripe ?? null,
          userID: userID ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateAuthentications.replaceAll("__typename", ""),
            variables: {
              input: {
                id: authenticationsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AuthenticationsUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Square"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Square}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Square: value,
              Stripe,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.Square ?? value;
          }
          if (errors.Square?.hasError) {
            runValidationTasks("Square", value);
          }
          setSquare(value);
        }}
        onBlur={() => runValidationTasks("Square", Square)}
        errorMessage={errors.Square?.errorMessage}
        hasError={errors.Square?.hasError}
        {...getOverrideProps(overrides, "Square")}
      ></SwitchField>
      <SwitchField
        label="Stripe"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Stripe}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Square,
              Stripe: value,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.Stripe ?? value;
          }
          if (errors.Stripe?.hasError) {
            runValidationTasks("Stripe", value);
          }
          setStripe(value);
        }}
        onBlur={() => runValidationTasks("Stripe", Stripe)}
        errorMessage={errors.Stripe?.errorMessage}
        hasError={errors.Stripe?.hasError}
        {...getOverrideProps(overrides, "Stripe")}
      ></SwitchField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Square,
              Stripe,
              userID: value,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || authenticationsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || authenticationsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
