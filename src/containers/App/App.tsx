import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { fetchValues } from "@store/form/formActions";
import FormContainer from "@containers/FormContainer";
import LoaderComponent from "@components/LoaderComponent";

const AppContainer = ({ dispatch, values, isLoading }: any) => {
  useEffect(() => {
    dispatch(fetchValues());
  }, []);
  return isLoading ? (
    <LoaderComponent />
  ) : (
    <div>
      <FormContainer
        firstName={values.firstName}
        middleName={values.middleName}
        lastName={values.lastName}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  isLoading: state.form.loading,
  values: state.form.data
});

export default connect(mapStateToProps)(memo(AppContainer));
