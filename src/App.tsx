import React, {useState} from 'react';
import {Layout} from 'antd';

import SettingForm from "./components/SettingForm";
import IntercomForm from "./components/IntercomForm";

const {Content} = Layout;
const maxNumberInKeyBoard = 9;

export type passwordData = {
    password: number | undefined;
    password_length: number | undefined;
}

const defaultPasswordData = {
    password: undefined,
    password_length: undefined
}

const App: React.FC = () => {

    const [password, setPassword] = useState<passwordData>(defaultPasswordData);

    const handlePasswordChange = (passwordData: passwordData) => {
        setPassword({ ...passwordData });
    };

    return (
        <Layout>
            <Content style={{ padding: '50px', width: '500px', margin: '0 auto' }}>

                <SettingForm
                    handlePasswordChange={handlePasswordChange}
                    maxNumberInKeyBoard={maxNumberInKeyBoard}
                />

                <IntercomForm
                    maxNumberInKeyBoard={maxNumberInKeyBoard}
                    password={password}
                />
            </Content>
        </Layout>
    )
};

export default App;
