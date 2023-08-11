import { useState } from 'react'
import '../assets/sass/components/button.sass'

function Button() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button className='button' onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </>
    )
}

export default Button
