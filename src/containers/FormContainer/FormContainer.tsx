import React, { memo, useState, useCallback, useEffect } from "react";
import Modal from "@components/Modal";
import Field from "@components/Field";
import Button from "@components/Button";
import { FormContainerModel } from "./models";
import { sendValues } from "@store/form/formActions";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1199px) {
    flex-direction: column;
    align-items: ;
  }
`;

const FormContainer = (props: FormContainerModel) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const handleFirstNameChange = useCallback(
    e => {
      const value = e.currentTarget.value;
      setFirstName(value);
    },
    [firstName]
  );
  const handleLastNameChange = useCallback(
    e => {
      const value = e.currentTarget.value;
      setLastName(value);
    },
    [lastName]
  );
  const handleMiddleNameChange = useCallback(
    e => {
      const value = e.currentTarget.value;
      setMiddleName(value);
    },
    [middleName]
  );

  const clearValues = useCallback(() => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
  }, []);

  const resetValues = useCallback(() => {
    setFirstName(props.firstName);
    setMiddleName(props.middleName);
    setLastName(props.lastName);
  }, [props.firstName, props.lastName, props.middleName]);
  useEffect(() => {
    resetValues();
  }, []);

  const onSendValues = useCallback(() => {
    const { dispatch } = props;
    const values = {
      firstName,
      lastName,
      middleName
    };
    dispatch(sendValues(values));
  }, [firstName, lastName, middleName]);

  return (
    <Modal>
      <div>
        <Field
          label="First Name"
          value={firstName}
          name="firstName"
          onChange={handleFirstNameChange}
        />
        <Field
          label="Middle Name"
          value={middleName}
          name="middleName"
          onChange={handleMiddleNameChange}
        />
        <Field
          label="Last Name"
          value={lastName}
          name="lastName"
          onChange={handleLastNameChange}
        />
      </div>
      <StyledButtonsContainer>
        <Button onClick={clearValues}>очистить</Button>
        <Button onClick={resetValues}>отменить</Button>
        <Button onClick={onSendValues}>отправить</Button>
      </StyledButtonsContainer>
    </Modal>
  );
};

export default connect()(memo(FormContainer));
