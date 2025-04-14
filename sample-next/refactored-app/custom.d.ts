interface WeatherProps {
    weather: string;
}

type WheaterDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
};

type responseItemType = {
    id: string;
    name: string;
};