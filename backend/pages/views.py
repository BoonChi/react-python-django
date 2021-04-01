from django.http import HttpResponse
from django.shortcuts import render
# Create your views here.
def home_view(request,*args, **kwargs):
    # return HttpResponse("<h1>Home View</h1>")
    return render(request,"home.html",{})

def about_view(request,*args, **kwargs):
    # return HttpResponse("<h1>Home View</h1>")
    data = {
        "my_text": "Hello Text",
        "my_number": 1234,
        "my_list": ["we","are","happy", 123]
    }
    return render(request,"about.html",data)