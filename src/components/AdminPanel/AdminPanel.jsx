import React, { useState } from "react";
import { AdminCategory } from "../AdminCategory/AdminCategory";
import { Sidebar } from "../AdminSidebar/Sidebar"
import { SidebarMore } from "../AdminSidebarMore/SidebarMore";
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