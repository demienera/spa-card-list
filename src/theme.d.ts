import { AliasToken } from "antd/es/theme/interface";

declare module "antd/es/theme/interface" {
  export interface AliasToken {
    fontFamilyBase?: string;
    fontFamilySecondary?: string;
  }
}
