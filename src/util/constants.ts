
/* Layout Styles */
const style = {
    header: 88, //minHeight
    footer: 56, //minHeight
};
export const globalStyle: any = {
    ...style,
    defaultGutter: 88, //padding - left and right
    sidebarWidth: 360, //width,
    postLogin: {
        height: `calc(100vh - ${style.header + style.footer + 2}px)`, // added 2 because of  header & footer border
        top: style.header + 1, // added 1 because of  header border
    },
    logo: {
        height: 26,
        width: 60,
    },
}
export enum SIDEBAR_TITLES {
    "DASHBOARD" = "Dashboard",
    "CREATEUSER" = "Create New User"
}

export const CONTRACT_ADDRESS = "0xb5842e2384f5b6f1dbec5e130c75e82d3803c3d3";
export const CONTRACT_ADDRESS_PERSONAL = "0xb2899e846387255d9ce9571a165be59644498714";//"0xb2899e846387255d9ce9571a165be59644498714";

