import React, { useState, useEffect } from 'react';
import { getFolders } from '../../services/devoService';
import FolderAccordion from '../../components/folder/folder';

function Devo() {
    const [folders, setFolders] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({})

    useEffect(() => {
        setLoading(true);
        
        const fetchData = async () => {
            try {
                setFolders(await getFolders());
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {folders.map((folder, index) => (<FolderAccordion folder={folder} id={index}></FolderAccordion>))}
        </div>
    );
}

export default Devo;