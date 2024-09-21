'use client'

import React, { useContext, useState } from 'react'
import { tabData } from './data'
import { activeTab } from './Hero';
import { TabContext } from './TabContext';

function Tabs() {
    const { activeTab, setActiveTab } = useContext(TabContext);
    return (
        <div className='tab-overall'>
            {/* <div className='flex justify-center tab-menu'>
                {tabData.map((data, index) => (
                    <button
                        key={data.id}
                        onClick={() => setActivrTab(data.id)}
                        className={`px-8 py-8 text-xl rounded-lg w-48 ${activeTab === data.id && 'bg-blue-500'}`}>
                        {data.title}
                    </button>
                ))}
            </div> */}

            <div className='tab-content'>
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