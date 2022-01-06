import React from 'react'
import { Input, Space } from 'antd';
const { Search } = Input;
const onSearch = value => console.log(value);

const SearchAttraction = () => {
    return (
        <Space direction="vertical">
            <Search placeholder="Enter service" allowClear onSearch={onSearch}  />
        </Space> 
    )
}

export default SearchAttraction
