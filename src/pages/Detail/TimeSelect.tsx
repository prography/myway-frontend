import React, { useState, useEffect, ChangeEventHandler } from 'react';
import { availAdTime } from 'models/partner';

type Props = {
  date: string;
  availAdTimeTables: availAdTime[];
  onChange: ChangeEventHandler;
}

type AvailItem = {
  availId: number;
  adHour: number;
}

const TimeSelect: React.FC<Props> = ({ 
  date, 
  availAdTimeTables, 
  onChange,
}) => {
  const [options, setOptions] = useState<AvailItem[]>([]);

  useEffect(() => {
    const availItems: AvailItem[] = [];

    availAdTimeTables.forEach((item) => {
      if(item.adDate === date) {
        availItems.push({
          availId: item.id,
          adHour: item.adHour,
        });
      }
    });
    setOptions(availItems);
  }, [date]);

  return (
    <select
      onChange={onChange}
    >
      <option value={0}>시간을 선택해 주세요.</option>
      {options.map((item) => (
        <option key={item.availId} value={JSON.stringify(item)}>{item.adHour}:00 ~ {item.adHour + 1}:00</option>
      ))}
    </select>
  );
};

export default React.memo(TimeSelect);