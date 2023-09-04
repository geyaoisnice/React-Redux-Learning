import { Button, Input, Space } from 'antd'
import React, { useState } from 'react'
import "./app.scss"
function Login() {
    const [username,setUsername]=useState()
    const [password,setPassWord]=useState()
    const handleChange=(e:any)=>{
        setUsername(e.target.value)
    }
    const handlePassChange=(e:any)=>{
        setPassWord(e.target.value)
    }
    const handleLogin=()=>{
        
    }
    return (
        <div className='loginbox'>
        <div className='form'>
            <Space direction='vertical' size="large" style={{ display: "flex",alignItems:"center",justifyContent:"center" }}>
                <Input value={username} onChange={handleChange} style={{width:"200px"}}  placeholder='请输入账号'></Input>
                <Input.Password value={password} onChange={handlePassChange}  style={{width:"200px"}} placeholder='请输入账号' />
                <Button type='primary' onClick={handleLogin}>确定</Button>
            </Space>
        </div>
        </div>
    )
}
export default Login

