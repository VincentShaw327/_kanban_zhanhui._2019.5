export default function createEnum(definition) {
    const strToValueMap = {}
    const numToDescMap = {}
    for (const enumName of Object.keys(definition)) {
        const [value, desc] = definition[enumName]
        strToValueMap[enumName] = value
        numToDescMap[value] = desc
    }
    return {
        ...strToValueMap,
        getDesc(enumName) {
            return definition[enumName] && definition[enumName][1] || ''
        },
        getDescFromValue(value) {
            return numToDescMap[value] || ''
        }
    }
}

/* 使用案例 */
const STATUS = createEnum({
    AUDITING: [0, '审核中'],
    PASS: [1, '审核通过']
})

{/* <span v-if="status == STATUS.AUDITING">审核中</span> */}
{/* <span v-else-if="status == STATUS.PASS">审核通过</span> */}

<p>当前状态：{STATUS.getDescFromValue(syncData.status)}</p>
<p>也可用通过枚举名称获取描述：{STATUS.getDesc('AUDITING')}</p>