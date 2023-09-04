import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
 type MenuItem = Required<MenuProps>['items'][number];
// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }
// const items: MenuItem[] = [
//     getItem('geyao', '/geyao', <PieChartOutlined />),
//     getItem('fang', '/fang', <DesktopOutlined />),
// ];
const items:MenuItem[]=[
    {label:"geyao",key:"geyao",icon:<PieChartOutlined />},
    {label:"fang",key:"fang",icon: <DesktopOutlined />}
]
const MainMenu: React.FC = () => {
    const [openkeys, setOpenkeys] = useState(['']);
    const currentRoute=useLocation()
    let firstOpenKey:any=""
    function findKey(obj:any){
        return obj.key===currentRoute.pathname
    }
    for(let i=0;i<items.length;i++){
        if(items[i]!['children']&&items[i]!['children'].length>0&&items[i]!['children'].findKey(findKey)){
            firstOpenKey=items[i]?.key;
            break
        }
    }
    const nevigateTo = useNavigate()
    const menuClick = (e: any) => {
        nevigateTo(e.key)

    }
    const handleChange = (keys: string[]) => {
        setOpenkeys([keys[keys.length - 1]])
    }
    return (
        <>
            <div className="logo" />
            <Menu defaultSelectedKeys={[currentRoute.pathname]} openKeys={openkeys} onOpenChange={handleChange} theme="dark" onClick={menuClick}  mode="inline" items={items} />
        </>
    )
}
export default MainMenu