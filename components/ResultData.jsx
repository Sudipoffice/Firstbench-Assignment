import React from 'react'
import AccuracyChart from './AccuracyChart'

const ResultData = () => {
    const subjects = [{Name:"Geography", Color:"#14b8a6"},{Name:"Politics", Color:"#f59e0b"},{Name:"Current Affairs", Color:"#14b8a6"},{Name:"General Studies", Color:"#b91c1c"},{Name:"Mathematics", Color:"#14b8a6"},{Name:"Social Studies", Color:"#9ca3af"},{Name:"English Literature", Color:"#b91c1c"},{Name:"Indian History", Color:"#f59e0b"},{Name:"Economics", Color:"#14b8a6"},]
    const approachData= [{Percentage:"25", Type:"Facts"},{Percentage:"32", Type:"Analysis"},{Percentage:"19", Type:"Elemination"},{Percentage:"24", Type:"Guess"},]
  return (
    <div className="w-full min-h-screen p-4 lg:p-0  xl:w-[72%] flex flex-col gap-4 md:gap-6">
      {/* First Section - Three equal boxes */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="w-full rounded-xl border-2 border-gray-200 text-gray-400 bg-white p-3 aspect-1/1">
            <div className="flex gap-2 items-center">
              <span className="rounded-md border-2 border-gray-400 h-5 w-5 p-[1px] flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-sm text-gray-500 font-bold">keyboard_arrow_down</span>
              </span>
              <h3 className="font-medium text-gray-400">Compare Accuracy</h3>
            </div>
          </div>
        ))}
      </section>

      {/* Second Section - Four cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Improvements Card */}
        <div className="w-full rounded-xl border-2 border-gray-200 bg-white p-5 sm:p-2  flex flex-col gap-4">
          <div className="flex gap-2 items-center relative">
            <span className="material-symbols-outlined text-xs text-gray-400 font-extrabold absolute left-0 top-0">north_east</span>
            <span className="material-symbols-outlined text-base text-gray-400 font-bold">floor</span>
            <h3 className="font-medium text-gray-400 text-base md:text-lg">Improvements</h3>
          </div>
          <h2 className="font-medium">Subject Understanding</h2>
          <div className="flex flex-row flex-wrap gap-1">
            {subjects?.map((sub, idx) => (
              <div key={idx} className="rounded-xl px-2 py-1 text-[9px] text-white" style={{ backgroundColor: sub.Color }}>
                {sub.Name}
              </div>
            ))}
          </div>
        </div>

        {/* Response Time Card */}
        <div className="w-full rounded-xl border-2 border-gray-200 bg-white p-5 sm:p-2">
          <div className="flex gap-2 items-center">
            <span className="material-symbols-outlined font-bold text-md text-gray-400">schedule</span>
            <h3 className="font-medium text-gray-400 text-base md:text-lg">Response Time</h3>
          </div>
          <div className="flex flex-col gap-4 pt-4 divide-solid divide-y-2 divide-gray-300">
            <div className="flex flex-col gap-4">
              <span className="bg-indigo-600 rounded-sm px-[5px] py-[3px] text-[10px] text-white w-fit">Std Time - 2min</span>
              <span className="border-dashed border-2 border-gray-300 rounded-md px-2 bg-indigo-50 flex items-end flex-wrap w-fit ">
                <h2 className="text-teal-500 text-2xl md:text-3xl">60</h2>
                <p className="text-lg md:text-xl text-gray-400 font-semibold pr-4 sm:pr-0">%</p>
                <p className="text-xs md:text-sm text-gray-400 font-semibold p-1 pr-4 sm:pr-0">Ans took</p>
                <span className="material-symbols-outlined text-red-600 text-xl md:text-2xl font-extrabold">arrow_upward</span>
                <p className="text-base md:text-lg text-indigo-500"><b>2</b>min</p>
              </span>
            </div>
            <div className="flex gap-1 font-semibold justify-center items-center py-2">
              <p className="text-lg md:text-xl text-gray-900">You are</p>
              <p className="text-lg md:text-xl text-red-600">slow</p>
              <p className="text-lg md:text-xl text-gray-900">!</p>
            </div>
          </div>
        </div>

        {/* Approach Data Card */}
        <div className="w-full rounded-xl border-2 border-gray-200 bg-white p-5 sm:p-2">
          <div className="flex gap-2 items-center relative">
            <span className="material-symbols-outlined text-xs text-gray-400 font-extrabold absolute left-0 top-0">north_east</span>
            <span className="material-symbols-outlined text-base text-gray-400 font-bold">floor</span>
            <h3 className="font-medium text-gray-400 text-base md:text-lg">Approach Data</h3>
          </div>
          <div className="flex flex-col gap-[3px] pt-1">
            {approachData?.map((a, id) => (
              <div key={id} className="border-solid border-2 border-gray-300 rounded-sm p-1 py-[4px] flex gap-1">
                <span className="bg-indigo-100 text-indigo-600 font-semibold px-1 flex justify-center items-center">
                  {a.Percentage}<p className="text-[10px]">%</p>
                </span>
                <span className="flex justify-center items-center gap-1 text-xs md:text-sm font-semibold">
                  Based on<p className="text-indigo-600 text-sm md:text-base">{a.Type}</p>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Suggestions Card */}
        <div className="w-full rounded-xl border-2 border-gray-200 bg-white p-5 sm:p-2">
          <div className="flex gap-2 items-center">
            <i className="bi bi-stars text-gray-400"></i>
            <h3 className="font-medium text-gray-400 text-base md:text-lg">Suggestions</h3>
          </div>
          <div className="flex flex-row py-4 md:py-6 gap-2 justify-center items-center">
            {[
              { range: "Q. 1-12", time: "40", unit: "sec", difficulty: "Easy", color: "text-green-500" },
              { range: "Q. 12-32", time: "1.5", unit: "min", difficulty: "Medium", color: "text-yellow-500" },
              { range: "Q. 32-40", time: "3", unit: "min", difficulty: "Hard", color: "text-red-500" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2 md:gap-3 justify-center items-center">
                <span className="bg-indigo-500 text-white px-1 text-xs rounded-sm">{item.range}</span>
                <span className="border-dashed border-2 border-gray-400 rounded-md bg-indigo-50 text-base md:text-lg font-semibold flex items-center p-2">
                  {item.time}<p className="text-xs font-bold">{item.unit}</p>
                </span>
                <span className={`${item.color} text-xs md:text-sm font-bold`}>{item.difficulty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Section - Two cards */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Compare Accuracy Card */}
        <div className="border-2 border-gray-200 rounded-xl bg-white p-5 sm:p-3 flex flex-col">
          <div className="flex gap-2 items-center relative">
            <span className="material-symbols-outlined text-base text-gray-400 font-bold">rebase</span>
            <h3 className="font-medium text-gray-400 text-base md:text-lg">Compare Accuracy</h3>
          </div>
          <AccuracyChart />
        </div>

        {/* Time Taken Card */}
        <div className="border-2 border-gray-200 rounded-xl bg-white p-3 flex flex-col">
          <div className="flex gap-2 items-center relative">
            <span className="material-symbols-outlined text-base text-gray-400 font-bold">assignment_late</span>
            <h3 className="font-medium text-gray-400 text-base md:text-lg">Time Taken</h3>
          </div>
          <div className="p-2 h-fit">
            {/* Rulers */}
            {[1, 2].map((rulerIndex) => (
        <div key={rulerIndex} className="relative w-full bg-indigo-50 rounded-lg p-1 mb-3 overflow-hidden">
          <div className="flex justify-between text-xs text-gray-900 min-w-[500px]">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div className="flex gap-1 sm:gap-2">
                  <div className="h-5 w-1 sm:w-[4px] rounded-md bg-indigo-400"></div>
                  { Array.from({ length: 4 }).map((_, j) => (
                    <div 
                      key={j} 
                      className="h-2 w-0.5 rounded-md bg-indigo-400 hidden sm:block"
                    ></div>
                  ))}
                </div>
                <span className="font-semibold flex justify-start w-full items-end relative whitespace-nowrap">
                  {rulerIndex === 1 ? (i + 1) * 10 : Math.abs(4 - i)}
                  {i === 0 && (
                    <p className="text-[10px] absolute left-4 font-semibold">sec</p>
                  )}
                </span>
              </div>
            ))}
          </div>
          <div className="min-w-[500px]">
            <div 
              className={`bg-red-600 h-3 rounded-sm my-1 transition-transform ${
                rulerIndex === 2 ? 'translate-x-60 translate-y-1' : ''
              }`}
              style={{ width: rulerIndex === 1 ? '55%' : '35%' }}
            />
            <div 
              className={`bg-green-400 h-3 rounded-sm my-1 transition-transform ${
                rulerIndex === 2 ? 'translate-x-28 -translate-y-3' : ''
              }`}
              style={{ width: rulerIndex === 1 ? '22%' : '22%' }}
            />
            <div className={`absolute top-0 ${rulerIndex === 1 ? 'left-[114px]' : 'right-[25%] sm:right-[48.5%]'} w-3 rounded-sm bg-indigo-600 h-[120%] opacity-50`}/>
          </div>
          
        </div>
      ))}

            <p className="text-gray-400 text-xs md:text-sm mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResultData
