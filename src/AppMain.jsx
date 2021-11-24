import LeftSideBar from "./Components/LeftSidebar";
import Dashboard from "./Components/Pages/Dashboard";
import RightSidebar from "./Components/RightSidebar";
import TopBar from "./Components/TopBar";
import { BrowserRouter as Router, Route, Switch,useParams } from 'react-router-dom'

import Contact from "./Components/Pages/Contact";
import CompanyList from "./Components/Pages/CompanyList";
import CompanyDetails from "./Components/Pages/CompanyDetails";
function AppMain() {
    return (
        <Router>
            <>
                {/* Begin page */}
                <div id="wrapper">
                    <TopBar></TopBar>
                    <LeftSideBar></LeftSideBar>
                    


                    <Switch>
                        <Route exact path="/">
                            <Dashboard></Dashboard>
                        </Route>
                        <Route exact path="/company-list">
                            <CompanyList></CompanyList>
                        </Route>

                        <Route exact path="/company/:id">
                            <CompanyDetails></CompanyDetails>
                        </Route>

                        <Route exact path="/contact">
                            <Contact></Contact>
                        </Route>
                    </Switch>



                </div>

                <RightSidebar></RightSidebar>
                <div className="rightbar-overlay"></div>
                {/* END wrapper */}
            </>
        </Router>
    );
}
export default AppMain;