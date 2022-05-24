import decode from 'jwt-decode';
import {AuthProvider} from 'react-admin';

const authProvider = {
    //Authentication
    login: params => Promise.resolve()
}

export default authProvider