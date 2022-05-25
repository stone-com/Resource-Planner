import decode from 'jwt-decode';
import {AuthProvider} from 'react-admin';

const authProvider = {
    //Authentication
    login: ({ username, password }) =>  {
        const request = new Request('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({token})=> {
                
                localStorage.setItem('token', token);
            })
            .catch(() => {
                throw new Error('Network error')
            });
        },
        //logout function removing the username from local storage
        logout: () => {
            localStorage.removeItem('username');
            return Promise.resolve();
        },
        //this is required to ensure that the person is authenticated.
        checkAuth: () => {
            //check for the existence of the authentication data in the local storage
            localStorage.getItem('auth')
            //if auth is true then resolve promise
            ? Promise.resolve()
            //if false then redirect the user to the no-access route
            : Promise.reject( {redirectTo: '/no-access'})
        },
        //if there's an error then log out
        checkError: (error) => {
            const status = error.status;
            if (status === 401 || status === 403) {
                localStorage.removeItem('auth');
                return Promise.reject();
            }
            // other error code (404, 500, etc): no need to log out
            return Promise.resolve();
        },
        getIdentity: () =>{

        }
}

export default authProvider;