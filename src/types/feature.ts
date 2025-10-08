import exp from "constants";

export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
  btnLink?: string;
  wrapperClass?: string;
  cardClass?: string;
};

export type Button = {
  btn: string;
}
