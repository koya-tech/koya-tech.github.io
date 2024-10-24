"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { tabData } from './data';

interface TabProviderProps {
    children: ReactNode;
}

interface TabContextType {
    activeTab: number;
    setActiveTab: Dispatch<SetStateAction<number>>;
}

export const TabContext = createContext<TabContextType>({
    activeTab: tabData[0].id,
    setActiveTab: () => { },
});


export const TabProvider = ({ children }: TabProviderProps) => {
    const [activeTab, setActiveTab] = useState(tabData[0].id);


    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabContext.Provider>
    );
};
