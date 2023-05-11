import queryString from 'query-string';

export default function getQueryParams(string) {
    console.log(string);
    return queryString.parse(string);
} 