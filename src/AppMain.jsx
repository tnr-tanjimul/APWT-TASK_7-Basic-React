import LeftSideBar from "./Components/LeftSidebar";
import Dashboard from "./Components/Pages/Dashboard";
import RightSidebar from "./Components/RightSidebar";
import TopBar from "./Components/TopBar";
import { BrowserRouter as Router, Route, Switch,useParams } from 'react-router-dom'

import Contact from "./Components/Pages/Contact";
import CompanyList from "./Components/Pages/CompanyList";
import CompanyDetails from "./Components/Pages/CompanyDetails";
import HostspotLog from "./Components/Pages/HotspotLog";
import AuthLogin from "./Components/Auth/AuthLogin";
import AuthRegistration from "./Components/Auth/AuthRegistration";
function AppMain() {
    return (
        <Router>
            <>
                {/* Begin page */}
                
                    


                    <Switch>
                        <Route exact path="/">
                                <Dashboard></Dashboard>
                        </Route>
                        <Route exact path="/company-list">
                            <div id="wrapper">
                                <TopBar></TopBar>
                                <LeftSideBar></LeftSideBar>
                                <CompanyList></CompanyList>
                            </div>
                            <RightSidebar></RightSidebar>
                            <div className="rightbar-overlay"></div>
                            
                        </Route>

                        <Route exact path="/hotspot/log">
                            <div id="wrapper">
                                <TopBar></TopBar>
                                <LeftSideBar></LeftSideBar>
                                <HostspotLog></HostspotLog>
                            </div>
                            <RightSidebar></RightSidebar>
                            <div className="rightbar-overlay"></div>
                            
                        </Route>

                        <Route exact path="/company/:id">
                            <div id="wrapper">
                                <TopBar></TopBar>
                                <LeftSideBar></LeftSideBar>
                                <CompanyDetails></CompanyDetails>
                            </div>
                            <RightSidebar></RightSidebar>
                            <div className="rightbar-overlay"></div>
                            
                        </Route>

                      

                        <Route exact path="/contact">
                            <div id="wrapper">
                                <TopBar></TopBar>
                                <LeftSideBar></LeftSideBar>
                                <Contact></Contact>
                            </div>
                            <RightSidebar></RightSidebar>
                            <div className="rightbar-overlay"></div>
                            
                        </Route>

                        <Route exact path="/login">
                            <AuthLogin></AuthLogin>
                        </Route>


                        <Route exact path="/register">
                            <AuthRegistration></AuthRegistration>
                        </Route>


                    </Switch>



                
                {/* END wrapper */}
            </>
        </Router>
    );
}
export default AppMain;