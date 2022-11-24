import React, {useState} from 'react';
import {Layout, Button, Divider, Row, Col} from 'antd';

import SettingForm from "./components/SettingForm";

const {Content} = Layout;
const maxNumberInKeyBoard = 9;

const style: React.CSSProperties = {
    fontSize: "30px",
    width: "50px",
    height: "50px",
};

const App: React.FC = () => {
    return (
        <Layout>
            <Content style={{ padding: '50px', width: '500px', margin: '0 auto' }}>
                <SettingForm numberButtons={maxNumberInKeyBoard} />

                <>
                    <Divider orientation="left">Intercom</Divider>

                    <div style={{paddingBottom: "10px"}}>
                        <span style={{fontSize: "40px", margin: "0 auto"}}>1128</span>
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

                        {/*<ClearOutlined /><CalculatorOutlined />*/}
                        <Col span={8}>
                            <Button type="primary"
                                    value="clear"
                                    key="clear"
                                    style={style}
                            >C</Button>
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
                            >GO</Button>
                        </Col>
                    </Row>
                </>
            </Content>
        </Layout>
    )
};

export default App;
