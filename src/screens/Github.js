import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import { getGithubRepos } from '../API/API_helper';
import Table from '../components/Github_Table';
import '../resume.css';
const Github = () => {
    const [repos, setrepos] = useState([]);
    const loadRepos = () => {
        getGithubRepos().then(data => {
            if (typeof window !== undefined) {
                if (sessionStorage.getItem('repos')) {
                    setrepos(JSON.parse(sessionStorage.getItem('repos')));
                } else {
                    setrepos(data);
                    sessionStorage.setItem('repos', JSON.stringify(data));
                }

            }
        }).catch(e => console.log(e));
    };

    useEffect(() => {
        loadRepos();
    }, []);

    const badge = () => {
        return (
            <div className="mt-5 text-center mb-3">
                <button type="button" className="btn btn-primary mt-5 badge-deco">
                    My Github Repositories <span className="badge badge-light ml-2">{repos.length}</span>
                </button>
            </div>
        )
    }

    return (
        <div className="container-fluid">
            <Navbar />
            <div className="mt-5 ">
                {badge()}
                <Table data={repos} />
            </div>
        </div>
    );
}


export default Github;
