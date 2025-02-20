import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const { userData, repoData } = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <p>Github Profile {userData.followers}</p>
            <img src={userData.avatar_url} alt="GitHub Avatar" width={200} className="mx-auto rounded-full" />

            <h2 className="text-2xl mt-4">Repositories:</h2>
            <ul className="text-lg text-left mx-auto w-1/2">
                {repoData.map(repo => (
                    <li key={repo.id} className="bg-gray-800 p-2 m-2 rounded">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const userResponse = await fetch('https://api.github.com/users/Harshit4053');
    const repoResponse = await fetch('https://api.github.com/users/Harshit4053/repos');

    const userData = await userResponse.json();
    const repoData = await repoResponse.json();

    return { userData, repoData };
};

