from django.urls import path
from tutorial.views import StudentList, StudentDetail, BookList,BookDetail

urlpatterns = [
    path('students/', StudentList.as_view()),
    path('students/<int:pk>', StudentDetail.as_view()),
    path('books/', BookList.as_view()),
    path('books/<int:pk>', BookDetail.as_view())
]