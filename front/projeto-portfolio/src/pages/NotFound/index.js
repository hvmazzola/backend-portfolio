import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div className='flex flex-col space-y-4 mt-10 items-center'>
            <h1 className='text-gray-600'>ERR 404: NOT FOUND</h1>
            <Link to='/' className='bg-primary px-6 py-3 text-white rounded-full transition duration-700 hover:scale-105'>Voltar à Home</Link>
        </div>
    )
}

export default NotFound;