from django.shortcuts import render
from .models import Product
from .form import ProductForm, RawProductForm
# Create your views here.
def product_detail_view(request):
    obj = Product.objects.get(id=1)
    context = {
        "object": obj
    }
    # context = {
    #     "title": obj.title,
    #     "description": obj.description,
    #     "price": obj.price
    # }
    return render(request, "product/detail.html",context)


def product_create_view(request):
    form = ProductForm()
    if request.method == 'POST':
        form = ProductForm(request.POST)
    # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            form.save()
            form = ProductForm()
    context = {
        'form': form
    }
    return render(request, 'product/create.html', context)

def product_form_create_view(request):
    form = RawProductForm()
    if request.method == 'POST':
        form = RawProductForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            Product.objects.create(**form.cleaned_data)
            form = RawProductForm()
    context = {
        'form': form
    }
    return render(request, 'product/create.html', context)


    