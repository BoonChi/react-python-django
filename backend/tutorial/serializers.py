from tutorial.models import Student, Book
from rest_framework import serializers


class StudentSerializer(serializers.ModelSerializer):
    """
    Serializing all the Students
    """
    class Meta:
        model = Student
        fields = ('id', 'first_name', 'last_name', 'books')
        extra_kwargs = {'books': {'required': False}}
        
class BookSerializer(serializers.ModelSerializer):
    """
    Serializing all the Books
    """
    students = StudentSerializer(many=True, read_only=True)
    class Meta:
        model = Book
        fields = ('id', 'title', 'isbn','students')
        extra_kwargs = {'students': {'required': False}}
        depth = 1

