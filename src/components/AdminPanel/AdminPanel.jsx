import React, { useState } from "react";
import { AdminMain } from "../AdminMain/AdminMain";
import { Sidebar } from "../AdminSidebar/Sidebar"
import { SidebarMore } from "../AdminSidebarMore/SidebarMore";
import "./adminpanel.css";

export function AdminPanel() {
    return(
        <>
        <div className="adminpanel-body">
            <Sidebar></Sidebar>
            <SidebarMore></SidebarMore>
            <AdminMain></AdminMain>
        </div>
        </>
    )
}