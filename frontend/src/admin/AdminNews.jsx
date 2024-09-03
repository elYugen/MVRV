import React, { useEffect, useState } from "react";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import NewsManagement from "./components/NewsManagement/NewsManagement"

function AdminNews() {
    document.title = "MVRV Admin Panel - Articles"
    return(
        <>
        <AdminNavbar/>
        <section>
            <div className="container">
                <NewsManagement/>
            </div>
        </section>
        </>
    )
}

export default AdminNews