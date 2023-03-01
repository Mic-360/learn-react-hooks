import { FC, useEffect, useState } from 'react';
import useSWR from 'swr';

//useSWR hook to fetch data from api
const fetcher = (url: string) => fetch(url).then((response) => response.json());

//React Function Component
const Effect: FC = () => {
  // timer variable to store Interval
  const [effectTimer, setEffectTimer] = useState(0);

  //useState hook to store resource type
  const [resourceType, setResourceType] = useState('Posts');
  //useState hook to store data from api
  const [items, setItems] = useState([]);

  //useState hook to store window size
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  //onresize event handler to update window size
  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  //useEffect hook to call api and update state on resourceType change
  //useEffect hook to add event listener on mount and remove event listener on unmount
  useEffect(() => {
    const startEffect = new Date().getMilliseconds();

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
      .then(() => setEffectTimer(new Date().getMilliseconds() - startEffect));

    //adding event listener on mount and removing on unmount
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

    //array is used to specify when to call useEffect hook
  }, [resourceType, size]);

  //useSWR hook to fetch data from api
  const { data } = useSWR<string[]>(
    `https://jsonplaceholder.typicode.com/${resourceType}`,
    fetcher
  );

  console.log(data);

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
      <p>Time: {effectTimer}ms</p>
      {/* pulling data from https://jsonplaceholder.typicode.com/ */}
      <div className='Json'>
        {items.map((items: string, index: number) => {
          return <pre key={index}>{JSON.stringify(items)}</pre>;
        })}
      </div>
      <p>{resourceType} with SWR</p>
      <div className='Json'>
        {data?.map((items: string, index: number) => {
          return <pre key={index}>{JSON.stringify(items)}</pre>;
        })}
      </div>
    </div>
  );
};
export default Effect;
