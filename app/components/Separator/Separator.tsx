import React from 'react';

function Separator() {
    return (
        <div className="flex items-center justify-center my-8">
            <div className="w-10/12  flex items-center">
                <div className="border-t border-gray-300 flex-grow"></div>
                <div className="mx-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.18 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                </div>
                <div className="border-t border-gray-300 flex-grow"></div>
            </div>
        </div>
    );
}

export default Separator;
