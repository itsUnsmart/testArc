exports.handler = async function http(req) {
    const body = {}

    try {
        const response = await require('@architect/shared/helpers').readSession(
            req
        )

        body.status = 200
        body.session = response
    } catch (error) {
        body.status = 500
        body.error = error
    }

    return {
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body)
    }
}
