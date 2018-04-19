export const fetchApi = () => {
    const url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text=\"São%20Carlos,%20SP\")&format=json&env=store://datatables.org/alltableswithkeys";
    return fetch({
        url,
        method: 'GET',
    })
        .then(async (result) => {
            const {
                query: {
                    results: {
                        channel: {
                            item: {
                                forecast
                            }
                        }
                    }
                }
            } = await result.json();
            return forecast;
        });
}