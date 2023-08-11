import { ParentComponentProps } from '../utils/types'
import '../assets/sass/components/card.sass'

const card = ({ variant, children, }: ParentComponentProps) => {
    return (
        <>
            {
                variant === 'default' &&
                <div className="card">
                    {children}
                </div>
            }
            {
                variant === 'shadow' &&
                <div className="card shadow">
                    {children}
                </div>
            }
        </>
    )
}

export default card