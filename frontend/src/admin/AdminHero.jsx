import React, { useEffect, useState } from "react";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import HeroManagement from "./components/HeroManagement/HeroManagement"

function AdminHero() {
    document.title = "MVRV Admin Panel - Héros"
    return(
        <>
        <AdminNavbar/>
        <section>
            <div className="container">
                <HeroManagement/>
            </div>
        </section>
        </>
    )
}

export default AdminHero