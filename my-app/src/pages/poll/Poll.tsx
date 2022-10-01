import { useState } from "react";
import "./poll.css";

const options = [
  { id: 1, label: "HTML", percent: "30" },
  { id: 2, label: "CSS", percent: "20" },
  { id: 3, label: "JS", percent: "10" },
  { id: 4, label: "JQUERY", percent: "50" },
];

const Poll = () => {
  const style = (value: number) => ({ "--w": value } as React.CSSProperties);
  const [selected, setSelected] = useState(0);

  return (
    <div className="wrapper">
      <header>Poll UI Design</header>
      <div className="poll-area">
        {options?.map((item: any) => {
          return (
            <label
              htmlFor=""
              key={item.id}
              className={selected === item.id ? "selected" : ""}
              onClick={() => {
                setSelected(item.id);
              }}
            >
              <div className="row">
                <div className="column">
                  <span className="circle"></span>
                  <span className="text">{item.label}</span>
                </div>

                <span className="percent">{item.percent}%</span>
              </div>
              <div className="progress" style={style(item.percent)}></div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Poll;
