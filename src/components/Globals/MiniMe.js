import React from 'react'
import Img from "gatsby-image"

export default function MiniMe({image_toDisplay}) {
    return (
        <>

        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 example">
                    <Img fixed={image_toDisplay} 
                         className="targetImage"
                    />
                </div>
            </div>
        </div>

        </>
    );
}
