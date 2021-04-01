from django import forms

from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = [
            "title",
            "description",
            "price"
        ]
    def clean_title(self, *args, **kwargs):
        title = self.cleaned_data.get("title")
        if not "CFE" in title:
            raise forms.ValidationError("Title must include CFE")
        if not "news" in title:
            raise forms.ValidationError("Title must include news")
        return title
        
class RawProductForm(forms.Form):
    title = forms.CharField(label="Your Title", max_length=100)
    
    description = forms.CharField(label="Your description", max_length=500)
    
    price = forms.DecimalField(max_digits=10, decimal_places=2)
    