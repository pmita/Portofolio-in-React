import React, { Component } from 'react'

export default class WorkExperience extends Component {
    openCity = (e, pastEmployerName) =>{
        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("tabcontent");
        for (i=0; i < tabcontent.length; i++){
          tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
           tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(pastEmployerName).style.display = "block";
        e.currentTarget.className += " active";
    };

    render() {
        return (
                            
                    <div className="container">
                        <h2 className="text-center" style={{margin:"15% 0 10% 0"}}>Work experience</h2>
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <div className="tab">
                                    <button className="tablinks active" 
                                            onClick={(e) => {this.openCity(e,'DXC')}}
                                            id="defaultOpen">DXC
                                    </button>
                                    <button className="tablinks"
                                            onClick={(e) => {this.openCity(e, 'Noriker')}} 
                                            >Noriker
                                    </button>
                                    <button className="tablinks"
                                            onClick={(e) => {this.openCity(e, 'Houmas')}} 
                                            >Houmas
                                    </button>
                                </div>
                            </div>

                            <div className="col-md-8 col-sm-12">
                            <div className="tabcontent active" id="DXC">
                                    <h3>DevOps Engineer</h3>
                                    <h4>Graduate on rotation - currently working as a JAMstack software developer</h4>
                                    <p><span className="colored-arrow">></span>Developed a Data fetching application in Golang, that interacted with 3 different open source APIs. Application was able to filter 10,000+ lines of Json code/call, utilizing inbuilt Go-routines.</p>
                                    <p><span className="colored-arrow">></span>Developed an automated content hosting platform for internal company use; Platform utilized Gatsby/React.js technology in combination with Contentful as a headless CMS for content deliver/hierarchy.</p>
                                    <p><span className="colored-arrow">></span>Designed AWS micro-services architecture for static site hosting with S3 buckets and VPC; Total hosting service costed 0.35 £/month.</p>
                                </div>

                                <div className="tabcontent" id="Noriker">
                                    <h3>Assistant Project Manager</h3>
                                    <h4>Engineering manager for hybrid battery storage projects across the UK</h4>
                                    <p><span className="colored-arrow">></span> Co-Managed 5mW battery storage project civil works with an average budget of £2 million. Communicated with Principal Designer and Principal Contractor to deliver projects on-time and under-budget.</p>
                                    <p><span className="colored-arrow">></span>Project managed external parties and EPC designers during the construction phase. Coordinated with clients to oversee the installation, operation, and maintenance of equipment for all local plants. </p>
                                    <p><span className="colored-arrow">></span>Manually exported 70 mW worth of storage capacity during two Triad events which contributed in £300,000+ additional revenue stream.</p>
                                </div>

                                <div className="tabcontent" id="Houmas">
                                    <h3>Mechanical Design Engineer - Summer position</h3>
                                    <h4>Intern mechanical engineer for automated distributed center project</h4>
                                    <p><span className="colored-arrow">></span>Planned workforce use, space requirements, and equipment layouts to decrease human labour work, which increased battery feeding rates by 2/3 while work labour decreased from 4 to 1 person. </p>
                                    <p><span className="colored-arrow">></span>Calculated Direct/ Indirect Costs, Gross Profit Margin and Internal Rate of Return which helped target over-budgeted product features needing improvement.</p>
                                    <p><span className="colored-arrow">></span>Co-Presented feasibility study to CEO, introducing finance and engineering performance KPIs to highlight project viability.</p>
                                </div>
                            </div>
                        </div>
                        </div>
        );
    };
}

