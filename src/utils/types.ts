export type TypographyProps = React.HTMLAttributes<HTMLElement> & {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    children: React.ReactNode;
}

export type ParentComponentProps = {
    variant?: 'default' | 'shadow';
    children: React.ReactNode;
}