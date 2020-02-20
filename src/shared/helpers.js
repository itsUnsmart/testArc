module.exports.readSession = async (req) => {
    try {
        console.log('Inside readSession')
        let session = await require('@architect/functions').http.session.read(
            req
        )
        console.log('Read user session')

        return Promise.resolve(session)
    } catch (error) {
        console.error(error.message || error, 'readSession Error')
        return Promise.reject(error)
    }
}
