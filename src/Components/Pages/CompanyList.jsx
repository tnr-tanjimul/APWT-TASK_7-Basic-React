import Footer from "../Footer";
import Company from "./Company";
import React, {useState, useEffect} from "react";
import axios from "axios";
function CompanyList(){
    const [companys, setCompany] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/company/get-all/")
        .then(resp=>{
            console.log(resp.data);
            setCompany(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);
    return(
        <div className="content-page">
            <div className="content">


                <div className="container-fluid">

                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box">
                                <div className="page-title-right">
                                    <form className="form-inline">
                                        <div className="form-group">
                                            <div className="input-group input-group-sm">
                                                <input type="text" className="form-control border-0" id="dash-daterange" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text bg-blue border-blue text-white">
                                                        <i className="mdi mdi-calendar-range"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="javascript: void(0);" className="btn btn-blue btn-sm ml-2">
                                            <i className="mdi mdi-autorenew"></i>
                                        </a>
                                        <a href="javascript: void(0);" className="btn btn-blue btn-sm ml-1">
                                            <i className="mdi mdi-filter-variant"></i>
                                        </a>
                                    </form>
                                </div>
                                <h4 className="page-title">Company List</h4>
                            </div>
                        </div>
                    </div>
                    {/* end page title */}

                    <div className="row">
                        
                    <div className="table-responsive">
                                            <table className="table table-striped mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>LicenseNo</th>
                                                        <th>Address</th>
                                                        <th>Phone</th>
                                                        <th>Email</th>
                                                        <th>

                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                {
                companys.map(company=>(
                    
                    <Company Key={company.id} Id={company.id} Name={company.name} LicenseNo={company.licenseNo} Address={company.address} Phone={company.phone} Email={company.email}></Company>
                ))
            }
                                                   
                                                   
                                                </tbody>
                                            </table>
                                        </div>
                    </div>
                    {/* end row*/}
                </div>
            </div>
            {/* content */}
            {/* Footer Start */}
            <Footer></Footer>
            {/* end Footer */}


        </div>
    );
}

export default CompanyList;