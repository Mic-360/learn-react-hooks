import { FC } from 'react';
import { useThemeContext, useThemeContextUpdate } from './ContextProvider';

const FunctionContext: FC = () => {
    const Theme = useThemeContext(); // Custom useThemeContext hook
    const toggleTheme = useThemeContextUpdate(); // Custom useThemeContextUpdate hook

    //toggle theme event logic
    const themeStyles = {
        backgroundColor: Theme ? 'black' : 'white',
        color: Theme ? 'white' : 'black',
        margin: '2rem',
        padding: '2rem',
    };

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>Function Theme</div>
        </>
    );
}
export default FunctionContext;