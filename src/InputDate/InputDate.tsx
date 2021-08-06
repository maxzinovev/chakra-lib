import React, { useEffect, useRef, useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  InputGroup,
  Input,
  InputRightElement, FormControl, Icon, useColorModeValue,
} from '@chakra-ui/react';
import DayPicker from 'react-day-picker';
import FocusLock from 'react-focus-lock';
import 'react-day-picker/lib/style.css';
import './style.scss';
import {
  FIRST_DAY_OF_WEEK,
  LABELS,
  locale,
  MONTHS,
  WEEKDAYS_LONG,
  WEEKDAYS_SHORT,
} from './config';
import MaskedInput from 'react-text-mask';
import { getDateReadFormat, getDateToPicker, isInvalidDate } from '../utils/dateFormatting';
import { FormLabel } from '../FormLabel';
import { CalendarIcon, SmallCloseIcon } from '@chakra-ui/icons';

interface InputDateProps {
  name?: string;
  onChange?: any;
  hideClearButton?: boolean;
  placement?: any;
  showCurrentDate?: boolean;
  defaultValue?: string;
  value?: string;
  label?: string;
}

export const InputDate = (
  {
    name,
    onChange = null,
    placement = 'top',
    showCurrentDate = true,
    hideClearButton,
    defaultValue,
    value,
    label,
    ...props
  }: InputDateProps) => {
  const initialFocusRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const [selectedDay, setSelectedDay] = useState<string | undefined>(defaultValue ? defaultValue : value);
  const [inputState, setInputState] = useState<string | undefined>(defaultValue ? defaultValue : value);
  const handleDayClick = (day: any, {selected}: any) => {
    if (!selected) {
      const dateReadFormat = getDateReadFormat(day);
      setSelectedDay(dateReadFormat);
      setInputState(dateReadFormat);
    }
  };

  const handleInputBlur = (e: any) => {
    const valueInput = e.target.value;
    if (isInvalidDate(valueInput)) {
      setSelectedDay(valueInput)
    } else {
      setSelectedDay('');
      setInputState('');
    }
  }

  const clear = () => {
    setSelectedDay('');
    setInputState('');
  }

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(
    () => {
      onChange && onChange(selectedDay);
    },
    [selectedDay],
  );

  useEffect(() => {
    if (value !== selectedDay) {
      setSelectedDay(value);
      setInputState(value);
    }
  }, [value])

  return (
    <FormControl>
      {label && (
        <FormLabel>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        <MaskedInput
          mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
          id={name}
          value={inputState}
          render={(ref, props) => (
            <Input id={name} ref={ref} {...props} />
          )}
          onChange={e => setInputState(e.target.value)}
          onBlur={handleInputBlur}
          {...props}
        />

        <Popover
          initialFocusRef={initialFocusRef}
          placement={placement}
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={close}
        >
          <PopoverTrigger>
            <InputRightElement height="100%" padding="0 10px">
              {selectedDay && !hideClearButton && (
                <Icon
                  as={SmallCloseIcon}
                  color="gray.600"
                  mr={2}
                  onClick={clear}
                  cursor="pointer"
                  transition="0.2s"
                  _hover={{
                    color: 'gray.500'
                  }}
                />
              )}
              <Icon
                as={CalendarIcon}
                color="gray.200"
                transition="0.2s"
                cursor="pointer"
                mr={1}
                onClick={open}
                _hover={{
                  color: 'gray.300'
                }}
              />
            </InputRightElement>
          </PopoverTrigger>
          <PopoverContent width="300px" zIndex={4} padding="8px 8px 6px 8px">
            <PopoverArrow/>
            <PopoverBody>
              <FocusLock returnFocus persistentFocus={false}>
                <DayPicker
                  className={useColorModeValue('UIDatePickerLight', 'UIDatePickerDark')}
                  locale={locale}
                  months={MONTHS[locale]}
                  weekdaysLong={WEEKDAYS_LONG[locale]}
                  weekdaysShort={WEEKDAYS_SHORT[locale]}
                  firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
                  labels={LABELS[locale]}
                  numberOfMonths={1}
                  onDayClick={handleDayClick}
                  selectedDays={getDateToPicker(selectedDay)}
                  //ref={initialFocusRef}
                />
              </FocusLock>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </InputGroup>
    </FormControl>
  );
};
