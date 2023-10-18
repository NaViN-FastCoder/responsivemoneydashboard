import React from 'react'
import './Rightside.css'
import {ScrollText,Apple} from 'lucide-react';
  import { Blocks, CircleDollarSign,ChevronUp,ChevronDown } from 'lucide-react';
import BarChart from './BarChart';
import PieChart from './PieChart'

function RightSide() {
  return (
    
    <div className='right'>
    <div className='header'>
      <h1>   Hello User</h1>
    <input type='text' placeholder='search'className='searchitem'/>
    </div>
    
    <div className='cards'>
   

    <div className='card1'>
      <div className='circle'>
        <div className='dollar'>
        
        <CircleDollarSign style={{width:'70px',height:'80px' ,top:'0',left:'0'}}/>
        </div>
      </div>
      <div className='text'>
      <h1>Earning</h1>
      <h2>$198</h2>
      <h3 style={{display:'flex',flexDirection:'row'}}><ChevronUp size={32}color='green'/>37.8%</h3>
      <h4>this month</h4>
      </div>

    </div>

    <div className='card1'>
      <div className='circle2'>
        <div className='dollar'>
        <ScrollText style={{width:'80px',height:'80px' }} /></div>
      </div>
      <div className='text'>
      <h1>Orders</h1>
      <h2>$230</h2>
      <h3 style={{display:'flex',flexDirection:'row'}}><ChevronDown size={32}color='red'/>7.8%</h3>
      <h4>this month</h4>
      </div>

    </div>

    <div className='card1'>
      <div className='circle3'>
        <div className='dollar'>
        <Blocks  style={{width:'80px',height:'80px' }}/></div>
      </div>
      <div className='text'>
      <h1>Total Sales</h1>
      <h2>$223</h2>
      <h3 style={{display:'flex',flexDirection:'row'}}><ChevronDown size={32}color='red'/>3.8%</h3>
      <h4>this month</h4>
      </div>

    </div>

    <div className='card1'>
      <div className='circle4'>
        <div className='dollar'>

        <Apple  style={{width:'70px',height:'80px' }} /></div>
      </div>
      
      <div className='text'>
      <h1>Total Earning</h1>
      <h2>$2.8</h2>
      <h3 style={{display:'flex',flexDirection:'row'}}><ChevronUp size={32}color='green'/>2%</h3>
      <h4>this month</h4>
      </div>

    </div>

    <div className='chart'>
      <h1>OverView</h1>
      <BarChart />

    </div>

    <div className='card2'>
      <PieChart/>
    </div>

    </div>
    </div>
    

  )
}

export default RightSide