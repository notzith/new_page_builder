from django.shortcuts import render, HttpResponse, render, redirect
from django.http import JsonResponse


# Create your views here.
def index(request):
    return render(request, 'index.html')


def head_creator(request):
    Func = open("mysite/templates/custom/header.html", "a")
    Func.write("<h1>Hello world sample 2134</h1>")
    Func.close()
    return JsonResponse({'status': 'Success'}, status=200, safe=False)


def para_creator(request):
    Func = open("mysite/templates/custom/header.html", "a")
    Func.write("<p>demo paragraph</p>")
    Func.close()
    return JsonResponse({'status': 'Success'}, status=200, safe=False)


def link_creator(request):
    Func = open("mysite/templates/custom/header.html", "a")
    Func.write('<a href="https://www.w3schools.com">Visit W3Schools.com!</a>')
    Func.close()
    return JsonResponse({'status': 'Success'}, status=200, safe=False)


def image_creator(request):
    Func = open("mysite/templates/custom/header.html", "a")
    Func.write('<img src="C:\TECHVARAHA\new_page_builder\builder\static\img\pincrow.png"')
    Func.close()
    return JsonResponse({'status': 'Success'}, status=200, safe=False)


# def video_creator(request):
#     Func = open("mysite/templates/custom/header.html", "a")
#     # Func.write('<p><iframe width="560" height="315" src="https://www.youtube.com/embed/snxb_PSe3Ps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>)
#     Func.close()
#     return JsonResponse({'status': 'Success'}, status=200, safe=False)
