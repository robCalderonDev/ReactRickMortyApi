import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
export const Footer = () => {
    return (
        <div>
            <div className='bg-[#2F4858] h-20 mt-4 flex justify-center  pt-4'>
                <a href='https://www.linkedin.com/in/robert-calderon-vasquez/' target="_blank"><h1 className='text-center  mx-2 '> < AiFillLinkedin style={{ color: '#ffffff', fontSize: "45px" }} /></h1></a>
                <a href='https://github.com/robCalderonDev' target="_blank"><h1 className='text-center mx-2'> < AiFillGithub style={{ color: '#ffffff', fontSize: "45px" }} /></h1></a>


            </div>
            <div className='h-8 bg-[#33658A] pt-1'>
                <h1 className='text-gray-200 text-sm font-medium text-center'>@2022 RobCalderonDev</h1>
            </div>
        </div>
    )
}
