export interface themeProps {
    theme: string,
}

export interface DataProps {
    [key: string]: string | JSX.Element;
}

export interface Note {
    id: number;
    content: string;
}