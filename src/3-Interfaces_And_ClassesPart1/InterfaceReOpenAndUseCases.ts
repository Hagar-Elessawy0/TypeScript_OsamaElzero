/*
    * ReOpen The Interface : It Re-Open The Interface And Add New Properties or Methods
*/

// Homepage
interface Settings {
    readonly theme: boolean;
    font: string;
}

// Articles Page
interface Settings {
    sidebar: boolean;
}

// Contact Page
interface Settings {
    external: boolean;
}

let userSettings: Settings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
}

// ! Types different from Interfaces in Re-Open , Types don't Re-Open