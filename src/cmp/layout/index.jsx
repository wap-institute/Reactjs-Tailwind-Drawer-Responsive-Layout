import {useState} from 'react';

const menus = [
    {
        label: 'home',
        icon: 'home'
    },
    {
        label: 'shorts',
        icon: 'app_shortcut'
    },
    {
        label: 'subscriptions',
        icon: 'loyalty'
    },
    {
        label: 'music',
        icon: 'headphones'
    },
    {
        label: 'home',
        icon: 'home'
    },
    {
        label: 'shorts',
        icon: 'app_shortcut'
    },
    {
        label: 'subscriptions',
        icon: 'loyalty'
    },
    {
        label: 'music',
        icon: 'headphones'
    },
    {
        label: 'home',
        icon: 'home'
    },
    {
        label: 'shorts',
        icon: 'app_shortcut'
    },
    {
        label: 'subscriptions',
        icon: 'loyalty'
    },
    {
        label: 'music',
        icon: 'headphones'
    }
]

const Layout = ({children})=>{
    const [open,setOpen] = useState(true);

    return (
        <div>
            <nav className="bg-white border-b fixed top-0 left-0 w-full h-16 z-10 px-5 flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                    <button onClick={()=>setOpen(!open)} className="hover:bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center">
                        <span className="material-icons-outlined" style={{fontSize: 24}}>menu</span>
                    </button>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
                        alt="logo"
                        className="w-16"
                    />
                </div>

                <div className="w-1/2 flex flex-col">
                    <form className="flex">
                        <input className="border border-slate-300 rounded-l h-10 flex-1 p-3" placeholder="Search" />
                        <button className="border border-slate-300 border-l-0 rounded-r h-10 flex items-center justify-center w-16">
                            <span className="text-slate-400 material-icons-outlined" style={{fontSize: 24}}>search</span>
                        </button>
                    </form>
                </div>

                <div className="flex items-center gap-x-2">
                    <button className="hover:bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center">
                        <span className="material-icons-outlined" style={{fontSize: 24}}>videocam</span>
                    </button>
                    <button className="hover:bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center">
                        <span className="material-icons-outlined" style={{fontSize: 24}}>notifications</span>
                    </button>
                    <img 
                        src="https://yt3.ggpht.com/ytc/AL5GRJWYCq8_YLhNg-7BfFJ9Dl5Lbe2R6ChQOQqsVL3ETw=s68-c-k-c0x00ffffff-no-rj"
                        alt="logo"
                        className="w-10 h-10 rounded-full"
                    />
                </div>
            </nav>
            <aside 
                className="overflow-auto bg-white border-r h-full fixed top-0 left mt-16 flex flex-col px-3 gap-y-2 py-3"
                style={{
                    width: open ? 250 : 70,
                    transition: '0.2s'
                }}
            >
                {
                    menus.map((item,index)=>(
                        <button 
                            key={index} 
                            className={`flex ${open ? 'flex-row' : 'flex-col'} ${open ? 'items-start' : 'items-center'} gap-x-5 py-2 px-2 rounded-lg hover:bg-gray-100`}
                        >
                            <span className="material-icons-outlined text-slate-700">{item.icon}</span>
                            <span 
                                className={`capitalize text-slate-700 ${open ? null : 'text-xs'}`}
                            >
                                {open ? item.label : item.label.slice(0,5)}
                            </span>
                        </button>
                    ))
                }
            </aside>
            <section 
                className="mt-16 p-5"
                style={{
                    marginLeft: open ? 250 : 70,
                    transition: '0.2s'
                }}
            >
                {children}
            </section>
        </div>
    )
}

export default Layout;