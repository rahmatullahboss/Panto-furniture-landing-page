// import React from 'react'
// import { FaLongArrowAltLeft } from 'react-icons/fa'

// const PrevArrow = ({ className, style, onClick }) => {
//   return (
//     <div
//       className={`w-[64px] h-[64px] rounded-full bg-white hover:!bg-amber-600 flex justify-center items-center absolute top-1/2 -left-[30px] -translate-y-1/2 z-50 cursor-pointer transition-all duration-300 ${className}`}
//       onClick={onClick}
//       // ensures initial white background
//     >
//       <FaLongArrowAltLeft className="text-black text-2xl" />
//     </div>
//   )
// }

// export default PrevArrow
import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="custom-prev absolute top-1/2 -left-[30px] -translate-y-1/2 z-[100] cursor-pointer"
    >
      <div className="w-[64px] h-[64px] bg-white hover:bg-amber-600 rounded-full flex justify-center items-center shadow-md transition-all duration-300">
        <FaLongArrowAltLeft className="text-black text-lg group-hover:text-white" />
      </div>
    </div>
  )
}

export default PrevArrow

