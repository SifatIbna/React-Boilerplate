import React,{useState,useEffect} from 'react';
import {NodeFetchHelper} from "../Utils/NodeFetchHelper";

const api_endpoint = "http://localhost:2000/users/"

const RestApi = () => {
    const [arr,setArray]=useState([])
    useEffect(function (){
        NodeFetchHelper.get(api_endpoint,null,null,function (status, jsonData){
            if(status>=400){
                //ERR
            }
            else{
                //OK
                setArray(jsonData)
            }
        })

    },[])

    return (
        <div>
            <div>
                <input id="email" placeholder="Email"/>
                <input id="location" placeholder="Location"/>
                <input id="name" placeholder="Name"/>
                <button onClick={()=>{
                    var email=document.getElementById('email').value
                    var location=document.getElementById('location').value
                    var name=document.getElementById('name').value

                    console.log(`${email} -- ${location} -- ${name}`)

                    NodeFetchHelper.post(api_endpoint,null,null,{
                        email,
                        location,
                        name
                    },function (statusCode, jsonData){
                        if(statusCode>=400){
                            //ERR
                        }
                        else{
                            //OK
                            NodeFetchHelper.get(api_endpoint,null,null,function (status, jsonData){
                                if(status>=400){
                                    //ERR
                                }
                                else{
                                    //OK
                                    setArray(jsonData)
                                }
                            })
                        }

                    })

                    // setArray([
                    //     ...arr,
                    //     {
                    //         email,
                    //         location,
                    //         name
                    //
                    //     }
                    // ])


                }}>Send</button>
                <button onClick={()=>({

                })}>Cancel</button>
            </div>
            <div>
                {
                    arr.map(function (item,index){
                        return <div>
                            <p>Name: {item.name} </p>
                            <p>Location: {item.location}</p>
                            <p>Email: {item.email}</p>

                            <button onClick={function (){
                                NodeFetchHelper.deletee(api_endpoint+item._id,null,null,function (status,jsonData){
                                    if(status>=400){
                                        //ERR
                                    }
                                    else{
                                        //OK
                                        NodeFetchHelper.get(api_endpoint,null,null,function (status, jsonData){
                                            if(status>=400){
                                                //ERR
                                            }
                                            else{
                                                //OK
                                                setArray(jsonData)
                                            }
                                        })
                                    }
                                })

                                // setArray(arr.filter(function (itemFilter,indexFilter){
                                //     return index !== indexFilter
                                //
                                // }))
                            }}>Delete</button>

                        </div>
                    })
                }

            </div>
        </div>
    );

};

export default RestApi;