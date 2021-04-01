from django import forms

from .models import Article

class BlogForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = [
            "title",
            "description"
        ]
    def clean_title(self, *args, **kwargs):
        title = self.cleaned_data.get("title")
        if not "news" in title:
            raise forms.ValidationError("Title must include news")
        return title
    