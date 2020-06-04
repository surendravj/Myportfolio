import React from 'react';
import '../resume.css';
const Table = ({ data }) => {

    function showMsg(repoUrl) {
        alert("Clone link copied to clipboard");
        navigator.clipboard.writeText(repoUrl);
    }

    const renderColumn = () => {
        return data.map((repo, i) => {
            return (
                <div className=" col-lg-3 col-md-3 col-sm-3 col-xs-12 github-div mr-1 mb-1" key={i}>
                    <div className="github-name text-center">
                        <p>{repo.full_name}</p>
                    </div>
                    <div className=" text-center mb-2">
                        <span className="badge github-badge ">{repo.language}</span>
                    </div>
                    <div className="github-buttons">
                        <a href={repo.svn_url} target="_blank" rel="noopener noreferrer ">Github</a>
                        <button className="click-copy" onClick={() => showMsg(repo.clone_url)}>Clone</button>
                        <a href="https://github.com/surendravj" target="_blank" rel="noopener noreferrer ">Profile</a>
                    </div>
                </div>
            );
        })
    }
    return (
        <div className="row github-row" >
            {renderColumn()}
        </div>

    )
}

export default Table;

