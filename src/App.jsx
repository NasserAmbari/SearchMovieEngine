//Import Dependencies/Libraries
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation 
} from "react-router-dom";
import { AnimatePresence} from "framer-motion"

// Import Component
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Search from "./component/Search";
import NotFound from "./component/PageNotFound";
import Footer from "./component/Footer";
import Cursor from "./component/Cursor";


class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <Router>
                    <Cursor />

                    <Navbar />

                    <AnimatePresence exitBeforeEnter>
                        <Switch>
                            <Route exact path="/" component={Hero} />
                            <Route exact path="/search"  component={Search} />
                            <Route component={NotFound} />
                        </Switch>
                    </AnimatePresence>

                    <Footer />

                    
                </Router>
            </React.Fragment>
        )
    }
}

export default App;