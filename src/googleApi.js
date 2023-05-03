
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const addressComponents = data.results[0].address_components;
            let city = "";
            for (let i = 0; i < addressComponents.length; i++) {
                if (addressComponents[i].types.includes("locality")) {
                    city = addressComponents[i].long_name;
                    break;
                }
            }
            console.log(`Your city is ${city}`);
        })
        .catch((error) => console.log(error));
}

export default showPosition