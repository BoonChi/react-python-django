from tutorial.models import Student, Book
from django.contrib import admin

admin.site.register(Student)
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('isbn', 'title' )
    # search_fields = ('title')
