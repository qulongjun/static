/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 10:54:45
 */
import React from "react";

interface ILinkConfig {
  label: React.ReactNode;
  link: string;
}

interface IThankConfig {
  label: React.ReactNode;
  link: string;
}

export interface IFooterResponse {
  links: ILinkConfig[];
  thanks: IThankConfig[];
}
