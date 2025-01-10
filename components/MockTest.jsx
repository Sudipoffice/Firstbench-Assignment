import React from 'react'
import ResultData from './ResultData'
import resultIcon from "../src/assets/hero3.png"
import Sudip from "../src/assets/Sudip.jpeg"

const MockTest = () => {
  return (
    <div className='pt-36  xl:pt-24 w-screen flex flex-col xl:flex-row gap-6 px-4 sm:px-6 lg:px-[7%] bg-gray-100'>
      <div className='w-full xl:w-[28%] h-fit rounded-xl border-2 border-gray-200 bg-[#fcf9ff] py-4 px-6 sm:px-8 flex flex-col items-center gap-10'>
        <section className='flex flex-col justify-center items-center text-center'>
          <img className='w-24 sm:w-36' src={resultIcon} alt="Result Icon" />
          <h1 className='text-2xl sm:text-3xl text-indigo-500 font-semibold'>Your Result!</h1>
          <h3 className='text-sm sm:text-base text-gray-400 font-normal'>All your insights & details in one place</h3>
        </section>
        <section className='border-2 border-gray-200 rounded-xl w-full h-fit p-4 flex flex-col gap-6 bg-white'>
          <div className='rounded-lg bg-[#f9f3ff] h-fit w-full p-2 flex flex-row gap-4 sm:gap-2 justify-between divide-x-[3px] divide-gray-300'>
            <div className='flex gap-2'>
              <span className='bg-violet-200 p-2 text-2xl text-black bi bi-clipboard-check'></span>
              <div className='flex flex-col gap-0'>
                <span className='bg-indigo-600 rounded-xl px-2 uppercase text-white text-[10px] w-fit'>You've Passed</span>
                <div className='flex justify-center items-center'><p className='text-xl sm:text-2xl font-semibold w-fit'>136&nbsp;</p><p className='text-sm text-gray-400'> / 240</p></div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center sm:pl-2'>
              <span className='w-fit py-1 px-[5px] rounded-sm text-white bg-teal-600 text-xs'>76%</span>
              <p className='text-xs uppercase text-teal-600 font-semibold'>Accuracy</p>
            </div>
          </div>
          <div className='rounded-lg bg-[#f9f3ff] h-fit w-full p-2 flex flex-col gap-3 divide-solid divide-y-[1.5px] divide-gray-300'>
            <div className='flex flex-row gap-8'>
              <span className='bg-violet-200 p-[2px] h-fit text-2xl text-black rounded-sm'>
                <img className='w-9 rounded-sm' src={Sudip} alt="" />
              </span>
              <div className='flex flex-col gap-0 items-start'>
                <span className='rounded-xl text-indigo-600 font-medium text-xs w-fit'>Top Score</span>
                <div className='flex justify-center items-center'><p className='text-xl sm:text-2xl font-semibold w-fit'>230&nbsp;</p><p className='text-sm text-gray-400'> / 240</p></div>
              </div>
            </div>
            <div className='flex justify-between items-center pt-2'>
              <p className='text-xs'>By <b>Parth Akotkar</b></p>
              <span className='rounded-xl bg-teal-600 text-white uppercase text-[10px] p-1 px-2'>92% Accuracy</span>
            </div>
          </div>
          <div>
            <h2 className='text-base sm:text-lg text-gray-900 font-semibold'>Improve your Marks</h2>
            <h4 className='text-xs sm:text-sm text-gray-500 font-medium'>Improve your score by practising more.</h4>
          </div>
          <button className='bg-indigo-600 rounded-lg p-2 sm:p-1 text-white text-sm sm:text-base'>Practice more</button>
        </section>
        <section className='border-2 border-gray-200 rounded-xl w-full h-fit p-4 flex flex-col justify-center items-center gap-8 bg-white'>
          <div className='text-center'>
            <h2 className='text-xl sm:text-2xl text-gray-900 font-bold'>Revisit Paper</h2>
            <h4 className='text-sm sm:text-base text-gray-500'>Challenge your friends by simply sharing a link to this test</h4>
          </div>
          <button className='bg-indigo-600 rounded-lg p-2 px-10 sm:px-20 text-white text-sm sm:text-lg'>
            <i className="bi bi-file-earmark-text text-[1rem]"></i> &nbsp;Visit
          </button>
          <div className='flex flex-row text-xs items-start justify-center text-gray-400 gap-2'>
            <span className="material-symbols-outlined text-lg">info</span>
            <p>Instructions for how to upload your handwritten material is given</p>
          </div>
        </section>
      </div>
        <ResultData />
    </div>
  )
}

export default MockTest
