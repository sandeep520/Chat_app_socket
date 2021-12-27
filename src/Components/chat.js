

import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchChat } from "../Redux/action";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { emitEvent, connectSocket } from "../Socket/socket";
import socketIo from "socket.io-client";
import '../Styles/chat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from "./Loader";
import NearMeSharpIcon from '@material-ui/icons/NearMeSharp';



function ChatScreen(props) {
    useEffect(() => {
        props.fetchChat();
    }, []);

    // let loading = true;

    // const classes = useStyles(true);

    let token;

    const [socketConnect, setSocketConnect] = useState(false);
    const [text, setText] = useState([]);
    const [first, setFirst] = useState([]);
    const [id, setId] = useState([]);
    const [name, setName] = useState([]);
    const [search, setSearch] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [arrData, setarrData] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [message, setMessage] = useState([]);



    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView()
        // { behavior: "smooth" }
    }

    useEffect(() => {
        scrollToBottom();
    }, [first])


    useEffect(() => {
        connectSocket((val) => {
            setSocketConnect(val);
        });
    }, []);

    const ENDPOINT = "http://kube.artoon.in:32234/";

    let socket;

    socket = socketIo(ENDPOINT, { transports: ["websocket"] });
    token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    socket.on("connect", () => {
        socket.on("resJSON", onHandle);
        emitEvent("sendMessage", token);
        console.log(token);
    });

    const changePerson = (item) => {
        socket.emit("req", {
            en: "chatHistory",
            data: {
                recId: item._id,
            },
            token: JSON.parse(localStorage.getItem("token")),
        });
        console.log(item);
        setId(item._id);
        setName(item.name);
        setLoading(false);
        setarrData(item);
        console.log(isLoading, "-----true---------")


        socket.on("connect", () => {
            socket.on("resJSON", (data) => {
                // setMessage(data);
                console.log(data);
            });
        });
    };

    useEffect(() => {
        if (socketConnect) {
            token = JSON.parse(localStorage.getItem("token"));
            emitEvent("getFriends", token);
            setLoading(false);
            // if (isLoading) {
            //     setTimeout(() => {
            //         setLoading(false);
            //     }, 2000);
            // }
        }
    }, [socketConnect]);

    // ==================================================================================================================



    useEffect(() => {
        setFilteredData((array));
    }, [])

    const filters = (e) => {
        setSearch(e.target.value);
        let newData = array.filter((item) => {
            if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                return item;
            }

        });

        console.log(newData);
        setFilteredData(newData);

    }

    // ========================================================================================================================

    const handleClick = (chat) => {
        console.log(chat);
        socket.emit("req", {
            en: "sendMessage",
            data: {
                messageText: text.value,
                recId: id,
            },
            token: token,
        });
        console.log("---------------error----------------")
    };

    socket.on("resJSON", (data) => {
        // setFirst(data);
        console.log(data);
    })

    const onHandle = (data) => {
        console.log(data);
        setFirst(data.data);
        // console.log(first);
    };

    const handleChange = (e) => {
        setText({ value: e.target.value });
        console.log(e);
    };


    let array = JSON.parse(localStorage.getItem("getFriends"));
    console.log(array);

    // ======================================================================================================================

    return (
        isLoading ? (
            <Loader />
        ) : (
            <>
                {/* <div style={{ display: "relative" }}>
                {loading && (
                    <div
                        className={classes.root}
                        style={{
                            position: "absolute",
                            width: "100vw",
                            height: "100vh",
                            top: "0",
                            left: "0",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                        }}
                    >
                        <CircularProgress color="secondary" />
                    </div>
                )}
            </div> */}

                <div>
                    <h3 class=" text-center ">Messaging</h3>
                    <div class="messaging">
                        <div class="inbox_msg">
                            <div class="inbox_people">
                                <div class="headind_srch">
                                    <div class="recent_heading">
                                        <h4>Recent</h4>
                                    </div>
                                    <div class="srch_bar">
                                        <div class="stylish-input-group">
                                            <input type="text" class="search-bar" placeholder="Search" onChange={filters} />

                                            <span class="input-group-addon">
                                                <button type="button">
                                                    {" "}
                                                    <i class="fa fa-search" aria-hidden="true"></i>{" "}
                                                </button>
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                                <div class="inbox_chat">

                                    {filteredData &&
                                        filteredData.map((item, i) => {
                                            return (
                                                <div
                                                    class="chat_list"
                                                    key={i}
                                                    onClick={() => changePerson(item)}>

                                                    <div class="chat_people">
                                                        <div class="chat_img">
                                                            {" "}
                                                            <img
                                                                src="https://ptetutorials.com/images/user-profile.png"
                                                                alt="sunil"
                                                            />{" "}
                                                        </div>
                                                        <div class="chat_ib">
                                                            <h5>
                                                                {item.name}
                                                                <span class="chat_date">Dec 25</span>
                                                            </h5>
                                                            <p>
                                                                Test, which is a new approach to have all
                                                                solutions astrology under one roof.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>



                            <div class="mesgs">
                                <h3 style={{ textAlign: "center", textTransform: "capitalize" }}>
                                    {name}
                                </h3>
                                <br />
                                {/* <h2 style={{backgroundColor: 'lightblue', width: '20%', 'textAlign':'center', marginLeft : '40%',  'border': '2px solid red','border-radius': '25px'}}>Say Hello</h2> */}

                                <div class="msg_history">
                                    {name == "" ? (
                                        <>
                                            <div style={{ textAlign: 'center' }}>
                                                <img
                                                    src="https://ptetutorials.com/images/user-profile.png"
                                                    alt="sunil"
                                                />
                                            </div>
                                            <h3 style={{ textAlign: 'center', textDecoration: 'underline', marginTop: '20px' }}>Welcome to the <span style={{ color: 'red' }}>Chat Application</span></h3>
                                        </>
                                    ) : (
                                        <div class="incoming_msg">
                                            {first &&
                                                first.map((chat, i) => {
                                                    console.log(chat);
                                                    return (
                                                        <>
                                                            {chat.recId !== id ? (
                                                                <>
                                                                    <div class="incoming_msg_img">
                                                                        {" "}
                                                                        <img
                                                                            src="https://ptetutorials.com/images/user-profile.png"
                                                                            alt="sunil"
                                                                        />{" "}
                                                                    </div>

                                                                    <div class="received_msg">
                                                                        <div class="received_withd_msg">
                                                                            <p>{chat.messageText}</p>

                                                                            <span class="time_date">
                                                                                {" "}
                                                                                11:01 AM | June 9
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <div class="outgoing_msg">
                                                                    <div class="sent_msg">
                                                                        <p>{chat.messageText}</p>
                                                                        <span class="time_date">
                                                                            {" "}
                                                                            11:01 AM | June 9
                                                                        </span>{" "}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </>
                                                    );
                                                })}
                                            <div ref={messagesEndRef} />
                                        </div>
                                    )}
                                </div>


                                <div class="type_msg">
                                    <div class="input_msg_write">
                                        <input
                                            type="text"
                                            class="write_msg"
                                            placeholder="Type a message"
                                            value={text.value}
                                            onChange={handleChange} />
                                        <button
                                            class="msg_send_btn"
                                            type="button"
                                            onClick={() => handleClick(arrData)}>
                                            {/* <i class="fa fa-paper-plane" aria-hidden="true"></i> */}
                                            <NearMeSharpIcon />

                                        </button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChat: () => dispatch(fetchChat()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
