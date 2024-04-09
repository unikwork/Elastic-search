/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import { createRoot } from 'react-dom/client';

import Menu from './components/menu';
import Home from './components/home';


/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            filterdProduct: [],
            isLoading: false
        };
    }

    setFilterdProduct = (val) => {
        this.setState({ filterdProduct: val })
    }

    setLoading = (val) => {
        this.setState({ isLoading: val })
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <div className="App">
                <Menu handleSetProduct={this.setFilterdProduct} handleSetLoading={this.setLoading}/>
                <Home filterdProduct={this.state.filterdProduct} isLoading={this.state.isLoading} />
            </div>
        );
    }

}

// Render this out
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
