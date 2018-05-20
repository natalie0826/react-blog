import React from 'react';
import { Input } from 'antd';

export const MenuSearch = () => {
    const { Search } = Input;

    return (
        <Search
          className="menu-main__left-items menu-main__left-items--search"
           placeholder="search . . ."
           onSearch={value => console.log(value)}
         />
    )
}
