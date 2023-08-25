import React from 'react'

function Breadcrumbs() {
    return (
        <>
            <div className="text-sm breadcrumbs overflow-hidden">
                <ul>
                    {/* change span tag to a tag   */}
                    <li><span>Dashboard</span></li>
                    <li><span>OTMS</span></li>
                    <li><span>Tickets</span></li>
                    <li><span>List</span></li>
                </ul>
            </div>
        </>
    )
}

export default Breadcrumbs