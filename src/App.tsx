import React, {useState} from 'react';
import {Layout} from 'antd';

import SettingForm from "./components/SettingForm";
import IntercomForm from "./components/IntercomForm";

const {Content} = Layout;
const maxNumberInKeyBoard = 9;

const App: React.FC = () => {
    return (
        <Layout>
            <Content style={{ padding: '50px', width: '500px', margin: '0 auto' }}>
                <SettingForm maxNumberInKeyBoard={maxNumberInKeyBoard} />

                <IntercomForm maxNumberInKeyBoard={maxNumberInKeyBoard}/>
            </Content>
        </Layout>
    )
};

export default App;
