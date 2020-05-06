import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SEARCH, API_STACKEXCHANGE } from '../../../constants/env-constants';
import { REQUEST_PARAMS } from '../../../constants/other-constants';

@Injectable()
export class SearchService {

    constructor(
        public http: HttpClient,
        ) { }

    public searchQuestions(search: string) {
        return this.http.get(`${API_STACKEXCHANGE}${SEARCH}`, {
            params: {
                ...REQUEST_PARAMS,
                intitle: search,
            }
        });
    }
}
