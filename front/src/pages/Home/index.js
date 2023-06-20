import React from 'react';
import ProjectList from '../../components/ProjectList';

const Home = () => {
    return (
        <>
            <section className='home-banner w-full'>
                <div className='flex flex-col items-center justify-center h-full'>
                    <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-normal text-white'>Bem-vindo, meu nome é Henrique Mazzola.</h1>
                </div>
            </section>
            <ProjectList/>
        </>
    )
}

export default Home;