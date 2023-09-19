import { useNavigate } from "react-router-dom"

const ProjectPageWrapper = (Component, idName) => function HOC() {
    const navigate = useNavigate();
    return (
        <div className="py-[80px]">
            <div className='w-fit bg-slate-800 rounded-full'>
                <button className='hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-cyan-500 to-lime-500 py-2 px-5 text-[20px] text-white' onClick={() => {navigate(-1)}}>
                    Back
                </button>
            </div>
            <Component />
        </div>
    )
}

export default ProjectPageWrapper