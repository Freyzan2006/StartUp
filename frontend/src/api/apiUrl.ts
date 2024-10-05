
export const BaseUrl = {
    Base: process.env.BACKEND_API_URL || "http://localhost:8000/",
    VersionApi: process.env.BACKEND_API_VERSION || "v1/",

    FullApiURL(api: string) {
        return this.Base + this.VersionApi + api;
    }
}


export const HelloWorldURL = "helloWorld/"
