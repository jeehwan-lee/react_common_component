import { css } from "@emotion/react";

export const typographyMap = {
  t1: css`
    font-sie: 30px;
    line-height: 1.35;
  `,
  t2: css`
    font-sie: 36px;
    line-height: 1.34;
  `,
  t3: css`
    font-sie: 22px;
    line-height: 1.4;
  `,
  t4: css`
    font-sie: 20px;
    line-height: 1.45;
  `,
  t5: css`
    font-sie: 17px;
    line-height: 1.6;
  `,
  t6: css`
    font-sie: 15px;
    line-height: 1.5;
  `,
  t7: css`
    font-sie: 13px;
    line-height: 1.5;
  `,
};

export type Typography = keyof typeof typographyMap;
