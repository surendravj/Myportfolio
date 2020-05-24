import React from 'react';
import '../resume.css';
const Table = ({ data }) => {

    const renderColumn = () => {
        return data.map((repo, i) => {
            return (
                <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{repo.full_name}</td>
                    <td><a href={repo.svn_url} rel="noopener noreferrer" target="_blank">Open repo</a></td>
                    <td>{repo.language}</td>
                    <td className="test-center">{repo.clone_url}</td>
                </tr>
            )
        })
    }
    return (
        <div className="mt-4 tables">
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">S-NO</th>
                        <th scope="col">Repository name</th>
                        <th scope="col">Repository link</th>
                        <th scope="col">Language</th>
                        <th scope="col">Clone link</th>
                    </tr>
                </thead>
                <tbody>
                    {renderColumn()}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
