const errors = require('./errors')

exports.getResponse = (success, e) => {
    if(success) {
        return {
            data: e || {},
            success: true
        }
    } else {
        return {
            success: false,
            error: e || '',
            errorMsg: errors[e] || e.errorMsg
        }
    }
}