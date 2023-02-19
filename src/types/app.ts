export type ServerError = {
  statusCode: number;
  message: Array<string>;
  error: string;
};

export type SelectItem = {
  label: string;
  value: string;
};

export type Entity = {
  id?: number;
  name: string;
  type: string;
};

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  LIGHT = "light",
}
