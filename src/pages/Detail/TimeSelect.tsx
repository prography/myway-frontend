import React, { useState, useEffect, ChangeEventHandler } from 'react';
import { availAdTime } from 'models/partner';

type Props = {
  date: string;
  availAdTimeTables: availAdTime[];
  onChange: ChangeEventHandler;
}

const TimeSelect: React.FC<Props> = ({ 
  date, 
  availAdTimeTables, 
  onChange,
}) => {
  const [options, setOptions] = useState<number[]>([]);

  useEffect(() => {
    let availTimes: number[] = [];
    availAdTimeTables.forEach((item) => {
      if(item.adDate === date) {
        availTimes.push(item.adHour);
      }
    });
    setOptions(availTimes);
  }, [date]);

  return (
    <select
      onChange={onChange}
    >
      <option value={0}>시간을 선택해 주세요.</option>
      {options.map((item) => (
        <option key={item} value={item}>{item}:00 ~ {item+1}:00</option>
      ))}
    </select>
  );
};

export default React.memo(TimeSelect);