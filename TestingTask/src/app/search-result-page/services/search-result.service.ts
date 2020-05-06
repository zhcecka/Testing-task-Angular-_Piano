import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../../app/models/search-page.modes';
import { API_STACKEXCHANGE, USERS, QUESTIONS, TAGS, ANSWERS, TAGS_SECOND_PART } from '../../../constants/env-constants';
import { REQUEST_PARAMS } from '../../../constants/other-constants';

@Injectable()
export class SearchResultService {

    constructor(
        public http: HttpClient,
        ) { }

    public getPopularQuestions(id: number | string) {
        return this.http.get(`${API_STACKEXCHANGE}${USERS}/${id}${QUESTIONS}`, {
            params: {
                ...REQUEST_PARAMS,
                sort: 'votes',
            }
        });
    }
    public getQuestionInfo(id: number) {
        return this.http.get(`${API_STACKEXCHANGE}${QUESTIONS}/${id}${ANSWERS}`, {
            params: REQUEST_PARAMS,
        });
    }

    public getPopularQuestionsByTag(tag: string) {
        return this.http.get(`${API_STACKEXCHANGE}${TAGS}/${tag}${TAGS_SECOND_PART}`, {
            params: REQUEST_PARAMS,
        });
    }

    public filterItems(items: Item[], tag: string) {
        return items.filter((item: Item) => this.findTag(tag, item));
    }

    public findTag(desiredTag: string, item: Item) {
        return item.tags.find((tag: string) => desiredTag === tag) ? true : false;
    }

}
