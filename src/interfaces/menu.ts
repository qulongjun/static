/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/23 16:29:01
 */
import React from 'react';

export type MenuType = 'sub' | 'mega' | 'common';

interface IBaseMenuConfig {
  label: React.ReactNode;
  link: string;
  childList?: IBaseMenuConfig[];
}

export interface IMenuConfig extends IBaseMenuConfig {
  icon?: string;
  type: MenuType;
  childList: IBaseMenuConfig[]
}

export interface INavConfig extends IBaseMenuConfig {}

export interface IMenuResponse {
  menu: IMenuConfig[];
  nav: INavConfig[];
}
