import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useTitle from '../../hooks/useTitle';

const Welcome = () => {

    useTitle('Pindro Notes - Welcome');

    const { username, isManager, isAdmin } = useAuth();

    const date = new Date();
    const today = new Intl.DateTimeFormat('en-UK', { dateStyle: 'full', timeStyle: 'long' }).format(date);

    const content = (
        <section className='welcome'>
            <p>{today}</p>
            <h1>Welcome {username}!</h1>
            <p><Link to="/dash/notes">View PindroNotes</Link></p>

            <p><Link to="/dash/notes/new">Add new PindroNotes</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users">View User Settings</Link></p>}

            {(isManager || isAdmin) && <p><Link to="/dash/users/new">Add New User</Link></p>}

        </section>
    );

    return content;
}

export default Welcome;