import React,{useState} from 'react'
import './hero.css';
import sample from './rain.mp4';

// function loadScript(src){
//     return new Promise((resolve)=>{
//         const script = document.createElement('script');
//         script.src = src
//         script.onload = ()=>{
//             resolve(true)
//         }
//         script.onerror = () =>{
//             resolve(false)
//         }
//         document.body.appendChild(script)
//     })
// }
// if(document.domain === 'localhost'){
//     //dev
    
// }else{
//     //development

// }

// const __DEV__ = document.domain === 'localhost'
function Hero() {
    
    // const [name, setName] = useState('Vivek')
    //  async function displayRazorpay  (){
        
    //     const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    //     if(!res){
    //         alert('Razorpay SDK failed to load.Are you online?')
    //         return
    //     }

    //     const data =  await fetch('http://localhost:1337/razorpay',{method:'POST'}).then((t)=>
    //     t.json()
    //     )
    //     console.log(data);

    //     const options = {
    //         key: __DEV__ ? 'rzp_test_Qt6cxY8fJ0IWrv':'API_NOT_AVAILABLE', 
    //         amount: data.amount.toString(), 
    //         currency:data.currency,
    //         order_id:data.id,
    //         name: "Donation",
    //         description: "Thank you for nothing,Please give us some money",
    //         image: "http://localhost:1337",
    //          //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            
    //         "prefill": {
    //             name,
    //             email: "imvsingh64@gmail.com",
    //             contact: "9999999999"
    //         },
    //         "notes": {
    //             "address": "Razorpay Corporate Office"
    //         },
    //         "theme": {
    //             "color": "#3399cc"
    //         }
    //     };
        
    //     let rzp1 = new window.Razorpay(options);
    //     rzp1.open()
    // }
    return (
       
        <div className="container" id="hero">
           

        
         
            <div class="content">
           
          
            <div className="item1">
              <h1>"We Make A Living By </h1>
              <h1>What we get</h1>
              <h1>What we make a life by </h1>
              <h1>what we give"</h1>
               {/*<button class="button button2" onClick={displayRazorpay}>Donate Now</button>*/}
               <button class="button button2"><a id="button" href="https://rzp.io/l/1Uwq8ZuP7">Donate</a></button>
            </div>
            <div className="item2"> 
            <video className='videoTag' autoPlay loop muted>
         <source src={sample} type='video/mp4' />
         </video>  
            </div>
           
            </div>

        </div>
      
    )
}

export default Hero
