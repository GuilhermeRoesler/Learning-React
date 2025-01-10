import React from 'react';

const Dropdown = ({ options, name, link }) => {
    const renderSubMenu = (subOptions) => {
        return (
            <div className='dropdown-content'>
                {subOptions.map((option, index) => (
                    <div className='submenu' key={index}>
                        <a onClick={option.onClick} href={option.link}>{option.name}</a>
                        {option.subOptions && renderSubMenu(option.subOptions)}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className='dropdown'>
            <a href={link}>{name} ⮟</a>
            {options && renderSubMenu(options)}
        </div>
    );
};

export default Dropdown;
