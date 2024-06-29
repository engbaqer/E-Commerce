import React from 'react'
import  './hero..css'
import Hand_icon from '../Assets/hand_icon.png'
import Hero_imge from '../Assets/hero_image.png'
import Arrow_Icon from '../Assets/arrow.png'
function hero() {
  return (
    <div className='hero'>
<div className='left_section' >
<p>NEEW ARRIVALS ONLY</p>
<div className='n_hand'>
    <h1>new</h1>
<img src={Hand_icon} alt="" />
</div>
<h1>collections for everyone</h1>
<div>
<div className='btm-coll'>Latest Collection </div>
<img src={Arrow_Icon} alt="" />
</div>
</div>

<div className="right_section"><img src={Hero_imge} alt="" /></div>

    </div>
  )
}

export default hero