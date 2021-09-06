const request = require('postman-request')
const { callbackify } = require('util')



const forecast = ((latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e179552f9f26312fcb0a4cc6ab3763ec&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees and it feels like ' + body.current.feelslike + ' degrees. The humidity is ' + body.current.humidity + '% with a UV index of ' + body.current.uv_index + '.'
            )
            }
    })
})

module.exports = forecast

