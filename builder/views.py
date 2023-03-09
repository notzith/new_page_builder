from django.shortcuts import render, HttpResponse, render, redirect
from django.http import JsonResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def page_creator(request):
    print('hello')
    return JsonResponse({"status":1})
    return JsonResponse({'status' : '1'}, status=200, safe=False)   
