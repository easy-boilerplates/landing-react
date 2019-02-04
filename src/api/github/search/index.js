import {
  callApi
} from "api/ajax";

/**
 * @returns Promise
 * @
 */
export const repositories = () => callApi('search/repositories?q=+language:js&sort=stars&order=desc&page=1&per_page=10')

export default {
  repositories
}