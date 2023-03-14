from django.shortcuts import render, HttpResponse, render, redirect
from django.http import JsonResponse




# Create your views here.
def index(request):
    return render(request, 'index.html')

def page_creator(request):
    Func = open("mysite/templates/custom/header.html","w")
    Func.write("<h1>Hello world sample</h1>")
    Func.close()
    return JsonResponse({'status' : 'Success'}, status=200, safe=False)   
