/*import { get } from 'axios';

const authRequestWrapper = store => next => action => {
    console.log('dispatching', JSON.stringify(action));

    if(action.hasOwnProperty("request")) {
        console.log('auth request: ', action.request);
        get(request.url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            return response.daat
        }).catch(error => {
            console.log('hiba: ', error.message);
        });
    } else {
        console.log('public request: ', action);
    }

    let result = next(action);
    //console.log('next state', store.getState());
    return result;
};

export default authRequestWrapper;*/
