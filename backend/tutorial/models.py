from django.db import models

# Create your models here.

# student(result per subject), teacher, lectures(specific subject), 

class Book(models.Model):
    title = models.CharField(max_length=50)
    isbn = models.CharField(max_length=30)
        
    def __str__(self):
        return self.title
    
class Student(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    books = models.ManyToManyField(Book, related_name="students", null=True)
    
    def __str__(self):
        return self.last_name
    
##############################################################################################

class Teacher(models.Model):
    name = models.CharField(max_length=30)
    
class Course(models.Model):
    name = models.CharField(max_length=30)
    teacher = models.ForeignKey(Teacher, on_delete=models.DO_NOTHING, related_name="courses")
    students = models.ManyToManyField(Student, through='Result', related_name="courses")

class Result(models.Model):
    student = models.ForeignKey(Student, on_delete=models.DO_NOTHING,related_name="results")
    course = models.ForeignKey(Course, on_delete=models.DO_NOTHING,related_name="results")
    result = models.DecimalField(max_digits=2,decimal_places=1)
    


