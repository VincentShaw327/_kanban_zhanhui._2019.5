import fetch from 'isomorphic-fetch'
import { prefix, suffix } from '../config'

/* function buildParams(obj) {
  if (!obj) {
    return ''
  }
  const params = []
  for (const key of Object.keys(obj)) {
    const value = obj[key] === undefined ? '' : obj[key]
    params.push(`${key}=${encodeURIComponent(value)}`)
  }
  const arg = params.join('&')
  return arg
} */

// formdata的方式传输数据
export function fetchForm( url, params ) {
  params = {
    ...params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      ...params.headers,
    },
  }
  url = `${prefix}${url}${suffix}`
  return fetch( url, params )
}

export function fetchJSON( url, params, target ) {
  const obj = {
      data: JSON.stringify( params ),
  }
  const data = {
    method: 'POST',
    // 'Content-Type': 'application/json',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept-Type': 'application/json;charset=utf-8',
    },
    // credentials: 'include',
    body: JSON.stringify( obj ),
  }
  let newUrl
  if ( target ) {
    newUrl = `${target}${url}${suffix}`
  } else {
    newUrl = `${prefix}${url}${suffix}`
  }
  return fetch( newUrl, data )
}


// eslint-disable-next-line arrow-parens
export const fetchJSONByPost = ( url, target ) => query =>fetchJSON( url, query, target )


/* export const fetchJSONStringByPost = url => (query) => {
  const params = {
    method: 'POST',
    body: query,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }
  return fetchJSON(url, params)
}
 */
