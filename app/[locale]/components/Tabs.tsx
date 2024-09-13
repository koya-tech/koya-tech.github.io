'use client'

import React, { useState } from 'react'
import { tabData } from './data'

function Tabs() {
    const [activeTab, setActivrTab] = useState(tabData[0].id);
    return (
        <div>
            <div className='flex justify-center'>
                {tabData.map((data, index) => (
                    <button
                        key={data.id}
                        onClick={() => setActivrTab(data.id)}
                        className={`px-8 py-8 text-xl rounded-lg w-48 ${activeTab === data.id && 'bg-blue-500'}`}>
                        {data.title}
                    </button>
                ))}
            </div>

            <div>
                {tabData.map((data, index) => (
                    data.id === activeTab && (
                        <div key={data.id}>
                            {data.content}
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

export default Tabs;