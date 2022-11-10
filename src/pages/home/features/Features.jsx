import React from 'react';
import background from '../../../assets/pattern3.png'
import mainimg from '../../../assets/iphone.png'
import google from '../../../assets/google-play.jpg'
import app from '../../../assets/app-store.jpg'
const Features = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`,backgroundColor:'#F4F4F4', backgroundRepeat: 'no-repeat',backgroundSize: 'auto'}}>
         <div class="grid overflow-hidden grid-cols-2 grid-rows-1 gap-2 p-10">
         <div className="avatar">
  <div className="w-96 rounded">
    <img src={mainimg} />
  </div>
</div>
	<div class="box">
        <h2 className='text-3xl font-bold py-10 font-roboto'>THE BEST FITNESS THEME WITH ALL THE NECESSARY IN-BUILT FEATURES</h2>
        <p className='text-base pb-10'><b>Fitness Zone</b> is a Trendy Theme with the latest features and stays updated to the latest technological equipments.</p>
   <div className='flex gap-3'>
  <div className=" rounded">
    <img width={{width:'100px'}} src={app} />
  </div>
  <div className=" rounded">
    <img  src={google} />
  </div>
   </div>
   <p className='text-base py-10 text-slate-500'>Note: Occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
    </div>
</div>   
        </div>
    );
};

export default Features;