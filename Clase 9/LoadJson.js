class LoadJson extends XMLHttpRequest {
    constructor(url, callback) {
        super();

        this.open('GET', url);
        this.responseType = 'json';

        this.send();
        
        this.addEventListener('load', () => callback(this.response));
    }
}


new LoadJson('datos.json', function(response){
    console.log(response);
});