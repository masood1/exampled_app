
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