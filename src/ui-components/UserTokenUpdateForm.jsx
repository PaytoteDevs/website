/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUserToken } from "../graphql/queries";
import { updateUserToken } from "../graphql/mutations";
const client = generateClient();
export default function UserTokenUpdateForm(props) {
  const {
    id: idProp,
    userToken: userTokenModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userID: "",
    access_token: "",
    refresh_token: "",
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [access_token, setAccess_token] = React.useState(
    initialValues.access_token
  );
  const [refresh_token, setRefresh_token] = React.useState(
    initialValues.refresh_token
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userTokenRecord
      ? { ...initialValues, ...userTokenRecord }
      : initialValues;
    setUserID(cleanValues.userID);
    setAccess_token(cleanValues.access_token);
    setRefresh_token(cleanValues.refresh_token);
    setErrors({});
  };
  const [userTokenRecord, setUserTokenRecord] =
    React.useState(userTokenModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserToken.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserToken
        : userTokenModelProp;
      setUserTokenRecord(record);
    };
    queryData();
  }, [idProp, userTokenModelProp]);
  React.useEffect(resetStateValues, [userTokenRecord]);
  const validations = {
    userID: [],
    access_token: [],
    refresh_token: [],
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
          userID: userID ?? null,
          access_token: access_token ?? null,
          refresh_token: refresh_token ?? null,
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
            query: updateUserToken.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userTokenRecord.id,
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
      {...getOverrideProps(overrides, "UserTokenUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID: value,
              access_token,
              refresh_token,
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
      <TextField
        label="Access token"
        isRequired={false}
        isReadOnly={false}
        value={access_token}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              access_token: value,
              refresh_token,
            };
            const result = onChange(modelFields);
            value = result?.access_token ?? value;
          }
          if (errors.access_token?.hasError) {
            runValidationTasks("access_token", value);
          }
          setAccess_token(value);
        }}
        onBlur={() => runValidationTasks("access_token", access_token)}
        errorMessage={errors.access_token?.errorMessage}
        hasError={errors.access_token?.hasError}
        {...getOverrideProps(overrides, "access_token")}
      ></TextField>
      <TextField
        label="Refresh token"
        isRequired={false}
        isReadOnly={false}
        value={refresh_token}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              access_token,
              refresh_token: value,
            };
            const result = onChange(modelFields);
            value = result?.refresh_token ?? value;
          }
          if (errors.refresh_token?.hasError) {
            runValidationTasks("refresh_token", value);
          }
          setRefresh_token(value);
        }}
        onBlur={() => runValidationTasks("refresh_token", refresh_token)}
        errorMessage={errors.refresh_token?.errorMessage}
        hasError={errors.refresh_token?.hasError}
        {...getOverrideProps(overrides, "refresh_token")}
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
          isDisabled={!(idProp || userTokenModelProp)}
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
              !(idProp || userTokenModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
