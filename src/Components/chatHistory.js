// import React from 'react'
// import socketIo from 'socket.io-client';
// import { useEffect, useState } from 'react'
// import { connectSocket } from "../Socket/socket";
// import { emitEvent } from '../Socket/socket';
// import chat from './chat';




// const ENDPOINT = "http://kube.artoon.in:32234/";

// function Chathistory() {
//     let token;
//     const [socketConnect, setSocketConnect] = useState(false);
//     const [index, setIndex] = useState([]);


//     useEffect(() => {
//         connectSocket((val) => {
//             console.log(val);
//             setSocketConnect(val);
//         })
//     }, [])


//     let socket;
//     const [message, setmessage] = useState([]);

//     socket = socketIo(ENDPOINT, { transports: ['websocket'] });
//     token = JSON.parse(localStorage.getItem("token"));
//     console.log(token);
//     socket.on('connect', () => {
//         console.log("=============connect=============", socket);
//         // cb(true)
//         socket.on("resJSON", onChange);
//         emitEvent('sendMessage', token);
//         console.log("resJSON");
//         // console.log('jjhjhe')
//     });

//     const handleClick = (chat) => {
//         console.log(chat);
//         socket.emit("req", {
//             en: "sendMessage",
//             data: {
//                 messageText: message.value,
//                 recId: "61275bcd8c251a737480407f"
//             },
//             token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNmMWZlYTBlNmE1MzNiZWU5MGM5Y2UiLCJpYXQiOjE2MzE2ODY5OTl9.qAGSE_DCrT7uDk7JbXZZsMh22IoCr7omZ2xfLq9-GyI"
//         });
//     };

//     const handleChange = (e) => {
//         setmessage({ value: e.target.value });
//         console.log(e);
    // }

//     const onChange = (data) => {
//         console.log(data);
//         setIndex = (data.data);
//         console.log(index);
//     };


//     useEffect(() => {
//         if (socketConnect) {
//             token = JSON.parse(localStorage.getItem('token'))
//             emitEvent('getFriends', token)
//             emitEvent('chatHistory', token)
//             console.log(token);
//         }
//     }, [socketConnect])

//     let arrData = JSON.parse(localStorage.getItem('getFriends'));
//     console.log(arrData);


//     return (
//         <div>
//             <div>
//                 <div className="mesgs">
//                     {index && index.map((item, i) => {
//                         return (

//                             <div className="msg_history">
//                                 <div className="incoming_msg">

//                                     <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
//                                     <div className="received_msg">
//                                         <div className="received_withd_msg">
//                                             <p>Test which is a new approach to have all
//                                                 solutions</p>
//                                             <span className="time_date"> 11:01 AM    |    June 9</span></div>
//                                     </div>
//                                 </div>
//                                 <div className="outgoing_msg">
//                                     <div className="sent_msg">
//                                         <p>Test which is a new approach to have all
//                                             solutions</p>
//                                         <span className="time_date"> 11:01 AM    |    June 9</span> </div>
//                                 </div>
//                                 <div className="incoming_msg">
//                                     <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
//                                     <div className="received_msg">
//                                         <div className="received_withd_msg">
//                                             <p>Test, which is a new approach to have</p>
//                                             <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
//                                     </div>
//                                 </div>
//                                 <div className="outgoing_msg">
//                                     <div className="sent_msg">
//                                         <p>Apollo University, Delhi, India Test</p>
//                                         <span className="time_date"> 11:01 AM    |    Today</span> </div>
//                                 </div>
//                                 <div className="incoming_msg">
//                                     <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
//                                     <div className="received_msg">
//                                         <div className="received_withd_msg">
//                                             <p>We work directly with our designers and suppliers,
//                                                 and sell direct to you, which means quality, exclusive
//                                                 products, at a price anyone can afford.</p>
//                                             <span className="time_date"> 11:01 AM    |    Today</span></div>
//                                     </div>
//                                 </div>

//                                 <div className="incoming_msg">
//                                     <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
//                                     <div className="received_msg">
//                                         <div className="received_withd_msg">
//                                             <p>Test which is a new approach to have all
//                                                 solutions</p>
//                                             <span className="time_date"> 11:01 AM    |    June 9</span></div>
//                                     </div>
//                                 </div>
//                                 <div className="outgoing_msg">
//                                     <div className="sent_msg">
//                                         <p>Test which is a new approach to have all
//                                             solutions</p>
//                                         <span className="time_date"> 11:01 AM    |    June 9</span> </div>
//                                 </div>
//                                 <div className="incoming_msg">
//                                     <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
//                                     <div className="received_msg">
//                                         <div className="received_withd_msg">
//                                             <p>Test, which is a new approach to have</p>
//                                             <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
//                                     </div>
//                                 </div>
//                                 <div className="outgoing_msg">
//                                     <div className="sent_msg">
//                                         <p>Apollo University, Delhi, India Test</p>
//                                         <span className="time_date"> 11:01 AM    |    Today</span> </div>
//                                 </div>
//                                 <div className="incoming_msg">
//                                     <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
//                                     <div className="received_msg">
//                                         <div className="received_withd_msg">
//                                             <p>We work directly with our designers and suppliers,
//                                                 and sell direct to you, which means quality, exclusive
//                                                 products, at a price anyone can afford.</p>
//                                             <span className="time_date"> 11:01 AM    |    Today</span></div>
//                                     </div>
//                                 </div>
//                             </div>

//                         )
//                     })}

//                     <div className="type_msg">
//                         <div className="input_msg_write">
//                             <input type="text" className="write_msg" placeholder="Type a message" value={message.values} onChange={handleChange} />
//                             <button onClick={() => handleClick()} className="msg_send_btn" type="button"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
//                         </div>
//                     </div>
          
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Chathistory










//  {/* <div className="incoming_msg">

//                             <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
//                             <div className="received_msg">
//                                 <div className="received_withd_msg">
//                                     <p>Test which is a new approach to have all
//                                         solutions</p>
//                                     <span className="time_date"> 11:01 AM    |    June 9</span></div>
//                             </div>
//                         </div>
//                         <div className="outgoing_msg">
//                             <div className="sent_msg">
//                                 <p>Test which is a new approach to have all
//                                     solutions</p>
//                                 <span className="time_date"> 11:01 AM    |    June 9</span> </div>
//                         </div>
//                         <div className="incoming_msg">
//                             <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
//                             <div className="received_msg">
//                                 <div className="received_withd_msg">
//                                     <p>Test, which is a new approach to have</p>
//                                     <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
//                             </div>
//                         </div>
//                         <div className="outgoing_msg">
//                             <div className="sent_msg">
//                                 <p>Apollo University, Delhi, India Test</p>
//                                 <span className="time_date"> 11:01 AM    |    Today</span> </div>
//                         </div>
//                         <div className="incoming_msg">
//                             <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
//                             <div className="received_msg">
//                                 <div className="received_withd_msg">
//                                     <p>We work directly with our designers and suppliers,
//                                         and sell direct to you, which means quality, exclusive
//                                         products, at a price anyone can afford.</p>
//                                     <span className="time_date"> 11:01 AM    |    Today</span></div>
//                             </div>
//                         </div>



//                         <div className="incoming_msg">
//                             <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
//                             <div className="received_msg">
//                                 <div className="received_withd_msg">
//                                     <p>Test which is a new approach to have all
//                                         solutions</p>
//                                     <span className="time_date"> 11:01 AM    |    June 9</span></div>
//                             </div>
//                         </div>
//                         <div className="outgoing_msg">
//                             <div className="sent_msg">
//                                 <p>Test which is a new approach to have all
//                                     solutions</p>
//                                 <span className="time_date"> 11:01 AM    |    June 9</span> </div>
//                         </div>
//                         <div className="incoming_msg">
//                             <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
//                             <div className="received_msg">
//                                 <div className="received_withd_msg">
//                                     <p>Test, which is a new approach to have</p>
//                                     <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
//                             </div>
//                         </div>
//                         <div className="outgoing_msg">
//                             <div className="sent_msg">
//                                 <p>Apollo University, Delhi, India Test</p>
//                                 <span className="time_date"> 11:01 AM    |    Today</span> </div>
//                         </div>
//                         <div className="incoming_msg">
//                             <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
//                             <div className="received_msg">
//                                 <div className="received_withd_msg">
//                                     <p>We work directly with our designers and suppliers,
//                                         and sell direct to you, which means quality, exclusive
//                                         products, at a price anyone can afford.</p>
//                                     <span className="time_date"> 11:01 AM    |    Today</span></div>
//                             </div>



//                         </div>
//                     </div> */}