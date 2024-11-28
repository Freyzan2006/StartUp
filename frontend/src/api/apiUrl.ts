
export const BaseUrl = {
    Base: process.env.BACKEND_API_URL || "http://localhost:8000/",
    API: process.env.API || "api/",
    VersionApi: process.env.BACKEND_API_VERSION || "v1/",

    FullApiURL(api: string) {
        return this.Base + this.API + this.VersionApi + api;
    }
}


export const HelloWorldURL = "main/"
