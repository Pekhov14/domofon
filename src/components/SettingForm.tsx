import React, {FC, useState} from 'react';
import {Slider, Input, Divider} from 'antd';


type SettingProps = {
    maxNumberInKeyBoard: number
}

const password = function getPassword(maxNumberInKeyBoard: number, length: number) {
    let password = ''
    for (let i = 0; i < length; i++) {
        password += '' + Math.floor(Math.random() * maxNumberInKeyBoard) + '';
    }
    return password;
}

const SettingForm: FC<SettingProps> = ({ maxNumberInKeyBoard = 9}) => {
    const [passwordLength, setInputValue] = useState(2);

    const onChange = (newValue: number) => {
        setInputValue(newValue);
    };

    return (
        <div>
            <Divider orientation="left">Generate password for intercom</Divider>
            <p>Password length</p>
            <Slider
                min={1}
                max={10}
                onChange={onChange}
                value={passwordLength}
            />
            <p>Generated password:</p>
            <Input.Password value={password(maxNumberInKeyBoard, passwordLength)} />
        </div>
    )
};

export default SettingForm;