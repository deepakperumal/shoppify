import { environment } from '../../environments/environment';

let url = 'http://localhost:3000'
if (environment.production) {
    url = ''
}

export const URL = url;
