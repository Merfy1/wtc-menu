import React, { useState } from "react";
import { Sidebar } from "../AdminSidebar/Sidebar"
import "./adminpanel.css";

export function AdminPanel() {
    return(
        <>
        <div className="sidebar-body">
            <Sidebar></Sidebar>
        </div>
        </>
    )
}