import React from 'react'

const JobResignation = ({name,companyName,effectiveDate,lastDate}) => {
  return (
    <div>
        <p>Date: {effectiveDate}</p>
    
    <p>Hi,</p>
    
    <p>I, {name}, writing to formally tender my resignation from {companyName}. This letter serves as notice of my intent to resign, and my last working day will be {lastDate} which is effective immediately.</p>
    
    <p>I am committed to ensuring a smooth transition during my notice period. I will be available to assist in the handover process and to provide any necessary information or training to my replacement.</p>
    
    <p>Thank you for the opportunities for growth and development during my tenure at {companyName}. I am appreciative of the support provided by the team and leadership.</p>
    
    <p>Please consider this letter as formal notification of my resignation in accordance with the terms of my employment contract.</p>
    
    <p>Sincerely,<br></br>
    {name}</p>
    </div>
  )
}

export default JobResignation;