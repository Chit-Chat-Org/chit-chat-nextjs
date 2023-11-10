import React from 'react'

type Props = {
    OrganizationName : string,
    OrganizationPhone : number,
    OrganizationWebsite: string,
    createdAt: string
}

export default function OrgTemp({OrganizationName, OrganizationPhone, OrganizationWebsite,createdAt}: Props) {
  return (
    <>
    <div className="flex justify-center items-center p-3">
      <div className="overflow-x-auto scrollbar-hide max-w-xs bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-xl font-semibold mb-2">{OrganizationName}</h1>
        <div className="mb-3">
          <span className="font-medium">Phone:</span> {OrganizationPhone}
        </div>
        <div className="mb-3">
          <span className="font-medium">Website:</span> {OrganizationWebsite}
        </div>
        <div>
          <span className="font-medium">Created At:</span> {new Date(createdAt).toLocaleString()}
        </div>
      </div>
    </div>
    
    </>
  )
}