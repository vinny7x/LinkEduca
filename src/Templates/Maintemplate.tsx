import type React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
type MaintemplateProps = {
    children: React.ReactNode
}
export function Maintemplate({children}:MaintemplateProps){
    return (
        <>
        
        <Navbar/>
        {children}
        </>
    )
}