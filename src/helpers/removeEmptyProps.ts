import _ from 'lodash'

const removeEmptyProps = (obj: any): any => {
    return _.transform(obj, function (result, value, key) {
        if (_.isObject(value)) {
            value = removeEmptyProps(value);
        }
        if (!_.isEmpty(value) || _.isNumber(value) || _.isBoolean(value)) {
            result[key] = value;
            if (_.isObject(value)) {
                const isEmptyObject = _.isEmpty(_.omitBy(value, _.isFunction));
                if (!isEmptyObject) {
                    result[key] = value;
                }
            }
            if (_.isArray(value)) {
                result[key] = _.filter(value, v => !(_.isEmpty(v) && typeof v !== 'number' && typeof v !== 'boolean'))
            }
            if (_.isNumber(value)) {
                result[key] = value
            }
        }
    });
}

export default removeEmptyProps