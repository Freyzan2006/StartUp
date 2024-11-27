from django.http import HttpResponse

def hi(request):
    if request.method == "GET":
        return HttpResponse("<h1>Hello World</h1>")
    else:
        return HttpResponse("<h1>List Not Found</h1>")