/**
 * Created by Lamdan on 12/27/2017.
 */
import React from 'react';
import './Resume.css'
const Resume =(props)=>{
    let resumes =[];
    if(props.location.state) {
      let  arrPersonal = props.location.state.personData;
         for(let i in arrPersonal ){
             resumes.push(<p key={i}>{i+" "+ arrPersonal[i]} </p>)
         }
    }else{
        resumes =<p>Error props empty</p>
    }

    return(
        <div className="UserData">
            {resumes}
        </div>
    );

};
export default Resume;