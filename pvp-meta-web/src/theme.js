import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
            grey: {
                50: "#f2f2f2",
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#121212",
              },
              
            primary: {
                100: "#121212",
                200: "#121212",
                300: "#121212",
                400: "#121212",
                500: "#121212",
                600: "#121212",
                700: "#121212",
                800: "#212121",
                900: "#212121",
            },
            secondary: {
                100: "#0E4C92",
                200: "#0E4C92",
                300: "#0E4C92",
                400: "#0E4C92",
                500: "#0E4C92",
                600: "#0E4C92",
                700: "#0E4C92",
                800: "#0E4C92",
                900: "#0E4C92",
            },
            orangeAccent: {
                100: "#ffe4d7",
                200: "#ffccb0",
                300: "#ffa889",
                400: "#ff8f63",
                500: "#f16723",
                600: "#ba4f1c",
                700: "#833816",
                800: "#4d200f",
                900: "#1a0903",
            },
            greenAccent: {
                100: "#dbf5ee",
                200: "#b7ebde",
                300: "#94e2cd",
                400: "#70d8bd",
                500: "#4cceac",
                600: "#3da58a",
                700: "#2e7c67",
                800: "#1e5245",
                900: "#0f2922",
            },
            redAccent: {
                100: "#f8dcdb",
                200: "#f1b9b7",
                300: "#e99592",
                400: "#e2726e",
                500: "#db4f4a",
                600: "#af3f3b",
                700: "#832f2c",
                800: "#58201e",
                900: "#2c100f",
            },
            blueAccent: {
                100: "#e6f5fd",
                200: "#c3e7fa",
                300: "#a0d9f6",
                400: "#7ccbf2",
                500: "#58bde9",
                600: "#4296b5",
                700: "#2d6f81",
                800: "#18494c",
                900: "#03231a",
            },
        }
        : {
            grey: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414",
            },
            primary: {
                100: "#b3c8db",
                200: "#80a3c1",
                300: "#4d7ea8",
                400: "#266794",
                500: "#1d3e5f",
                600: "#17324c",
                700: "#112436",
                800: "#0a121f",
                900: "#01050b",
            },
            secondary: {
                100: "#d2e2ee",
                200: "#a6c5dc",
                300: "#7aa9cb",
                400: "#4d8cb9",
                500: "#4d7ea8",
                600: "#3e637e",
                700: "#2f4d5d",
                800: "#202f3c",
                900: "#10151e",
            },
            orangeAccent: {
                100: "#F16723",
                200: "#F16723",
                300: "#F16723",
                400: "#F16723",
                500: "#F16723",
                600: "#F16723",
                700: "#F16723",
                800: "#F16723",
                900: "#F16723",
            },
            greenAccent: {
                100: "#0f2922",
                200: "#1e5245",
                300: "#2e7c67",
                400: "#3da58a",
                500: "#4cceac",
                600: "#70d8bd",
                700: "#94e2cd",
                800: "#b7ebde",
                900: "#dbf5ee",
            },
            redAccent: {
                100: "#2c100f",
                200: "#58201e",
                300: "#832f2c",
                400: "#af3f3b",
                500: "#db4f4a",
                600: "#e2726e",
                700: "#e99592",
                800: "#f1b9b7",
                900: "#f8dcdb",
            },
            blueAccent: {
                100: "#151632",
                200: "#2a2d64",
                300: "#3e4396",
                400: "#535ac8",
                500: "#6870fa",
                600: "#868dfb",
                700: "#a4a9fc",
                800: "#c3c6fd",
                900: "#e1e2fe",
            },
        }),
});

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        main: colors.primary[700],
                    },
                    secondary: {
                        main: colors.secondary[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.primary[800],
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.blueAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: "#fcfcfc",
                    },
                }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => { },
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};