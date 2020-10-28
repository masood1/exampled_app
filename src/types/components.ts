import { ReactElement } from "react";
import { DrawerProps } from "@material-ui/core";
import { typographyTypes } from "./typography";

export interface CopyRightProps extends typographyTypes {
    fontSize?: string;
  }

  interface SidebarMenuPageProps {
    title: string;
    href: string;
    icon: ReactElement;
    mt?: number;
  }
  
  export interface SidebarMenuProps extends DrawerProps {
    pages: Array<SidebarMenuPageProps>;
    routerLink?: any;
  }

  export type NeutralPalette = {
    copygray: string;
    darkgray: string;
    blueishgray: string;
    greishgrey: string;
  };

  export type citizenDetails = {
    id:any,
    age:number, 
    city:string,
    name:string,
    someNote:string
  }