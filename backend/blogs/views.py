from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BlogSerializer,UserSerializer,UserSerializerWithToken
from .models import Article
from .form import BlogForm


from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.
def blog_detail(request,myid):
    obj = Article.objects.get(id=myid)
    context = {
        "object": obj
    }
    print(context)
    return render(request, "article/detail.html",context)

def blog_list(request):
    obj = Article.objects.all()
    context = {
        "object": obj
    }
    print(context)
    return render(request, "article/list.html",context)

class BlogView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Article.objects.all()
    

@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    serializer = UserSerializer(request.user)
    
    return Response(serializer.data)

class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """
    
    permissions_classes = (permissions.AllowAny,)
    
    def post(self,request,format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    