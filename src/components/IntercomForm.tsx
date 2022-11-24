import React, {FC, useState} from 'react';
import {Button, Col, Divider, Row} from "antd";
import {CalculatorOutlined, ClearOutlined} from "@ant-design/icons";

const style: React.CSSProperties = {
    fontSize: "20px",
    width: "50px",
    height: "50px",
};

type IntercomForm = {
    maxNumberInKeyBoard: number
}

const IntercomForm: FC<IntercomForm> = ({maxNumberInKeyBoard= 9}) => {
    return (
        <>
            <Divider orientation="left">Intercom</Divider>

            <div style={{paddingBottom: "10px"}}>
                <span style={{fontSize: "40px", margin: "0 auto"}}>31 _ _</span>
            </div>

            <Row gutter={[16, 16]}>
                {new Array(maxNumberInKeyBoard)
                    .fill(null)
                    .map((_, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Col className="gutter-row" span={8}>
                            <Button type="primary"
                                    value={index + 1}
                                    key={index + 1}
                                    style={style}
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