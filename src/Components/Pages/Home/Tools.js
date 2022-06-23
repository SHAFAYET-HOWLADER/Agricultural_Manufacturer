import React from 'react';
import { useState, useEffect} from 'react';
import DisplayTools from './DisplayTools';
import tools_logo from '../../../tools_img/logo_tools.png';
const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/tools`)
        .then(res=>res.json())
        .then(data=> setTools(data))
    },[])
    // const productTools = [...tools].reverse();
    // const toolsItems = productTools.slice(0,6);
    return (
        <section className='tools py-24'>
                <div className="flex text-center flex-col w-full border-opacity-50">
                    <h2 className='font-heading text-4xl font-bold'>Popular Production Tools</h2>
                    <div className="divider">
                        <img className='w-10 h-10' src={tools_logo} alt='img' />
                    </div>
                    <p className=' pb-8 font-paragraph'>Most relevant products are produced in manufacturer industry for agriculture purpose.</p>
                </div>

                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        tools.map(tool => <DisplayTools
                            key={tool._id}
                            tool={tool}
                        ></DisplayTools>)
                    }
                </div>
        </section>
    );
};

export default Tools;