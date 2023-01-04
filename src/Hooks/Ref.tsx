import { FC, useState } from 'react';
import '../App.css';

const Ref: FC = () => {
    const [name, setName] = useState<string>('');

    return (
        <div id='Ref'>
            <h1>useRef</h1>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>This is a {name} Hook</div>
        </div>
    );
}
export default Ref;