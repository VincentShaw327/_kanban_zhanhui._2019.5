import createEnum from './index'

export const workCenter=createEnum({
    OFFLINE: [0, '离线中'],
    RUNNING: [1, '运行中'],
    WARNING: [-1, '运行中']

})
