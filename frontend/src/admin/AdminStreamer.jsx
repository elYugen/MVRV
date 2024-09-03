import React, { useEffect, useState } from "react";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import StreamerManagement from "./components/StreamerManagement/StreamerManagement"

function AdminNews() {
    document.title = "MVRV Admin Panel - Streamers"
    return(
        <>
        <AdminNavbar/>
        <section>
            <div className="container">
                <StreamerManagement/>
            </div>
        </section>
        </>
    )
}

export default AdminNews