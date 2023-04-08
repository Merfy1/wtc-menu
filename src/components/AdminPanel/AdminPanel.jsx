import React from "react";
import { Sidebar } from "../AdminSidebar/Sidebar"
import "./adminpanel.css";

export function AdminPanel() {
    return(
        <>
        <div className="adminpanel-body">
            <Sidebar></Sidebar>
        </div>
        </>
    )
}