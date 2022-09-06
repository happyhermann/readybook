import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    accentColor: string;
    bgColor: string;
    bgDark: string;
    darkColor: string;
    mobile: string;
    desktop: string;
    fullSize: string;
    desktopPadding: string;
  }
}
