// get user's data
// get user's coordinates
async function getCoord() {
    const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    console.log(position)
    return [position.coord.latitude, position.coord.longitude]
}

// get user's time
function userTime() {
    const now = new Date()
    return now.getHours()
}

// helper functions
// check time of day
function mealType() {
    const hour = userTime()
    if (hour > 20) {
        return 'late-night snack'
    } else if (hour > 16) {
        return 'dinner'
    } else if (hour > 11) {
        return 'lunch'
    } else {
        return 'breakfast'
    }
}



// build ads
// build ad 1
function buildAd1() {
    const meal = mealType()
    const content = document.querySelector('.ad1')
    const paragraph = document.createElement('p')
    paragraph.innerHTML `We got the best <span>${meal}</span> in town`
    content.append(paragraph)
}

// build ad 2

function buildAd2(coord) {
    const href = `https://www.google.com/maps/search/coffee/@${coord[0]},${coord[1]},15z`
    const content = document.querySelector('.ad1')
    const paragraph = document.createElement('p')
    paragraph.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(paragraph)

}

window.onload = async () => {
    buildAd1()
}

// event listeners
// on load, build ads
