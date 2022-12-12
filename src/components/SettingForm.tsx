import React, {FC, useEffect, useState} from 'react';
import {Slider, Input, Divider} from 'antd';
import {passwordData} from "../App";


type SettingProps = {
    handlePasswordChange: (passwordData: passwordData) => void;
    maxNumberInKeyBoard: number
}

const password = function getPassword(maxNumberInKeyBoard: number, length: number) {
    let password = ''
    for (let i = 0; i < length; i++) {
        password += '' + Math.floor(Math.random() * maxNumberInKeyBoard) + '';
    }
    return password;
}

const PasswordLengthDefault = 4;

const SettingForm: FC<SettingProps> = (
    {
        handlePasswordChange,
        maxNumberInKeyBoard = 9
    }: SettingProps) => {
    const [passwordLength, setInputValue] = useState<number>(PasswordLengthDefault);
    const [passwordCode, setPasswordCode] = useState<number|undefined>(undefined);

    useEffect(() => {
        const passwordData = {
            password_length: PasswordLengthDefault,
            password: +password(maxNumberInKeyBoard, PasswordLengthDefault)
        }

        setPasswordCode(passwordData.password);
        setInputValue(passwordData.password_length);
        handlePasswordChange(passwordData);
    }, []);

    const onChange = (newPasswordLength: number) => {
        const passwordData = {
            password_length: +newPasswordLength,
            password: +password(maxNumberInKeyBoard, newPasswordLength)
        }

        setPasswordCode(passwordData.password);
        setInputValue(passwordData.password_length);
        handlePasswordChange(passwordData);
    };

    return (
        <div>
            <Divider orientation="left">Generate password for intercom</Divider>
            <p>Password length</p>
            <Slider
                min={2}
                max={6}
                onChange={onChange}
                value={passwordLength}
            />
            <p>Generated password:</p>

            <Input.Password value={passwordCode} />
        </div>
    )
};

export default SettingForm;