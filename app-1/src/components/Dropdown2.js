import React from 'react';

const Dropdown2 = ({ options, name }) => {
    let level = 1

    const renderSubMenu = (subOptions, currentLevel) => {
        const submenuClass = currentLevel === 1 ? 'submenu' : 'submenu2';  // Verifica o nível para definir a classe

        return (
            <ul className={submenuClass}>
                {subOptions.map((option, index) => (
                    <li key={index}>
                        <a href={option.link}>{option.name}</a>
                        {option.subOptions && renderSubMenu(option.subOptions, currentLevel + 1)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <ul className='dropdown2'>
            <a href="/">
                {name + ' ⮟'}
            </a>
            {options && renderSubMenu(options, level)}
        </ul>
    );
};

export default Dropdown2;