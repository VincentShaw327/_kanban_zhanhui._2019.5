import {
    createAction,
} from 'redux-actions'
import {
    user,
    auth,
} from 'api'
import {
    createAjaxAction,
    fakeAjaxAction,
} from 'utils'

/* 用户组请求 */
export const requestUserGroupList = createAction( 'request user group list' );
export const recevieUserGroupList = createAction( 'receive user group list' );
export const fetchUserGroupList =  createAjaxAction(
    user.group,
    requestUserGroupList,
    recevieUserGroupList,
)

/* 权限组请求 */
export const auth_group_list = createAjaxAction(
    auth.auth_group_list,
    createAction( 'request user auth group list' ),
    createAction( 'receive user auth group list' ),
)

/* 用户权限请求 */
export const requestUserAuthList = createAction( 'request user auth list' );
export const recevieUserAuthList = createAction( 'receive user auth list' );
export const fetchUserAuthList = !gconfig.isDemo_dev ? createAjaxAction(
    user.auth,
    requestUserAuthList,
    recevieUserAuthList,
) : fakeAjaxAction(
    user.auth,
    requestUserAuthList,
    recevieUserAuthList,
)

/* 用户角色 */
export const role_list = createAjaxAction(
    user.category_list,
    createAction( 'request user role list' ),
    createAction( 'receive user role list' ),
)
export const role_add = createAjaxAction(
    user.category_add,
    null,
    createAction( 'success add user role' ),
)
export const role_update = createAjaxAction(
    user.category_update,
    null,
    createAction( 'success update user role' ),
)
export const role_delete = createAjaxAction(
    user.category_delete,
    null,
    createAction( 'success delete user role' ),
)


/* 用户账户请求 */
export const account_list = !gconfig.isDemo_dev ? createAjaxAction(
    user.instance_list,
    createAction( 'request user account list' ),
    createAction( 'receive user account list' ),
) : fakeAjaxAction(
    user.instance_list,
    createAction( 'request user account list' ),
    createAction( 'receive user account list' ),
)
export const account_add = createAjaxAction(
    user.instance_add,
    null,
    createAction( 'success add account' ),
)
export const account_update = createAjaxAction(
    user.instance_update,
    null,
    createAction( 'success update account' ),
)
export const account_delete = createAjaxAction(
    user.instance_delete,
    null,
    createAction( 'success delete account' ),
)

/* 用户账户请求 */
export const user_auth_item = createAjaxAction(
    user.auth_item_list,
    createAction( 'request user auth item list' ),
    createAction( 'receive user auth item list' ),
)

export const login = createAjaxAction(
    user.user_login,
    null,
    createAction( 'success login' ),
)

export const auth_config_add = createAjaxAction(
    user.auth_config_add,
    null,
    createAction( 'success add auth config item' ),
)
export const auth_config_update = createAjaxAction(
    user.auth_config_update,
    null,
    createAction( 'success update auth config item' ),
)
export const auth_config_list = createAjaxAction(
    user.auth_config_list,
    createAction( 'request auth config list' ),
    createAction( 'receive auth config list' ),
)
