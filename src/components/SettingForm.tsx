import React, {FC, useState} from 'react';
import {Slider, Input, Divider} from 'antd';


type SettingProps = {
    numberButtons: number
}

const password = function getPassword(numberButtons: number, length: number) {
    let password = ''
    for (let i = 0; i < length; i++) {
        password += '' + Math.floor(Math.random() * numberButtons) + '';
    }
    return password;
}

const SettingForm: FC<SettingProps> = ({ numberButtons = 9}) => {
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
            <Input.Password value={password(numberButtons, passwordLength)} />
        </div>
    )
};

export default SettingForm;