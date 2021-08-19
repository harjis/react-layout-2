import { ReactNode } from "react";

import s from "./Split.module.css";

type Props = {
  left: ReactNode;
  right: ReactNode;
};
export const Split = (props: Props) => {
  return (
    <div className={s.container}>
      <div className={s.leftContainer}>{props.left}</div>
      <div className={s.rightContainer}>{props.right}</div>
    </div>
  );
};
