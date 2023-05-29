import _ from 'lodash'

const removeEmptyProps = (obj: any): any => {
    return _.transform(obj, function (result, value, key) {
        if (_.isObject(value)) {
            value = removeEmptyProps(value);
        }
        if (!_.isEmpty(value)) {
            result[key] = value;
            if (_.isArray(value)) {
                result[key] = _.compact(value);
            }
            if (_.isObject(value)) {
                const isEmptyObject = _.isEmpty(_.omitBy(value, _.isFunction));
                if (!isEmptyObject) {
                    result[key] = value;
                }
            }
        }
    });
}

export default removeEmptyProps