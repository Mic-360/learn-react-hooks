import { FC, useEffect, useState } from 'react';

//React Function Component
const Effect: FC = () => {
    const [resourceType, setResourceType] = useState('Posts');
    const [items, setItems] = useState([]);
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    //onresize event handler to update window size
    const handleResize = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    //useEffect hook to call api and update state on resourceType change
    //useEffect hook to add event listener on mount and remove event listener on unmount
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json));
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        //array is used to specify when to call useEffect hook
    }, [resourceType, size]);

    return (
        <div id='effect'>
            <h1>Effect</h1>
            <p>Window width : {size.width}</p>
            <div>
                <button onClick={() => setResourceType('Users')}>User</button>
                <button onClick={() => setResourceType('Posts')}>Posts</button>
                <button onClick={() => setResourceType('Comments')}>Comment</button>
            </div>
            <p>{resourceType}</p>
            {/* pulling data from https://jsonplaceholder.typicode.com/ */}
            <div className='Json'>
                {items.map((items: any) => {
                    return <pre>{JSON.stringify(items)}
                    </pre>
                })}
            </div>
        </div>
    );
}
export default Effect;