
import React, { useEffect, useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
     const ref = useRef()
     const passwordRef = useRef()
     const [form, setform] = useState({ site: "", username: "", password: "" })
     const [passwordArray, setpasswordArray] = useState([])

     useEffect(() => {
          let passwords = localStorage.getItem("passwords")

          if (passwords) {
               setpasswordArray(JSON.parse(passwords))

          }
          //   else{
          //    passwordArray = []
          //   }
     }, [])



     const showPassword = () => {
          passwordRef.current.type = "text";
          passwordRef.current.focus()
          if (ref.current.src.includes("crosseye.png")) {

               ref.current.src = "eyes-icon-11.png";
               passwordRef.current.type = "password";
          } else {
               ref.current.src = "crosseye.png";
               passwordRef.current.type = "text";
          }
     }

     const savePassword = () => {
          if(form.site.length >3 && form.site.length >3 && form.site.length>3){
          setpasswordArray([...passwordArray, {...form, id: uuidv4()}])
          localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
          console.log([...passwordArray, form]);
          setform({site:"", username:"", password:""})
          toast('Password Saved!', {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light",

          });
          }
          else{
               toast('Error: Password not saved')
          }
          
     }

     const editPassword = (id) => {
          console.log("editing password with id", id);
          setform(passwordArray.filter(i=> i.id === id)[0])

          setpasswordArray(passwordArray.filter(item=>item.id!==id))
          // localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
          // console.log([...passwordArray, form]);
          // toast('Password Edited!', {
          //      position: "top-right",
          //      autoClose: 5000,
          //      hideProgressBar: false,
          //      closeOnClick: true,
          //      pauseOnHover: true,
          //      draggable: true,
          //      progress: undefined,
          //      theme: "light",

          // });
     }


     const deletePassword = (id) => {

          console.log("deleting password with id", id);
          let c = confirm("Do you really want to delete this password?")
          if(c){
               setpasswordArray(passwordArray.filter(item=>item.id!==id))
               localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
          }

          // console.log([...passwordArray, form]);
          toast('Password Deleted!', {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light",

          });
     }

     const handleChange = (e) => {
          setform({ ...form, [e.target.name]: e.target.value })
     }

     return (
          <>
               <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition="Bounce"
               />
               {/* Same as */}
               <ToastContainer />

               
               <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

               <div className="p-3 md:p-10 md:mycontainer min-h-[87.5vh] bg-slate-50">
                    <h1 className='text-4xl font-bold text-center'>
                         <span className='text-green-600 text-4xl'>&lt;</span>

                         Pass
                         <span className='text-green-600'>UP/&gt;</span>
                    </h1>
                    <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

                    <div className= "w-full md:w-1/2 mx-auto flex flex-col p-4 text-black gap-6 items-center">
                         <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1 text-black' type="text" name='site' id='site' />
                         <div className="flex flex-col md:flex-row w-full justify-between gap-6">
                              <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1 text-black' type="text" name='username' id='username' />

                              <div className="relative">

                                   <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1 text-black' type="password" name='password' id='password' />
                                   <span className='absolute right-[4px] top-[3px] cursor-pointer text-black ' onClick={showPassword}>
                                        <img ref={ref} className='p-1' width={28} src="eyes-icon-11.png" alt="eye" />
                                   </span>
                              </div>

                         </div>

                         <button onClick={savePassword} className="text-black flex justify-center items-center gap-3 bg-gradient-to-b border border-green-800 from-green-300 to-green-600 w-fit rounded-full px-10 py-1 ">
                              <lord-icon
                                   src="https://cdn.lordicon.com/jgnvfzqg.json"
                                   trigger="hover">

                              </lord-icon>
                              Save Password</button>
                    </div>

                    <div className="passwords w-full md:w-1/2 mx-auto">
                         <h2 className='font-semibold text-2xl py-4 mx-auto my-4'>Your Passwords</h2>
                         {passwordArray.length === 0 && <div className='text-center'>No Passwords Found</div>}
                         {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                              <thead className='bg-green-800 text-white'>
                                   <tr>
                                        <th className='py-2'>Site</th>
                                        <th className='py-2'>Username</th>
                                        <th className='py-2'>Password</th>
                                        <th className='py-2'>Actions</th>
                                   </tr>
                              </thead>
                              <tbody className='bg-green-100'>
                                   {passwordArray.map((item, index) => {
                                        return (
                                             <tr key={index}>
                                                  <td className='border border-white py-2 text-center w-32'><a href={item.site} target='_blank'>{item.site}
                                                  </a></td>
                                                  <td className='border border-white py-2 text-center w-32'>{item.username}</td>
                                                  <td className='border border-white py-2 text-center w-32'>{item.password}</td>
                                                  <td className='border border-white py-2 text-center w-32'>
                                                       <span className='cursor-pointer mx-2'onClick={()=>{editPassword(item.id)}}>
                                                            <lord-icon
                                                                 src="https://cdn.lordicon.com/wuvorxbv.json"
                                                                 trigger="hover"
                                                                 state="hover-line"
                                                                 style={{ "width": "20px", "height": "20px" }}>
                                                            </lord-icon>

                                                       </span>
                                                       <span className='cursor-pointer mx-2'onClick={()=>{deletePassword(item.id)}}>
                                                            <lord-icon
                                                                 src="https://cdn.lordicon.com/skkahier.json"
                                                                 trigger="hover"
                                                                 style={{ "width": "20px", "height": "20px" }}>
                                                            </lord-icon>

                                                       </span>
                                                  </td>
                                             </tr>
                                        )
                                   })}


                              </tbody>
                         </table>}
                    </div>
               </div>
          </>

     )
}

export default Manager