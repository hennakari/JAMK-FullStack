import EmbedSDK from '@mongodb-js/charts-embed-dom';

const sdk = new EmbedSDK({
    baseUrl:'https://charts.mongodb.com/charts-project-0-ohfsz'
});

const chart = sdk.createChart({
    chartId: '75ddbab3-a823-4b0d-8946-c265ea2c6d7b',
    width: 640,
    height: 400,
    theme: 'dark'
});

chart.render(document.getElementById("chart"));

