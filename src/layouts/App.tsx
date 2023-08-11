import Button from '../components/Button'
import reactLogo from '../assets/images/react.svg'
import viteLogo from '../assets/images/vite.svg'
import '../assets/sass/layouts/App.sass'
import Typography from '../components/Typography'
import Card from '../components/Card'

function App() {
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <Typography variant="h1">Vite + React</Typography>
            <Card variant="default">
                <Button />
                <Typography variant="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta labore voluptatibus accusamus officiis dolores nulla mollitia architecto nemo sapiente quos dolorum quas quod at, perferendis quidem voluptas laborum iure?
                </Typography>
            </Card>
            <Typography variant="p">
                Click on the Vite and React logos to learn more
            </Typography>
        </>
    )
}

export default App
