import Layout from '../layout';

const Home = ()=>{
    return (
        <Layout>
            <div className="grid md:grid-cols-4 gap-5">
                {
                    Array(12).fill(0).map((item,index)=>(
                        <div key={index} className="flex flex-col gap-y-4">
                            <img src={`thumb/0.jpg`} className="rounded-lg" />
                            <div className="flex gap-x-4">
                                <img 
                                    src="https://yt3.ggpht.com/g_V8HPxmEoE8exOkI1F1Vud9rg91SccSjoEKNdGE9otuFnVUxbFTqI71g33SS367FFhOLtrCBqU=s68-c-k-c0x00ffffff-no-rj" 
                                    className="rounded-full w-10 h-10"
                                />
                                <div>
                                    <h1 className="text-sm font-semibold mb-3">Kapil Makes Everyone Wear Bunny Headphones | The Kapil Sharma Show | Tonight At 9:30 PM by SET India 1 day ago 1 minute, 29 seconds 214,035 views</h1>
                                    <div className="flex items-center gap-x-2 items-center mb-1">
                                        <p className="text-xs text-slate-500">Set India</p>
                                        <span className="material-icons" style={{fontSize: 16}}>check_circle</span>
                                    </div>
                                    <div className="flex items-center gap-x-2 items-center">
                                        <p className="text-xs text-slate-500">120K View</p>
                                        <p className="text-xs text-slate-500">1 Day Ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}

export default Home