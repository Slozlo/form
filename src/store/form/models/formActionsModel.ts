import { ActionModel } from "../../models";

interface FormPayloadModel {
  firstName: string;
  lastName: string;
  middleName: string;
}

export interface FormActionsModel extends ActionModel<FormPayloadModel> {}
