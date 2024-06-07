import { useState } from "react"
import SentimentsCard from "./SentimentsCard"
import sentimentData from "../sentiment"

const Sentiments = () => {
  const [data, setData] = useState(sentimentData);
  return (
    <div className="flex flex-wrap sm:flex-row flex-col gap-5 justify-center">
      {
        data && data.length > 0 && data.map((item) => (
          <SentimentsCard key={item.id} item={item}/>
        ))
      }
    </div>
  )
}

export default Sentiments