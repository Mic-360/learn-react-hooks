import { FC } from 'react';
import ContextProvider from './ContextProvider';
// import ClassContext from './ClassContext';
import FunctionContext from './FunctionContext';

const Context: FC = () => {

    return (
        <>
            <h1>Context</h1>
            <ContextProvider> {/* Custom Context Provider */}
                {/* <ClassContext /> */}
                <FunctionContext />
            </ContextProvider>
        </>

    );
}
export default Context;