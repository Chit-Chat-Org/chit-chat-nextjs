"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastContainerWrapper() {
    return (
        <ToastContainer position={toast.POSITION.BOTTOM_CENTER} theme="dark" />
    );
}