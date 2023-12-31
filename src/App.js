import './App.css'
import './assets/js/main';

import { Header, Footer, Container } from './Components/index'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {

    return (
        <>
            <Router basename={'/Template-Three-with-React'}>
                <Header />
                <Container />
                <Footer />
            </Router>
        </>

    )
}
export default App 