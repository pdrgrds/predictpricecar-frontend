import React, { useState, useEffect, useRef } from 'react';
import './style.scss';

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  label: string;
  isRequired?: boolean
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
};

export const SelectInternComponent: React.FC<CustomSelectProps> = ({
  options,
  placeholder = 'Select an option',
  onChange,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select-container" ref={containerRef}>
      <span className="label-form">{ props.label } { props.isRequired && <span className="required"> (*) </span> }</span>
      <button
        className="custom-select-button custom-select-button-intern"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : <span className="placeholder">{placeholder}</span>}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className="custom-select-dropdown">
          {options.map((option) => (
            <li
              key={option.value}
              className="custom-select-option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
