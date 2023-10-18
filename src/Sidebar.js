import React, { useState } from 'react'
import {ChevronLast,ChevronFirst} from 'lucide-react'
import './Sidebar.css'
import Logo from'./logo.png';
import {data} from './sidedata';

function Sidebar() {
    const [open,setOpen]=useState(false);
const changestate=()=>{
    setOpen(!open);
}
  return (
    <aside className='aside'>
      <div className='first'>
      {open?<img src={Logo} className='logo' alt='dashboard' style={{marginLeft:'50px'}}/>:''}    
      { open? <h1 style={{color:'black',fontSize:'22px' ,padding:'10px'}}>MoneyControl</h1> :''}
      <button  className={open?'btn-open' :'btn-close'} onClick={changestate}>
        
        {open ? <ChevronFirst/> : <ChevronLast/>}
        </button>
      </div>

    
    <div className='sidebar'>
       
      
      {data.map((item)=>(
        <ul className='openul'>
          {open &&
          <h1>
            {item.label}</h1>}
           <h1>
          <span className='image'>
            {<item.icon/>}</span></h1>
          
        </ul>       ))}
        

        
        

    </div>
    </aside>
  )
}

export default Sidebar