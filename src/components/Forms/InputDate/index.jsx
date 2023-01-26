import { Box, Input } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './index.css';

import { format, isWeekend } from 'date-fns';
import formatDate from '../../../utils/formatDate';
import iconCalendar from '/images/icons/icon-calendar.svg';
import { id } from 'date-fns/locale';

export default function InputDate(props) {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);
  const refDate = useRef(null);

  const datePickerChange = (value) => {
    const target = {
      target: {
        name: name,
        value: value.selection,
      },
    };
    props.onChange(target);
  };

  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ''}${
    value.endDate ? ' - ' + formatDate(value.endDate) : ''
  }`;

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const customDayContent = (day) => {
    let extraDot = null;
    if (isWeekend(day)) {
      extraDot = (
        <div
          style={{
            height: '5px',
            width: '5px',
            borderRadius: '100%',
            background: '#e74c3c',
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        />
      );
    }
    return (
      <div>
        <span>{format(day, 'd')}</span>
        {extraDot}
      </div>
    );
  };

  return (
    <Box ref={refDate} className={['input-date', props.outerClassName].join('')}>
      <Box className="input-group">
        <Box className="input-group-prepend">
          <Box component="span" className="input-group-text" onClick={() => setIsShowed(!isShowed)}>
            <img src={iconCalendar} alt="icon calendar" />
          </Box>
        </Box>
        <Input
          fullWidth
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={displayDate}
          onClick={() => setIsShowed(!isShowed)}
        />
        {isShowed && (
          <Box className="date-range-wrapper">
            <DateRange
              minDate={new Date()}
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              dayContentRenderer={customDayContent}
              onRangeFocusChange={check}
              ranges={[value]}
              locale={id}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

InputDate.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
};
