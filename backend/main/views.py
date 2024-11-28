from django.http import JsonResponse

def hi(request):
    if request.method == "GET":
        return JsonResponse({"message":"Hello World"})
    else:
        return JsonResponse({"message":"Not Found"})
