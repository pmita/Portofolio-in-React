import React from 'react'
import { FaLightbulb, FaMugHot, FaUserFriends, FaCodeBranch } from 'react-icons/fa'

export default function About({}) {
    const setHTMLContent = {
        p1: "Coming from an engineering background and after getting within the manufacturing and project management sector, upon graduating. It wasn\'t long till I realised that the this career path didn\'t suit me. But the thing I was certain about was that solving problems was something I loved doing.",
        p2: "I switched roles at the earliest oppurtinity I got and now work as a DevOps engineer working with technologies and stacks within the automation sector. However my passion is getting invloded with front end development, explicitly.",
        p3: "I also love design and UI/UX design is branch that rather isnpired me. Trying to find new and creative ideas to visually stimulate the user experience with code at the forefront of those intereaction."
    };
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 text-center">

                    <h2>About me</h2>

                    <p>{setHTMLContent.p1}</p>
                    <p>{setHTMLContent.p2}</p>
                    <p>{setHTMLContent.p3}</p>

                    </div>
                    
                </div>

                <div className="row text-center selector" style={{display:"flex", justifyContent:"space-between", margin:"0 5%"}}>
                    <span className="highlightedReactIcons"><FaLightbulb /></span>
                    <span className="highlightedReactIcons"><FaMugHot /></span>
                    <span className="highlightedReactIcons"><FaUserFriends /></span>
                    <span className="highlightedReactIcons"><FaCodeBranch /></span>
                </div>

            </div>

        </>
    );
}
