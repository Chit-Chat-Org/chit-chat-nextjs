import { Footer, Navbar } from "@/components";
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
};

export default MarketingLayout
