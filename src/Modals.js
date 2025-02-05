import React, {useState} from "react";

const Modal = ({ title, children, onClose }) => {
    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                onClick={onClose} // Close modal when clicking outside
            >
                {/* Modal Box */}
                <div
                    className="bg-white p-6 rounded-lg shadow-lg w-1/3"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                >
                    {/* Modal Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <button onClick={onClose} className="text-lg font-bold">&times;</button>
                    </div>

                    {/* Modal Body */}
                    <div>{children}</div>
                </div>
            </div>
        </>
    );
};

export default Modal;