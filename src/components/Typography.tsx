import { TypographyProps } from "../utils/types";

const Typography = ({ variant, children, }: TypographyProps) => {
    return <>
        {variant === 'h1' && <h1>{children}</h1>}
        {variant === 'h2' && <h2>{children}</h2>}
        {variant === 'h3' && <h3>{children}</h3>}
        {variant === 'h4' && <h4>{children}</h4>}
        {variant === 'h5' && <h5>{children}</h5>}
        {variant === 'h6' && <h6>{children}</h6>}
        {variant === 'p' && <p>{children}</p>}
    </>
}

export default Typography;