import React, {FC, useState} from 'react';
import {Button, Col, Divider, Row} from "antd";
import {CalculatorOutlined, ClearOutlined} from "@ant-design/icons";
import {passwordData} from "../App";

const style: React.CSSProperties = {
    fontSize: "20px",
    width: "50px",
    height: "50px",
};

type IntercomForm = {
    maxNumberInKeyBoard: number,
    password: passwordData
}

const generatePasswordOutput = function (passwordLength: number|undefined, inputPassword: string|undefined) {
    if (passwordLength === undefined) {
        return '';
    }

    let lengthInputPassword = (typeof inputPassword === "undefined" ? 0 : inputPassword.length);

    if (lengthInputPassword > passwordLength) {
        // @ts-ignore
        return inputPassword.substr(0, passwordLength);
    }

    let underscores = getUnderscoreLine(passwordLength, lengthInputPassword);

    return (typeof inputPassword !== "undefined") ? underscores + inputPassword : underscores;
}

function getUnderscoreLine(passwordLength: number, lengthInputPassword: number) {
    const symbolForFill = '_';
    const symbolForSeparator = ' ';

    let lengthUnderscore = passwordLength - lengthInputPassword;

    return Array(lengthUnderscore).fill(symbolForFill).join(symbolForSeparator);
}

const IntercomForm: FC<IntercomForm> = ({maxNumberInKeyBoard= 9, password}) => {
    const [inputPassword, setInputPassword] = useState<string|undefined>(undefined);

    const handleNumberKeyboard = (value: number) => () => {
        let concatPassword = '' + value;

        if (typeof inputPassword !== "undefined") {
            concatPassword = inputPassword + concatPassword;
        }
        setInputPassword(concatPassword);
    }

    return (
        <>
            <Divider orientation="left">Intercom</Divider>

            <div style={{paddingBottom: "10px"}}>
                <span style={{fontSize: "40px", margin: "0 auto"}}>
                    {generatePasswordOutput(password.password_length, inputPassword)}
                </span>
            </div>

            <Row gutter={[16, 16]}>
                {new Array(maxNumberInKeyBoard)
                    .fill(null)
                    .map((_, index) => (
                        <Col className="gutter-row" span={8} key={index + 1}>
                            <Button type="primary"
                                    value={index + 1}
                                    key={index + 1}
                                    style={style}
                                    onClick={handleNumberKeyboard(index + 1)}
                            >{index + 1}</Button>
                        </Col>
                    ))}

                <Col span={8}>
                    <Button type="primary"
                            value="clear"
                            key="clear"
                            style={style}
                    ><ClearOutlined /></Button>
                </Col>
                <Col span={8}>
                    <Button type="primary"
                            value="0"
                            key="0"
                            style={style}
                            onClick={handleNumberKeyboard(0)}
                    >0</Button>
                </Col>
                <Col span={8}>
                    <Button type="primary"
                            value="go"
                            key="go"
                            style={style}
                    ><CalculatorOutlined /></Button>
                </Col>
            </Row>
        </>
    );
}

export default IntercomForm;