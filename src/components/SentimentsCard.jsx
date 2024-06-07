import { FaStar } from "react-icons/fa";
import { SemiCircleProgress } from "react-semicircle-progressbar";
const SentimentsCard = ({item}) => {
  return (
    <div className="flex sm:w-[440px] w-[20px] bg-gray-200 p-3 border border-black items-center justify-between">
        <div className="space-y-5">
            <p className="text-xl ">{item.title}</p>
            <span className="text-xl mx-12 mt-3">{item.progress} {`${item.progress_percent}%`}</span>
            <div className="flex items-center max-w-20 text-center p-1 text-sm font-semibold gap-1 bg-white text-black">
                <FaStar/>
                <p>reviews</p>
            </div>
        </div>
<div>
<div className="flex flex-col items-center">
            <SemiCircleProgress
            percentage={item.progress_percent}
            strokeWidth={10}
            size={{width:150,height:150}}
            strokeColor="red"
            />
            <span className="text-center font-bold">{item.progress_percent}%</span>
        </div>
</div>
    </div>
  )
}

export default SentimentsCard