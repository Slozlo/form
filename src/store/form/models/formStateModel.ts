import { EntityStateModel } from "../../models";

export interface FormModel {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface FormStateModel extends EntityStateModel<FormModel> {}
